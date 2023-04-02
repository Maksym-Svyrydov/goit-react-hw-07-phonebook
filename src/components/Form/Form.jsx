import { useDispatch, useSelector } from 'react-redux';
import { Form, InputName, InputNumber, InputBtn } from './Form.styled';
import { addContacts } from '../../redux/operation';

import { getContacts } from 'redux/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const form = e.target;
    e.preventDefault();
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContatact = { name: name, number: number };

    if (contacts.findIndex(contact => name === contact.name) !== -1) {
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
