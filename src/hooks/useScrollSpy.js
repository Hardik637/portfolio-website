import { useState, useEffect, useRef } from 'react';

export const useScrollSpy = (sectionIds = [], options = {}) => {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');
  const activeIdRef = useRef(activeId);
  activeIdRef.current = activeId;

  // Use a string representation to avoid re-triggering effect if array reference changes
  const sectionIdsKey = sectionIds.join(',');

  useEffect(() => {
    if (!sectionIds.length) return;

    // Track intersection entries by element id
    const visibleEntries = new Map();

    const updateActiveSection = () => {
      // 1. Detect if viewport is at or near the bottom of the page
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollBottom = window.innerHeight + window.scrollY;
      const isAtBottom = scrollBottom >= scrollHeight - 60;

      if (isAtBottom) {
        const lastId = sectionIds[sectionIds.length - 1];
        if (lastId && activeIdRef.current !== lastId) {
          setActiveId(lastId);
        }
        return;
      }

      // 2. Select the section with the highest intersection ratio
      let bestId = '';
      let highestRatio = 0;

      sectionIds.forEach(id => {
        const entry = visibleEntries.get(id);
        if (entry && entry.isIntersecting && entry.intersectionRatio > highestRatio) {
          highestRatio = entry.intersectionRatio;
          bestId = id;
        }
      });

      // 3. Fallback: if ratios are low or equal, choose the first intersecting section in document order
      if (!bestId) {
        for (const id of sectionIds) {
          const entry = visibleEntries.get(id);
          if (entry && entry.isIntersecting) {
            bestId = id;
            break;
          }
        }
      }

      if (bestId && bestId !== activeIdRef.current) {
        setActiveId(bestId);
      }
    };

    // Configure IntersectionObserver with rootMargin tuned for typical section scanning
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          visibleEntries.set(entry.target.id, entry);
        });
        updateActiveSection();
      },
      {
        root: null,
        rootMargin: options.rootMargin || '-15% 0px -40% 0px',
        threshold: options.threshold || [0, 0.2, 0.5, 0.8, 1],
      }
    );

    // Observe all valid section DOM nodes
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Also listen to window scroll to catch edge cases like reaching page bottom
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollBottom = window.innerHeight + window.scrollY;
      if (scrollBottom >= scrollHeight - 60) {
        const lastId = sectionIds[sectionIds.length - 1];
        if (lastId && activeIdRef.current !== lastId) {
          setActiveId(lastId);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      visibleEntries.clear();
    };
  }, [sectionIdsKey, options.rootMargin]);

  return activeId;
};
