import { request } from './client.js';






export const sanityFetch = async () => {

  const response = await request('http://localhost:3000/sanity');
  return response;
}



export const fetchTable = async () => {
  const response = await request('http://localhost:3000/table');
}