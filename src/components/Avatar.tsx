'use client';
import Image from 'next/image';

const Avatar = () => {
  return (
    <Image
      src='/images/placeholder.jpg'
      className='rounded-full'
      height={30}
      width={30}
      alt='placeholder'
    />
  );
};

export default Avatar;
