import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/operation';
import { List, Item, Text, DeleteBtn } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(contacts.id));

  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <Item key={id}>
          <Text>{`${name}: ${phone}`}</Text>
          <DeleteBtn type="button" onClick={handleDelete}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
