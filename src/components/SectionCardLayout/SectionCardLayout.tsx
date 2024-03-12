import ContainerLayout from '../ContainerLayout';
import getFullClassName from '../../utils/getFullClassName';

interface Props {
  sectionName: string;
  className: string;
  children: JSX.Element;
}

const SectionCardLayout = ({ sectionName, className, children }: Props): JSX.Element => {
  const fullClassName = getFullClassName('section-card', `section-card_${sectionName.toLowerCase().replace(' ', '-')}`);

  return (
    <section id={sectionName.toLowerCase().replace(' ', '-')} className={fullClassName}>
      <ContainerLayout className={className}>
        <>
          <div className="section-card__content">{children}</div>
          <div className="section-card__footer">
            <h2 className="section-card__title">{sectionName}</h2>
          </div>
        </>
      </ContainerLayout>
    </section>
  );
};

export default SectionCardLayout;
