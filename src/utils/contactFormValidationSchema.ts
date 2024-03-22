import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      'Please enter a valid email address in the format "username@example.com"'
    ),

  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),

  subject: yup
    .string()
    .required('Subject is required')
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject cannot exceed 100 characters'),

  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

export default schema;
