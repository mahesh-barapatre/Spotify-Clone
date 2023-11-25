import React from 'react'
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import { useNavigate } from 'react-router-dom';

function HelloComponent() {


    const navigate= useNavigate();

  return (
    <div className='bg-app-black flex flex-col justify-center items-center h-full w-full '>
=                            <img
                                src={spotify_logo}
                                alt="spotify logo"
                                width={300}
                            />
                            <div className='bg-white rounded-full text-xl font-bold py-3 px-5 mt-7 transform transition duration-300 
                                hover:scale-110 cursor-pointer' onClick={()=>navigate("/home")}>
                                Let's Start
                            </div>
    </div>
  )
}

export default HelloComponent
