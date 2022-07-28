import s from './Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        Find contacts by name
        <input type="text" value={value} onChange={onChange}></input>
      </label>
    </div>
  );
};

export default Filter;
