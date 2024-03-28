import SectionCardLayout from '../SectionCardLayout';
import ScrollObserver from '../ScrollObserver';
import Card from './components/Card';
import PROJECT_CARDS from '../../constants/PROJECT_CARDS';

const Projects = (): JSX.Element => (
  <SectionCardLayout sectionName="Projects" className="projects">
    <div className="projects__content">
      {PROJECT_CARDS.map((card) => (
        <div key={card.title} className="projects__card">
          <ScrollObserver>
            <Card card={card} />
          </ScrollObserver>
        </div>
      ))}
    </div>
  </SectionCardLayout>
);

export default Projects;
