import { Formik } from 'formik';
import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  AddButton,
  StyledError,
  StyledField,
  StyledForm,
} from './BookForm.styled';
import { useState } from 'react';
// import { IconButton } from 'components/IconButton/IconButton';

const schema = Yup.object().shape({
  selectData: Yup.date().required("Обов'язкове поле"),
  regNumber: Yup.string()
    .min(5, 'Занадто короткий рядок!')
    .required("Обов'язкове поле"),
  nameOut: Yup.string()
    .oneOf(['Petrov1', 'Petrov2'])
    .required("Обов'язкове поле"),
  nameIn: Yup.string()
    .min(2, 'Занадто короткий рядок!')
    .required("Обов'язкове поле"),
  aktNumber: Yup.number().positive('Має бути >0').required("Обов'язкове поле"),
  note: Yup.string()
    .min(2, 'Занадто короткий рядок!')
    .required("Обов'язкове поле"),
});

export const BookForm = ({ onAdd }) => {
  const [selectedData, setSelectedData] = useState(new Date());

  const formatDate = date => {
    const formattedDate = new Date(date);
    const day = formattedDate.getDate().toString().padStart(2, '0');
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = formattedDate.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <Formik
      initialValues={{
        selectData: new Date(),
        regNumber: '',
        nameOut: 'Petrov1',
        nameIn: '',
        aktNumber: '',
        note: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        console.log(values);
        const formattedDate = formatDate(values.selectData);
        onAdd({ ...values, selectData: formattedDate });
        actions.resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
        <StyledForm>
          <label>
            <DatePicker
              // placeholderText="Дата"
              selected={selectedData}
              onChange={date => {
                setFieldValue('selectData', date);
                setSelectedData(date);
              }}
              dateFormat="dd.MM.yyyy"
            />
          </label>
          <label>
            <StyledField name="regNumber" placeholder="Серійний номер" />
            <StyledError name="regNumber" component="div" />
          </label>
          <label>
            <StyledField
              name="nameOut"
              as="select"
              onChange={e => setFieldValue('nameOut', e.target.value)}
            >
              <option value="Petrov1">Petrov1</option>
              <option value="Petrov2">Petrov2</option>
            </StyledField>
            <StyledError name="nameOut" component="div" />
          </label>
          <label>
            <StyledField name="nameIn" placeholder="ПІБ отримав" />
            <StyledError name="nameIn" component="div" />
          </label>
          <label>
            <StyledField
              name="aktNumber"
              placeholder="Акт передачі"
              type="number"
            />
            <StyledError name="aktNumber" component="div" />
          </label>
          <label>
            <StyledField name="note" placeholder="Примітка" />
            <StyledError name="note" component="div" />
          </label>
          <AddButton type="submit">Add</AddButton>
        </StyledForm>
      )}
    </Formik>
  );
};
