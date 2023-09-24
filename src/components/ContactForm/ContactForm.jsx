import React, { useState } from 'react';
import { Form, Input, ContactsFormButton } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = ({ createContacts }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedNumber = formData.number.trim();

    if (!trimmedName || !trimmedNumber) {
      alert("Name or number can't be empty or just spaces.");
      return;
    }

    createContacts({
      name: trimmedName,
      number: trimmedNumber,
    });

    setFormData(INITIAL_STATE);
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <label>
        Name
        <Input
          onChange={handleInput}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я]+)?)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="name"
          autoFocus
        />
      </label>
      <label>
        Number
        <Input
          onChange={handleInput}
          value={formData.number}
          type="tel"
          name="number"
          placeholder="Enter number XXX-XX-XX"
          pattern="\+?\d{1,4}?[-\.\s]?\(?(\d{1,3}?)\)?[-\.\s]?\d{1,4}[-\.\s]?\d{1,4}[-\.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="tel"
        />
      </label>
      <ContactsFormButton type="submit"> Add contact</ContactsFormButton>
    </Form>
  );
};

export default ContactForm;
