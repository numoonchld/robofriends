import React from 'react'

const Card = ({ name, email, id }) => {
  return (
    <div className='card w-25 m-3'>
      <img className="card-img-top" src={`https://robohash.org/${id}200x200`} alt='robot' />
      <div className='card-body'>
        <h2>{name}</h2>
        <p> {email} </p>
      </div>
    </div>
  )
}

export default Card