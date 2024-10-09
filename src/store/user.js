import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('users',() => {
    const user = ref({})

    //funcion login
    async function login (username, password){
        try{
            const response = await fetch ('http://localhost:17000/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
            })
            if (response.ok) {
                user.value = await response.json();
                return true; 
            } else {
                return false; 
            }
        } catch (error){
            console.error('Error de red:', error);
            return false;
        }
    }

    //funcion register
    async function register(first_name, last_name, username, email, password ) {
        try {
            const response = await fetch('http://localhost:17000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        first_name: first_name,
                        last_name: last_name,
                        username: username,
                        email: email,
                    },
                    credentials: {
                        password: password
                    }
                }),
            });
            if (response.ok) {
                console.log('Registro exitoso');
                return true; 
            } else {
                return false; 
            } 
        } catch (error) {
            console.error('Error de red:', error);
        }
    }

    //funcion logout
    function logout () {
        user.value = null;
    }
    return { login, register, logout, user }
})