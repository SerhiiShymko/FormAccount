import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledError, StyledField, StyledForm } from './BookForm.styled';
import { useState } from 'react';
// import { IconButton } from 'components/IconButton/IconButton';

const schema = Yup.object().shape({
  // selectedDate: Yup.data().required('Required'),
  serialNumberForm: Yup.string().min(2, 'Too Short!').required('Required'),
  lastNameOutForm: Yup.string()
    .oneOf(['Petrov1', 'Petrov2'])
    .required('Required'),
  lastNameInForm: Yup.string().min(2, 'Too Short!').required('Required'),
  aktNumberForm: Yup.number()
    .positive('Must be >0')
    .min(1, 'Not enough time!')
    .required('Required'),
  noteForm: Yup.string().min(2, 'Too Short!').required('Required'),
});

export const BookForm = ({ onAdd }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Formik
      initialValues={{
        selectedDate: null,
        serialNumberForm: '',
        lastNameOutForm: 'Petrov1',
        lastNameInForm: '',
        aktNumberForm: '',
        noteForm: '',
      }}
      validationSchema={schema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <StyledForm>
        <label>
          <DatePicker
            // placeholderText="Дата"
            selected={selectedDate}
            onChange={dateForm => setSelectedDate(dateForm)}
          />
        </label>
        <label>
          <StyledField name="serialNumberForm" placeholder="Серійний номер" />
          <StyledError name="serialNumberForm" component="div" />
        </label>
        <label>
          <StyledField
            name="lastNameOutForm"
            as="select"
            placeholder="ПІБ передав"
          >
            <option value="beginner">Petrov1</option>
            <option value="intermediate">Petrov2</option>
          </StyledField>
          <StyledError name="lastNameOutForm" component="div" />
        </label>
        <label>
          <StyledField name="lastNameInForm" placeholder="ПІБ отримав" />
          <StyledError name="lastNameInForm" component="div" />
        </label>
        <label>
          <StyledField
            name="aktNumberForm"
            placeholder="Акт передачі"
            type="number"
          />
          <StyledError name="aktNumberForm" component="div" />
        </label>
        <label>
          <StyledField name="noteForm" placeholder="Примітка" />
          <StyledError name="noteForm" component="div" />
        </label>
        <button type="submit">Add</button>
      </StyledForm>
    </Formik>
  );
};
