import React from 'react'


const Scroll = ({ children }) => {
  return <div className="d-flex flex-wrap flex-row justify-content-center align-items-center w-100" style={{ overflowY: 'scroll', height: '70vh' }}>
    {children}
  </div>
}

export default Scroll;