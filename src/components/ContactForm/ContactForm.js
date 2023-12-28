import { Formik } from 'formik';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Label, StyledField, StyledForm } from './ContactForm.styled';
import { selectContacts } from '../redux/selectors';
import { addContact } from '../redux/operations';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispath = useDispatch();

  const onAdd = values => {
    const { name } = values;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notify.failure(`${name} is already in conracts`);
    }
    dispath(addContact(values));
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            Name
            <StyledField name="name" type="text" required />
          </Label>

          <Label>
            Number
            <StyledField name="phone" type="tel" required />
          </Label>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
