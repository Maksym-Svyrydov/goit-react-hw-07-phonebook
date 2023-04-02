import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/operation';
import { getContacts, getFilter } from '../../redux/selectors';

import { useMemo } from 'react';

import { List, Item, Text, DeleteBtn } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(contacts.id));
  const filterContactsList = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase().trim())
    );
  }, [contacts, filterValue]);

  return (
    <List>
      {filterContactsList.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>{`${name}: ${number}`}</Text>
          <DeleteBtn type="button" onClick={handleDelete}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
