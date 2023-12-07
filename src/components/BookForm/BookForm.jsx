import { Formik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledField, StyledForm } from './BookForm.styled';
import { useState } from 'react';




export const BookForm = ({ onAdd }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <Formik
            initialValues={{
                selectedDate: null
            }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <StyledForm>
                <label >
                    <DatePicker
                        placeholderText="Дата"
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                    />
                </label>
                <label >
                    <StyledField name="serialNumber" placeholder="Серійний номер" />
                </label>
                <label >
                    <StyledField name="lastNameOut" placeholder="ПІБ передав" />
                </label>
                <label >
                    <StyledField name="lastNameIn" placeholder="ПІБ отримав" />
                </label>
                <label >
                    <StyledField name="aktNumber" placeholder="Акт передачі" type="number" />
                </label>
                <label >
                    <StyledField name="note" placeholder="Примітка" />
                </label>
                <button type="submit">Add</button>
            </StyledForm>
        </Formik>
    )
}