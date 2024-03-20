import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import InputField from '../../../../UI/InputField/InputField';

import error_icon from '../../../../assets/exclamation-mark-icon.svg';
import success_icon from '../../../../assets/check-icon.svg';

const ContactForm = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIsError(false);
    setIsSuccess(false);

    if (formRef.current) {
      try {
        emailjs
          .sendForm(import.meta.env.VITE_SERVICE_ID || '', import.meta.env.VITE_TEMPLATE_ID || '', formRef.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY || '',
          })
          .then(() => {
            setIsSuccess(true);
            setIsError(false);
          })
          .catch(() => {
            setIsSuccess(false);
            setIsError(true);
          });
      } catch (error) {
        setIsSuccess(false);
        setIsError(true);
      }
    }
  };

  return (
    <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
      <InputField className="contact-form__field contact-form__field_name" id="name" type="text" placeholder="Name" />
      <InputField
        className="contact-form__field contact-form__field_email"
        id="email"
        type="email"
        placeholder="Email"
      />
      <InputField
        className="contact-form__field contact-form__field_subject"
        id="subject"
        type="text"
        placeholder="Subject"
      />
      <div className="contact-form__field contact-form__field_message">
        <label className={`contact-form__label${isFocused ? ' contact-form__label_visible' : ''}`} htmlFor="message">
          Your Message
        </label>
        <textarea
          className="contact-form__input"
          id="message"
          name="message"
          placeholder="Your Message"
          onFocus={(): void => setIsFocused(true)}
          onBlur={(): void => setIsFocused(false)}
        />
      </div>
      {isError && (
        <div className="notification notification_error contact-form__notification">
          <div className="notification__image-wrapper">
            <img src={error_icon} alt="error-icon" />
          </div>
          <span className="notification__mesaage">Something went wrong...</span>
        </div>
      )}
      {isSuccess && (
        <div className="notification notification_success contact-form__notification">
          <div className="notification__image-wrapper">
            <img src={success_icon} alt="success-icon" />
          </div>
          <span className="notification__mesaage">Message is sent...</span>
        </div>
      )}
      <button className="contact-form__button" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
