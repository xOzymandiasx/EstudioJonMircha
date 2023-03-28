import React, { useState } from 'react';
import axios from 'axios';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e)=> {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]:value
    });
  };

  const handleBlur = (e)=> {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e)=> {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Enviando formulario");
      setLoading(true);
      axios.post("https://formsubmit.co/sergioottati@hotmail.com", form)
      .then(res => {
        setLoading(false);
        setResponse(true);
        setForm(initialForm);
        setTimeout(() => {
          setResponse(false);
        }, 5000);
      })
    } else {
      return;
    };
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
