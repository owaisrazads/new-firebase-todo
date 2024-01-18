import { TextField, Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import Card from '../../components/Card'

const Home = () => {

  const todoVal = useRef()
  const [data, setData] = useState('a')

  const addTodo = (e) => {
    e.preventDefault()
    console.log(todoVal.current.value);

  }

  return (
    <>
    <h2 className='d-flex justify-content-center align-item-center mt-5'>Todo List</h2>
    <div className='d-flex justify-content-center'>
        <form onSubmit={addTodo} className='d-flex justify-content-center mt-5 flex-column w-25 gap-3'>
          <TextField type='text' id="outlined-basic" label="Filled" variant="outlined" inputRef={todoVal} />
          <Button type='submit' variant="contained">Add Todo</Button>
        </form>
      </div>
      {data.length > 0 ? <Card title= 'hello world'/> : <h3> No Data</h3>}
      </>
  )
}

export default Home
