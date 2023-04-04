import { useDispatch } from 'react-redux';

import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, InputName, InputNumber, InputBtn } from './Form.styled';
import { addContacts } from '../../redux/operation';

export const ContactForm = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const newContatact = { id: nanoid(), name: name, phone: phone };
    if (contacts.find(el => el.name === name)) {
      return toast.error(`${name} is already in contacts.`, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        fontSize: 3,
      });
    } else {
      dispatch(addContacts(newContatact));
      console.log(newContatact);
    }
    form.reset();
  };

  return (
    <Form title="Phonebook" onSubmit={handleSubmit}>
      <InputName
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <InputNumber
        id="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <InputBtn type="submit">Add contact</InputBtn>
    </Form>
  );
};

export default ContactForm;
