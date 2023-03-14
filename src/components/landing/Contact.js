import React, { useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {
  Box,
  Typography,
  TextField,
  // TextareaAutosize,
  Button,
} from '@mui/material';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ email, firstName, subject, message });
  };

  return (
    <Box className='formContainer' id='contact'>
      <Typography variant="h4" className='formHeading'>
        Reach Out
      </Typography>
      <Box
        className='form'
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          className='inputField'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          className='inputField'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Subject"
          variant="outlined"
          fullWidth
          className='inputField'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <TextField
          label="Message"
          minRows={6}
          variant="outlined"
          placeholder="Enter a message"
          fullWidth
          multiline
          spellCheck
          className='inputField'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          variant="contained"
          type="submit"
          color="primary"
          sx={{ width: '200px', fontSize: '16px' }}
          onClick={submitForm}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;