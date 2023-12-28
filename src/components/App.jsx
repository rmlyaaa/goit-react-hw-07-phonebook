import { GlobalStyled } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title1, Title2 } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { featchContacts } from './redux/operations';
import { selectError, selectIsLoading } from './redux/selectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchContacts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyled />
      <Title1>Phonebook</Title1>
      <ContactForm />

      <Title2>Contacts</Title2>

      <Filter />
      {isLoading && !error && <Loader />}
      {!isLoading && <ContactList />}
      {!isLoading && error && (
        <b>
          <br />
          Error! Please, reload page...
        </b>
      )}
    </>
  );
};
