import { useState, useEffect, useRef } from 'react';

import Contacts from '../Contacts/Contacts';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';

import s from './Phoneboock.module.css';
function Phoneboock() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');
  const firstRef = useRef(true);

  useEffect(() => {
    if (firstRef.current) {
      const getContacts = localStorage.getItem('contacts');
      const contacts = JSON.parse(getContacts);

      setContacts(contacts);
      firstRef.current = false;
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const formSubmit = data => {
    const findeName = contacts.find(item => item.name === data.name);
    if (findeName) {
      alert(`${data.name} is already in contacts list`);
      return;
    }
    setContacts(prev => {
      console.log(prev);
      return [...prev, data];
    });
  };

  const removeContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const filterList = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const inLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(inLowerCase)
    );
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
        <Contacts contacts={getVisibleContacts()} removeFn={removeContact} />
      </div>
    </div>
  );
}

export default Phoneboock;
