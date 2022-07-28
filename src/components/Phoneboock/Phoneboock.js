import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Contacts from '../Contacts/Contacts';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import { actions } from '../../redux/contacts-slice/contacts-slice';
import s from './Phoneboock.module.css';
function Phoneboock() {
  const setFilter = state => state.contacts.filter;
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(setFilter, shallowEqual);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const filterText = filter.toLowerCase();
        const filteredContacts = contacts.filter(({ name }) =>
          name.toLowerCase().includes(filterText)
        );
    return filteredContacts;
  };
  const filteredContacts = getFilteredContacts();

  const formSubmit = data => {
    const findeName = contacts.find(item => item.name === data.name);
    if (findeName) {
      alert(`${data.name} is already in contacts list`);
      return;
    }
    const action = actions.add(data);
    dispatch(action);
  };

  const removeContact = id => {
    const action = actions.remove(id);
    dispatch(action);
  };

  const filterList = ({ target }) => {
    dispatch(actions.filter(target.value));
  };
  return (
    <div className={s.container}>
      <h1>Phoneboock</h1>
      <div className={s.inputContainer}>
        <Form onSubmit={formSubmit} />
      </div>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterList} />
      <div className={s.contactsWrapper}>
        <Contacts contacts={filteredContacts} removeFn={removeContact} />
      </div>
    </div>
  );
}

export default Phoneboock;
