import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/operation';
import { List, Item, Text, DeleteBtn } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ name, phone, id }) => (
        <Item key={id}>
          <Text>{`${name}: ${phone}`}</Text>
          <DeleteBtn
            type="button"
            onClick={() => {
              dispatch(deleteContacts(id));
            }}
          >
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
