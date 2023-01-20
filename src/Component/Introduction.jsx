import React from 'react';
import Image1 from '../Images/Profile.jpg'

function Introduction(){
return (
    <section className='bg-[#3D1766]'>
        <div className='container text-white flex flex-wrap items-center justify-between mx-auto py-4'>
            <div className='flex w-screen justify-center items-center'>
                <div className='w-80 border-2 md:border-4 border-white rounded-full'>
                    <img className='rounded-full'
                    src={Image1}
                    alt='Profile'/>
                </div>
            </div>
            
            <div className='md:w-auto w-screen'>
                <h1 className='flex justify-center items-center font-normal text-7xl my-4 text-center md:mx-auto'>
                    Jeffry Ngasinur
                </h1>
                <h3 className='flex justify-center items-center text-5xl font-light mt-4 mb-6 flex-wrap text-center md:mx-auto'>
                    Web-Development Student
                </h3>
                <p className='px-5 text-justify'>
                    A mechatronics engineering graduate from Swiss German University. I am a diligent and passionate person that is familiar with the tools used in the engineering industry. I am accustomed with being in a team environment that requires adaptability when faced with new challenges.
                </p>
            </div>
            
        </div>
    </section>
)
}

export default Introduction