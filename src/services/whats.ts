import Axios from 'axios';

export const whatsApi = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_WHATS_API_URL
})