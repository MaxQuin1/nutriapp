import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import NavDashChat from '../components/NavDashChat'
import ChatComponent from '../components/ChatComponent'
// import JitsiComponent from '../components/jitsi';

export default function Chat() {
  
  
  return (
    <>
    <Navbar></Navbar>
    <NavDashChat></NavDashChat>
    <ChatComponent></ChatComponent>
    </>
  )
}
