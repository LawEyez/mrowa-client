import React from 'react'

import { contactInfo } from '@utils/config'


const Contact = () => {
  return (
    <div className='mx-6 text-xs text-gray-500 space-y-2
    border-b border-gray-700 pb-6'>
      <h3 className=''>{contactInfo.streetAddress}</h3>
      <p>{contactInfo.phone}</p>
      <p>{contactInfo.secondaryPhone}</p>
      <p>{contactInfo.email}</p>
    </div>
  )
}

export default Contact