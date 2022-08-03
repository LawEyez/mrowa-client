import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='hidden fixed z-40 top-0 right-0 w-full bg-white
    lg:flex items-center justify-end h-20 pr-6'>
      <div className='relative h-full w-20'>
        <Image
          src='https://hailer-images-bucket.s3.amazonaws.com/logo/MBW_Logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJY3D2W7LXXEJ4GC%2F20220723%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20220723T093252Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a0c0179b0d373dbab9115e60a2c12edcf2868ae6bd9ad7d9f1880a50a5c92657'
          alt='MBW Ltd'
          layout='fill'
        />
      </div>
    </div>
  )
}

export default Header