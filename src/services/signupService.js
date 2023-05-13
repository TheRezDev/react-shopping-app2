import http from './httpService';

export const signupUSer = (data) => {
   return http.post('/user/register', data);
};