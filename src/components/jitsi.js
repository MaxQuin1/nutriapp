import React, { useEffect } from 'react';
import JitsiMeetExternalAPI from 'react-jitsi'; // Asegúrate de importar correctamente

const JitsiComponent = () => {
  useEffect(() => {
    // Configura los parámetros según tus necesidades
    const domain = 'meet.jit.si';
    const roomName = 'YourRoomName';
    const displayName = 'User Name';
    const containerId = 'jitsi-container';

    const options = {
      roomName,
      parentNode: document.getElementById(containerId),
      userInfo: {
        displayName,
      },
    };

    // Utiliza el nombre correcto de la clase para crear la instancia
    const api = new JitsiMeetExternalAPI(domain, options);

    // Event listeners (opcional)
    api.addEventListener('readyToClose', () => {
      console.log('Video conference ended');
    });

    // Limpia la instancia de Jitsi al desmontar el componente
    return () => {
      api.dispose();
    };
  }, []);

  return <div id="jitsi-container" style={{ height: '500px' }} />;
};

export default JitsiComponent;
