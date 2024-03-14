import SectionCardLayout from '../SectionCardLayout';
import GET_IN_TOUCH_LINKS from '../../constants/GET_IN_TOUCH_LINKS';
import ContactForm from './components/ContactForm';

const Contact = (): JSX.Element => {
  return (
    <SectionCardLayout sectionName="Get In Touch" className="get-in-touch">
      <div className="get-in-touch__content">
        <div>
          <h3 className="get-in-touch__title">
            Let&apos;s create something <span className="get-in-touch__highlight">together!</span>
          </h3>
          <ul className="get-in-touch__links">
            {GET_IN_TOUCH_LINKS.map((link) => (
              <li key={link.title} className="get-in-touch__link">
                <a target="_blank" href={link.url} rel="noreferrer">
                  <img src={link.src} alt={`${link.title} icon`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </SectionCardLayout>
  );
};

export default Contact;
