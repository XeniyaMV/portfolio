import ContainerLayout from '../ContainerLayout';
import getFullClassName from '../../utils/getFullClassName';
import { useState, useRef, useEffect } from 'react';

interface Props {
  sectionName: string;
  className: string;
  children: JSX.Element;
}

const SectionCardLayout = ({ sectionName, className, children }: Props): JSX.Element => {
  const fullClassName = getFullClassName('section-card', `section-card_${sectionName.toLowerCase().replace(' ', '-')}`);
  const cardRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsOpen(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) cardObserver.observe(cardRef.current);
  }, []);

  return (
    <section ref={cardRef} className={fullClassName}>
      <ContainerLayout className={className}>
        <>
          <div className={`section-card__content${isOpen ? ' section-card__content_visible' : ''}`} ref={contentRef}>
            {children}
          </div>
          <div className="section-card__footer">
            <h2 className="section-card__title">{sectionName}</h2>
          </div>
        </>
      </ContainerLayout>
    </section>
  );
};

export default SectionCardLayout;
