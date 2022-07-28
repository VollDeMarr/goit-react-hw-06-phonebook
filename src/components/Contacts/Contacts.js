import s from '../Contacts/Contacts.module.css';
import { nanoid } from 'nanoid';
const Contacts = ({ contacts, removeFn }) => {
  const ell = contacts.map(contact => (
    <li key={nanoid()} className={s.item}>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => removeFn(contact.id)}>
        Delete
      </button>
    </li>
  ));
  return <ul className={s.list}>{ell}</ul>;
};
export default Contacts;
