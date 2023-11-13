<template>
 <RouterView /> 
 <Toast />
</template>


<script scope>
import { ref, onMounted, onBeforeMount } from 'vue';
import { createPinia } from 'pinia';
import Cookies from 'js-cookie';


// metodo util solo durante la fase de desarrollo
async function checkViteServer() {
  try {
    // Verificar si la URL actual es http://tasco.test/
    console.log(window.location.hostname)
    if (window.location.hostname === 'tasco.test') {
      const currentPort = window.location.port;
      if (currentPort !== '5174' && !window.location.hostname.includes('127.0.0.1')) {
        const response = await fetch('http://tasco.test:5174/');
        if (response.ok) {
          console.log('El servidor de desarrollo de Vite está en ejecución');
          // Modificar la URL actual para incluir el puerto 5174
          const newUrl = window.location.protocol + '//' + window.location.hostname + ':5174' + window.location.pathname + window.location.search;
          window.location.href = newUrl;
        } 
      }
    }
  } catch (error) {
    console.warn('El servidor de desarrollo de Vite no está en ejecución');
  }
}

checkViteServer();


// Configurar cookies al iniciar sesión
Cookies.set('token', localStorage.getItem('token'), { sameSite: 'None', secure: true });
</script>