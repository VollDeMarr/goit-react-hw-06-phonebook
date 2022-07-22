import { useState } from 'react';

import s from './Form.module.css';

function Form({ onSubmit }) {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitForm = e => {
    e.preventDefault();

    onSubmit(state);
    reset();
  };

  const reset = () => {
    setState({ name: '', number: '' });
  };

  const { name, number } = state;

  return (
    <form onSubmit={onSubmitForm}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onInputChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onInputChange}
        ></input>
      </label>

      <button className={s.btnInput} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
