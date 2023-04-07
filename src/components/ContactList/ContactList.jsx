import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/operation';
import { List, Item, Text, DeleteBtn, Default } from './ContactList.styled';
import { selectContactsList } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const defaultMessage = contacts.length === 0;
  return (
    <List>
      {defaultMessage && (
        <Default>there are no contacts in the list yet</Default>
      )}

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
