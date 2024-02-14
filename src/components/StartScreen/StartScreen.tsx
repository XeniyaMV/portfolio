import ContainerLayout from '../ContainerLayout';
import CONTACT_LINKS from '../../constants/CONTACT_LINKS';
import TECH_STACK_LINKS from '../../constants/TECH_STACK_LINKS';
import photo from '../../assets/xeniya_gazizova_photo.jpg';

const StartScreen = (): JSX.Element => (
  <section className="start-screen">
    <ContainerLayout className="start-screen__content">
      <>
        <article className="start-screen__info">
          <div className="start-screen__img-wrapper">
            <img src={photo} alt="Xeniya Gazizova photo" />
          </div>
          <ul className="start-screen__links">
            {CONTACT_LINKS.map((item) => (
              <li className="start-screen__link" key={item.title}>
                <a target="_blank" href={item.url} rel="noreferrer">
                  <img src={item.src} alt={`${item.title} icon`} />
                </a>
              </li>
            ))}
          </ul>
        </article>
        <p className="start-screen__greatings">
          Hi! I’m Xeniya and I’m a <span className="highlight">Frontend</span>&nbsp;Developer based in California, USA.
        </p>
        <article className="start-screen__tech-stack">
          <h2 className="start-screen__title">Technology Stack</h2>
          <ul className="start-screen__links">
            {TECH_STACK_LINKS.map((item) => (
              <li className="start-screen__link" key={item.title}>
                <a target="_blank" href={item.url} rel="noreferrer">
                  <img src={item.src} alt={`${item.title} icon`} />
                </a>
              </li>
            ))}
          </ul>
        </article>
      </>
    </ContainerLayout>
  </section>
);

export default StartScreen;
