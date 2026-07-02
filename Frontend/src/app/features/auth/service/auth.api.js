import axios from 'axios';

const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})

export async function register({username,email,password}){
    const response = api.post('/api/auth/sign-up',
        {
            username,
            email,
            password
        }
    );
    return response.data;

}

export async function login({email,password}){
    const response = api.post("/api/auth/sign-in",
        {
            email,
            password
        }
    );
    return response.data;
}