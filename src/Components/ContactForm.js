import React, { useState } from 'react';
import { put } from '@vercel/blob';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [id, SetId] = useState();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    cv: null,
    // for file upload as CV
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    // Submit the form 
    
    console.log(formData);
    
    if(!localStorage.getItem('id'))
        {
            localStorage.setItem('id', 1);
        }
    else{
            localStorage.setItem('id', localStorage.getItem('id')+1);
        }
    localStorage.setItem(localStorage.getItem('id'), JSON.stringify(formData));
    //storing CV in vercel blob
    //clearing the data after storing
    const clearedObj = Object.fromEntries(
        Object.keys(formData).map(key => [key, null])
      );
      // Update state with the new object
      setFormData(clearedObj);
      navigate('/submissions');
  };

//   async function uploadImage(formData) {
//     'use server';
//     const imageFile = formData.cv;
//     const blob = await put(imageFile.name, imageFile, {
//       access: 'public',
//     });
//     revalidatePath('/');
//     return blob;
//   }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="cvFile">Upload CV</label>
          <input
            type="file"
            className="form-control-file"
            id="cvFile"
            name="cv"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
