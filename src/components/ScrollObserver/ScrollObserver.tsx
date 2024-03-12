import { useEffect, useState, useRef } from 'react';

interface Props {
  children: JSX.Element;
}

const ScrollObserver = ({ children }: Props): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.15 }
  );

  useEffect(() => {
    if (contentRef.current) scrollObserver.observe(contentRef.current);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`scroll-observer${isVisible ? ' scroll-observer_visible' : ''}`} ref={contentRef}>
      {children}
    </div>
  );
};

export default ScrollObserver;
