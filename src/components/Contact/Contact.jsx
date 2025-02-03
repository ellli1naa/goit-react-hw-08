import { useState } from 'react'
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import './Contact.css';
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div className="contact-text">
        <BsFillPersonFill className="contact-icon"/>
        <p className="contact-name">{name}</p>
        <FaPhoneAlt className="contact-icon"/>
        <p className="contact-name">{number}</p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;