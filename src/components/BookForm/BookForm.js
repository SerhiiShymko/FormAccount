import { Formik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledField, StyledForm } from './BookForm.styled';
import { useState } from 'react';
// import { IconButton } from 'components/IconButton/IconButton';

export const BookForm = ({ onAdd }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Formik
      initialValues={{
        selectedDate: null,
      }}
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
        </label>
        <label>
          <StyledField name="lastNameOutForm" placeholder="ПІБ передав" />
        </label>
        <label>
          <StyledField name="lastNameInForm" placeholder="ПІБ отримав" />
        </label>
        <label>
          <StyledField
            name="aktNumberForm"
            placeholder="Акт передачі"
            type="number"
          />
        </label>
        <label>
          <StyledField name="noteForm" placeholder="Примітка" />
        </label>
        <button type="submit">Add</button>
      </StyledForm>
    </Formik>
  );
};
