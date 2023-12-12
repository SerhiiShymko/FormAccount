import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledError, StyledField, StyledForm } from './BookForm.styled';
import { useEffect, useState } from 'react';
// import { IconButton } from 'components/IconButton/IconButton';

const schema = Yup.object().shape({
  // data: Yup.data().required('Required'),
  regNumber: Yup.string().min(2, 'Too Short!').required('Required'),
  nameOut: Yup.string().oneOf(['Petrov1', 'Petrov2']).required('Required'),
  nameIn: Yup.string().min(2, 'Too Short!').required('Required'),
  aktNumber: Yup.number()
    .positive('Must be >0')
    .min(1, 'Not enough time!')
    .required('Required'),
  note: Yup.string().min(2, 'Too Short!').required('Required'),
});

export const BookForm = ({ onAdd }) => {
  const [data, setData] = useState(new Date());
  useEffect(() => {
    setData(new Date());
  }, []);

  return (
    <Formik
      initialValues={{
        data: '',
        regNumber: '',
        nameOut: 'Petrov1',
        nameIn: '',
        aktNumber: '',
        note: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        console.log(values);
        onAdd({ ...values, id: nanoid() });
        // actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          <DatePicker
            // placeholderText="Дата"
            selected={data}
            onChange={dateForm => setData(dateForm)}
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
            // placeholder="ПІБ передав"
          >
            <option value="beginner">Petrov1</option>
            <option value="intermediate">Petrov2</option>
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
        <button type="submit">Add</button>
      </StyledForm>
    </Formik>
  );
};
