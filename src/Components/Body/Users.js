import React from 'react'

export const Users = ({name,location}) => {
  return (
    <div className='user-card'>
    <h2>Name :{name}</h2>
    <h3>Location :{location}
    <h4></h4>
    </h3>
    </div>
  )
}
