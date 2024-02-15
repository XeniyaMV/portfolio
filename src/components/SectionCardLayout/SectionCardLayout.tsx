import ContainerLayout from '../ContainerLayout';
import getFullClassName from '../../utils/getFullClassName';
import expandIcon from '../../assets/expand-arrow-icon.svg';
import { useState, useRef, useEffect } from 'react';

interface Props {
  sectionName: string;
  className: string;
  children: JSX.Element;
}

const SectionCardLayout = ({ sectionName, className, children }: Props): JSX.Element => {
  const fullClassName = getFullClassName('section-card', `section-card_${sectionName.toLowerCase().replace(' ', '-')}`);
  const [isOpen, setIsOpen] = useState(false);
  const [heightOfContent, setHightOfContent] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHightOfContent((prev) => contentRef.current?.scrollHeight || prev);
  }, [contentRef.current?.clientHeight]);

  return (
    <section className={fullClassName}>
      <ContainerLayout className={className}>
        <>
          <div
            className={`section-card__content${isOpen ? ' section-card__content_visible' : ''}`}
            ref={contentRef}
            style={isOpen ? { height: `${heightOfContent}px` } : undefined}
          >
            {children}
          </div>
          <div className="section-card__footer">
            <h2 className="section-card__title">{sectionName}</h2>
            <div
              className={`section-card__icon-wrapper${isOpen ? ' section-card__icon-wrapper_hide' : ''}`}
              onMouseDown={(): void => setIsOpen((prev) => !prev)}
            >
              <img src={expandIcon} alt="expand icon" />
            </div>
          </div>
        </>
      </ContainerLayout>
    </section>
  );
};

export default SectionCardLayout;
