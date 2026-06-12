import '../css/style.css'
import { fetchTable, sanityFetch } from './api/sanity.js';


const sanity = await sanityFetch();
const table = await fetchTable();

console.log('front', sanity);
console.log('table', table);