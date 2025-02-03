import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';

import { fetchContacts } from "../../redux/contacts/operations";
import { selectContacts, selectIsLoading } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectFilter } from "../../redux/filters/selectors";
import "./ContactsPage.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div className="container">
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <h2>Contacts</h2>
      {isLoading && <p>Request in progress...</p>}
      {contacts.length > 0 ? <ContactList /> : <p>You do not have any contacts yet.</p>}
    </div>
  );
}
