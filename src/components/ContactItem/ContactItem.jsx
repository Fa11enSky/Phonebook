import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/operations';
import css from './contactItem.module.css';
const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li className={css.item}>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
export default ContactsItem;
