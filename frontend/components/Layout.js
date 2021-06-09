import React from 'react';
import Head from 'next/head';
import Header from './Header';
import dynamic from 'next/dynamic';

const CanvasBackground = dynamic(() => import('./canvas/CanvasBackground'), {
    ssr: false,
  })


const Layout = ({children}) => {
    return ( 
        <>
            <Head>
                <title>ReactNodeSend</title>
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
            </Head>

            <CanvasBackground style={{ position:'absolute', width:'100%', height:'100vh', zIndex: -5, backgroundColor: 'black' }} />

            <div className=" min-h-screen bg-opacity-0">
                <div className="container mx-auto z-10">
                    <Header />
                    <main className="mt-5">
                        {children}
                    </main>
                </div>
            </div>
            
        </>
     );
}
 
export default Layout;