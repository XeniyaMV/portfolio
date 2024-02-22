import SectionCardLayout from '../SectionCardLayout';
import fitnessIcon from '../../assets/fitness-icon.svg';
import easelIcon from '../../assets/easel-icon.svg';
import knittingIcon from '../../assets/knitting-icon.svg';
import hikeIcon from '../../assets/hike-icon.svg';

const AboutMe = (): JSX.Element => (
  <SectionCardLayout className="about-me" sectionName="About Me">
    <div className="about-me__content">
      <article className="about-me__description">
        <p className="about-me__paragraph">
          I am a junior Frontend Developer, and my professional journey has been far from straightforward. Just a few
          years ago, I immersed myself in the field of data analytics. Prior to that, I earned a degree in mathematics
          from Lomonosov Moscow State University. Now, I have found my true passion in web development.
        </p>
        <p className="about-me__paragraph">
          Actively enhancing my expertise in web development, I started from the fundamentals of JavaScript and
          progressed to the point where I can design projects, break them down into tasks, and write tests. I am a fast
          learner, always striving to write clean code and improve my skills.
        </p>
        <p className="about-me__paragraph">
          In addition to my technical skills, I have valuable experience as a team leader. I successfully led a team in
          the final project of one of my courses, where I played a key role in coordinating tasks, ensuring effective
          communication, and delivering a high-quality project. This experience strengthened my ability to work
          collaboratively and reinforced the importance of effective teamwork in achieving project goals.
        </p>
      </article>
      <article className="about-me__interests">
        <h2 className="about-me__title">Hobbies & Interests</h2>
        <ul className="about-me__list">
          <li>
            <img src={fitnessIcon} alt="Fitness Icon" />{' '}
          </li>
          <li>
            <img src={easelIcon} alt="Easel Icon" />{' '}
          </li>
          <li>
            <img src={knittingIcon} alt="Knitting Icon" />{' '}
          </li>
          <li>
            <img src={hikeIcon} alt="Hike Icon" />{' '}
          </li>
        </ul>
      </article>
    </div>
  </SectionCardLayout>
);

export default AboutMe;
