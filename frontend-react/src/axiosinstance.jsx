import axios from "axios"

const baseURL = import.meta.env.VITE_BACKEND_BASE_API 
const axiosinstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosinstance.interceptors.request.use(
    function (config) {
    
        const accessToken = localStorage.getItem('access_token')
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    },function (error) {
        return Promise.reject(error)
    }
)

// Response interceptor to handle 401 errors and attempt token refresh

axiosinstance.interceptors.response.use(
    function (response) 
    {
        return response
    },
    //handle 401 errors and attempt token refresh
    async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest.retry) {
            originalRequest.retry = true;
            const refreshToken = localStorage.getItem('refresh_token');
            try {
                const response =await axiosinstance.post('/token/refresh/', { refresh: refreshToken });
                localStorage.setItem('access_token', response.data.access);
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;
                return axiosinstance(originalRequest);
            }catch (error) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
            }
        }
        return Promise.reject(error);
    }
)
export default axiosinstance
