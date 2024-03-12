import SectionCardLayout from '../SectionCardLayout';
import ScrollObserver from '../ScrollObserver';
import Card from './components/Card';
import PROJECT_CARDS from '../../constants/PROJECT_CARDS';

const Projects = (): JSX.Element => (
  <SectionCardLayout sectionName="Projects" className="projects">
    <div className="projects__content">
      {PROJECT_CARDS.map((card) => (
        <ScrollObserver key={card.title}>
          <div className="projects__card">
            <Card card={card} />
          </div>
        </ScrollObserver>
      ))}
    </div>
  </SectionCardLayout>
);

export default Projects;
