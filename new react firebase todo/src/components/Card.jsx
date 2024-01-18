import React from 'react'

const Card = ({title, Button}) => {
  return (
    <div>
        <div>{title}</div>
        <Button>Delete</Button>
        <Button>Edit</Button>
    </div>
  )
}

export default Card
