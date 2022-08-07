import React from 'react'
import pnf from './../../images/pnf.jpg'
import './PageNotFound.scss'

const PageNotFound = () => {
  return (
    <div className="pgnot-found">
      <img src={pnf} alt="PageNotFound" />
    </div>
  )
}

export default PageNotFound