import React from 'react';
import Logo from '../../assets/logo.png';

import styles from './Example.module.scss';

export default function Example() {
  return (
    <div
      className={`${styles.svgBackground} bg-black h-screen w-screen flex flex-col text-white text-center items-center justify-center gap-5 p-5`}
    >
      <img className='w-1/4' src={Logo} alt='React' />
      <h1 className='text-5xl font-bold'>React v18.1 Boilerplate</h1>
      <h2 className='text-2xl'>Example Page</h2>
    </div>
  );
}
