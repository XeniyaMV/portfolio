import { ProjectCard } from '../../../../types';
import gitHubIcon from '../../../../assets/github-card-icon.svg';
import outIcon from '../../../../assets/out-icon.svg';

interface Props {
  card: ProjectCard;
}

const Card = ({ card }: Props): JSX.Element => (
  <article className="card">
    <div className="card__content">
      <div className="card__container">
        <div className="card__image-wrapper">
          <img src={card.image} alt={`${card.title} image`} />
        </div>
        <div className="card__links-wrapper">
          <ul className="card__links">
            <li>
              <a className="card__link" href={card.linkToCode}>
                <div className="card__icon-wrapper">
                  <img src={gitHubIcon} alt="GitHub icon" />
                </div>
                View on GitHub
              </a>
            </li>
            <li>
              <a className="card__link" href={card.linkToDeploy}>
                <div className="card__icon-wrapper">
                  <img src={outIcon} alt="Out icon" />
                </div>
                Visit Site
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="card__title">{card.title}</h3>
      <ul className="card__tech-stack-list">
        {card.techStack.map((item) => (
          <li key={item} className="card__tech-stack-item">
            {item}
          </li>
        ))}
      </ul>
      <p className="card__description">{card.description}</p>
    </div>
  </article>
);

export default Card;
