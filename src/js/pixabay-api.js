import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


import axios from 'axios';








function getImagesByQuery(query){
    
    
            return axios({
                method:'get',
                url: 'https://pixabay.com/api/',
                params:{
                    key: '50347067-e28b29b4ef237673f62dbb07b',
                    q: query,
                    image_type: 'photo',
                    orientation: 'horizontal',
                    safesearch: true,
                    } 

            }).then(value =>{
                const images = value.data.hits;
                if(images.length === 0){
                    iziToast.show({
                
                        message: 'Sorry, there are no images matching your search query. Please try again!',
                        color: 'red',
                        messageColor: 'white',
                        position: 'topRight'
        
                    });

                }

                return images;

                
                
            })
            

            
        }


        


   

export default getImagesByQuery;



