import * as Yup from 'yup';

export const taskSchema = Yup.object({
  body: Yup.string()
    .trim()
    .matches(/.{2,64}/, 'length 2..64')
    .required('required'),
  deadLine: Yup.date().min(new Date(), 'wrong data').required('required'),
});

const schemaName = Yup.string()
  .trim()
  .matches(/^[A-Z][a-z]{2,63}$/, 'length 3..64')
  .required('required');

export const userSchema = Yup.object({
  firstName: schemaName,
  lastName: schemaName,
  email: Yup.string().trim().email().required('required'),
  password: Yup.string()
    .trim()
    .matches(/.{2,64}/, 'length 2..64')
    .required('required'),
  birthday: Yup.date().max(new Date(), 'wrong data').required('required'),
  isMale: Yup.boolean().required('required'),
  avatar:  Yup.string()
});

export const updateUserSchema = Yup.object({
  firstName: Yup.string()
  .trim()
  .matches(/^[A-Z][a-z]{2,63}$/, 'length 3..64'),
  lastName: Yup.string()
  .trim()
  .matches(/^[A-Z][a-z]{2,63}$/, 'length 3..64'),
  email: Yup.string().trim().email(),
  password: Yup.string()
    .trim()
    .matches(/.{2,64}/, "length 2..64"),
  birthday: Yup.date().max(new Date(), "wrong data"),
  isMale: Yup.boolean(),
  avatar: Yup.string(),
});