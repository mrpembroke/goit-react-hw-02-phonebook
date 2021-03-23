import React, { Component } from 'react';
import s from './ContactForm.module.css';

import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form className={s.newContacsForm} onSubmit={this.handleSubmit}>
          <h2 className={s.title}>Add new contacts:</h2>
          <label className={s.label}>
            <span className={s.labelTitle}>Name:</span>

            <input
              type="text"
              onChange={this.handleChange}
              value={name}
              name="name"
              placeholder="input name"
              required
            />
          </label>

          <label className={s.label}>
            <span className={s.labelTitle}>Phone:</span>

            <input
              type="text"
              onChange={this.handleChange}
              value={number}
              name="number"
              placeholder="input number"
              required
            />
          </label>

          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
