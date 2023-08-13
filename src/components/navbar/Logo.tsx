'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <div>
      <Image src='/images/logo.png' height={100} width={100} alt='logo' />
    </div>
  );
};

export default Logo;
