import { useState } from 'react';
import InputField from '../../../../UI/InputField/InputField';

const ContactForm = (): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <form className="contact-form" onSubmit={(event): void => event.preventDefault()}>
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
          placeholder="Your Message"
          onFocus={(): void => setIsFocused(true)}
          onBlur={(): void => setIsFocused(false)}
        />
      </div>
      <button className="contact-form__button" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
