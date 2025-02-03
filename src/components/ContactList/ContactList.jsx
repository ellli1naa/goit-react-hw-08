import { useSelector } from "react-redux";
import './ContactList.css';
import { selectFilteredContacts, selectIsLoading } from "../../redux/contacts/selectors";
import Contact from '../Contact/Contact.jsx'

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      {isLoading && <p>Завантаження...</p>}
      <ul>
        {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
      </ul>
    </div>
  );
};

export default ContactList;