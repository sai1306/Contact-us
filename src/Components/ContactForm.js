import React, { useState } from 'react';
import { put } from '@vercel/blob';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ContactForm = (id, setId) => {
  var filename = ""
  var urlLink = ""
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    cv: null,
    // for file upload as CV
  });
  
  console.log(typeof setFormData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    console.log(e.target.files);
    const url = URL.createObjectURL(e.target.files[0])
    console.log(url);
    filename = e.target.files[0]
    urlLink = url
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    // Submit the form 
    
    console.log(formData);
    // setId(id + 1);
    localStorage.setItem('id', (localStorage.getItem('id'))?+localStorage.getItem('id')+1:1);
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

  // async function uploadFile(file) {
  //   'use server';
  //   const fileToUpload = file;
  //   const blob = await put(fileToUpload.name, fileToUpload, {
  //     access: 'public',
  //   });
  //   return blob;
  // }
  return (
    <div className="container">
      <h1 className='multi'>
        Application For Job Post
      </h1>
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
          <a href={urlLink} download={filename}>
          <button className='btn btn-primary'>Download</button>
          </a>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
