import { useState, useRef, useEffect, ElementType } from 'react';

interface Props {
  stuckClassName: string;
  unstuckClassName: string;
  children: JSX.Element;
  tagName?: ElementType;
}

const StickyLayout = ({ tagName, stuckClassName, unstuckClassName, children }: Props): JSX.Element => {
  const [stuck, setStuck] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const Tag = tagName || 'div';

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setStuck(entry.intersectionRatio < 1), { threshold: 1 });
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <Tag className={stuck ? stuckClassName : unstuckClassName} ref={ref}>
      {children}
    </Tag>
  );
};

export default StickyLayout;
