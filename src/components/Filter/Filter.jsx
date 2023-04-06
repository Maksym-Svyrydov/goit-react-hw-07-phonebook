import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

import { FilterContaner, FilterInput } from './Filter.styled';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(filterContacts(value));
  };

  return (
    <FilterContaner>
      <label htmlFor="filter">Find contacts by name:</label>
      <FilterInput
        id="filter"
        type="text"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        required
      />
    </FilterContaner>
  );
};

export default Filter;
