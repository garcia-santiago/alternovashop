import { defineStore } from 'pinia'
import {useStorage} from '@vueuse/core'
// import axios from 'axios'

export const useArticulos = defineStore({
  id: 'articulos',
  state: () => ({
    proyectosArray: useStorage('articulos', [
        {
            nombre: "APOD Telegram",
            descripcion: "Bot que envia la APOD (Astronomy Picture Of the Day) a través de Telegram incluyendo la explicación de esta y su autor.",
            enlace: "apod-showcase.netlify.app/",
            tecnologias: "Python",
            tipo: "Script",
            imagen: "https://sgarcia-media.s3.amazonaws.com/expmessage_3748c6efda.jpg"
        },
        {
            nombre: "Preuniversitario",
            descripcion: "Aplicativo para la gestión de promoción de la Universidad de la Costa enfocado en la gestión de actividades con Colegios de la región.",
            enlace: "preuniversitario.herokuapp.com/",
            tecnologias: "Vue, Node",
            tipo: "Web",
            imagen: "https://sgarcia-media.s3.amazonaws.com/Preuniversitario_9669ed7cd7.jpg"
        }
    ])
  }),
  getters: {
    getProyectos(state){
        return state.proyectosArray
    }
  },
  actions: {
    // async obtenerProyectos(){
    //     await axios.get('https://sgarcia-strapi-production.up.railway.app/api/proyectos?populate=*&sort[0]=id')
    //     .then((response: any) => {
    //         let res = response.data.data;
    //         res.forEach((item: any) => {
    //             item.nombre=item.attributes.nombre;
    //             item.descripcion= item.attributes.descripcion;
    //             item.enlace=item.attributes.enlace;
    //             item.tecnologias=item.attributes.tecnologias;
    //             item.tipo=item.attributes.tipo;
    //             item.id=item.id;
    
    //             let imagen = item.attributes.imagen.data
    //             if(imagen===null){
    
    //             }else{
    //                 item.thumbnail= item.attributes.imagen.data.attributes.formats.thumbnail.url;
    //                 item.image_md= item.attributes.imagen.data.attributes.formats.medium.url;
    //                 try {
    //                     item.image_lg= item.attributes.imagen.data.attributes.formats.large.url;
    //                 } catch (error) {     
    //                     item.image_lg = "";
    //                 }
    //             }
    //             delete item["attributes"];
    //             this.proyectosArray.push(item)
    
    //         });
    //     })
    // }
  },
})


