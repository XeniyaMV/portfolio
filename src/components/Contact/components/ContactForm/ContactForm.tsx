import { useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';

import InputField from '../../../../UI/InputField/InputField';
import schema from '../../../../utils/contactFormValidationSchema';

import error_icon from '../../../../assets/exclamation-mark-icon.svg';
import success_icon from '../../../../assets/check-icon.svg';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: yupResolver(schema) });
  const formRef = useRef<HTMLFormElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail: SubmitHandler<ContactFormData> = (): void => {
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
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit(sendEmail)}>
      <InputField
        className="contact-form__field contact-form__field_name"
        id="name"
        registeredName="name"
        register={register}
        type="text"
        placeholder="Name"
        hasError={!!errors.name}
        helperText={errors.name?.message}
      />
      <InputField
        className="contact-form__field contact-form__field_email"
        id="email"
        registeredName="email"
        register={register}
        type="email"
        placeholder="Email"
        hasError={!!errors.email}
        helperText={errors.email?.message}
      />
      <InputField
        className="contact-form__field contact-form__field_subject"
        id="subject"
        registeredName="subject"
        register={register}
        type="text"
        placeholder="Subject"
        hasError={!!errors.subject}
        helperText={errors.subject?.message}
      />
      <div className="field contact-form__field contact-form__field_message">
        <label
          className={`field__label${isFocused ? ' field__label_visible' : ''} contact-form__label`}
          htmlFor="message"
        >
          Your Message
        </label>
        <textarea
          className={`field__input${errors.message ? ' field__input_error' : ''} contact-form__input`}
          id="message"
          {...register('message')}
          placeholder="Your Message"
          onFocus={(): void => setIsFocused(true)}
          onBlur={(): void => setIsFocused(false)}
        />
        {errors.message && <p className="field__helper-text contact-form__helper-text">{errors.message.message}</p>}
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
