import ContactForm from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, PhoneBook, Title } from '../components/App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import { selectFilter } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts(search));
  }, [dispatch, search]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 36,
        color: '#010101',
      }}
    >
      <Container>
        <PhoneBook>Phonebook</PhoneBook>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
        <ToastContainer autoClose={2500} limit={3} />
      </Container>
    </div>
  );
};
