// sanity.js
import {createClient} from '@sanity/client'


export const client = createClient({
  projectId: 'ec3vui90',
  dataset: 'production',
  useCdn: false, 
  apiVersion: '2023-03-18',
})