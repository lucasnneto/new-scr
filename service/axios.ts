/* eslint-disable */
import axios, { AxiosRequestConfig } from 'axios';

const http = axios.create({
  baseURL: process.env.API_URL,
});

export { AxiosRequestConfig };

export default http;
