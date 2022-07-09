import React from 'react';
import Logo from '../assets/logo.png';

function Home() {
    return <div
        className='bg-black h-screen w-screen flex flex-col text-white text-center items-center justify-center gap-5 p-5'>
        <img className='w-1/4' src={Logo} alt='React'/>
        <h1 className='text-5xl font-bold'>React v18.1 Boilerplate</h1>
        <h2 className='text-2xl'>Technologies Integrated:</h2>
        <h3 className='text-lg'>
            TypeScript, Webpack, Tailwind.css, Eslint, Prettier, Husky, LintStaged, Babel, Jest, Redux,
            i18n, StyleLint, PostCSS
        </h3>
    </div>
}

export default Home;
