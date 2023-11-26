import React from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addDays, format } from 'date-fns';
import { taskSchema } from '../../../utils/validationSchemas';
import { createTask } from '../../../store/todoSlice';
import styles from './TaskForm.module.scss';

const TaskForm = (props) => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(createTask(values));
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={{
        body: '',
        deadLine: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
      }}
      validationSchema={taskSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        <label>
          <span>body task:</span>
          <Field name="body" />
          <ErrorMessage name="body" />
        </label>
        <label>
          <span>dead line:</span>
          <Field name="deadLine" type="date" />
          <ErrorMessage name="deadLine" />
        </label>
        <button type="submit">add task</button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
