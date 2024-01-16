import React, { useRef, useState } from 'react'
import {TextField, Button, Box, CircularProgress} from '@mui/material'

const register = () => {

  //use state
  const [loading, setLoading] = useState(false);


  //use Ref
const email = useRef()  
const password = useRef()  

  const register = (event)=>{
    event.preventDefault();
    console.log('login clicked');
    console.log(email.current.value);
    console.log(password.current.value);
    setLoading(!loading )
    email.current.value = ''
    password.current.value = ''
  }
  return (
    <Box sx={{height:'80vh'}} className='d-flex justify-content-center align-item-center'>
      <form onSubmit={register} className='d-flex justify-content-center mt-5 flex-column w-25 gap-5'>
      <TextField type='email' id="standard-basic" label="Enter Email" variant="standard" inputRef={email} required/>
      <TextField type='password' id="standard-basic" label="Enter Password" variant="standard" inputRef={password} required />
      <Button type='submit' variant="contained">{loading ? <CircularProgress sx={{color: 'white'}} size={30}/> : 'register'}</Button>
      </form>
    </Box>
  )
}

export default register
