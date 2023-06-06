import React, { Component } from "react";
import { nanoid } from 'nanoid';
import css from '../Form/Form.module.css';

class Form extends Component {
    state = {
        name: '',
        number: ''
    }

    handleSubmitForm = evt => {
        evt.preventDefault();

        this.props.onSubmit(this.state);

        this.resetForm();
    }

    handleChange = evt => {
        const { name, value } = evt.currentTarget;
        this.setState({
          [name]: value,
        });
    }

    resetForm = () => {
        this.setState({
            name: '',
            number: ''
        }); 
    }

    render() {
        return (
          <div className={css.container}>
            <form onSubmit={this.handleSubmitForm}>
            <label className={css.label}>
            The name of the new contact
            <input
              type="text"
              name="name"
              value={this.state.name}
              id={nanoid()}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              className={css.input}
            />
          </label>
          <label className={css.label}>
            Phone number
            <input 
              type="tel"
              name="number"
              id={nanoid()}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
              className={css.input}
            />
          </label>
          <button type="submit" className={css.addBtn}>Add contact</button>
        </form>
          </div>
        );
    }
}

export default Form;