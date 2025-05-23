import getImagesByQuery from "./js/pixabay-api";
import createGallery from "./js/render-functions";
import { clearGallery, showLoader, hideLoader } from "./js/render-functions";

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const inputForm = document.querySelector('input');
const formDoc = document.querySelector('form');





function formHandler(event){
    
    event.preventDefault();

    const form = event.currentTarget;


    if(inputForm.value.trim() === ''){
        iziToast.show({
            
            message: 'Please fill all fields',
            color: 'red',
            messageColor: 'white',
            position: 'topRight'

        });
        

    }else{
        
        showLoader();
        getImagesByQuery(inputForm.value.trim())
        .then(value =>{
            
            clearGallery();
            createGallery(value);
        
            
        })

        .catch(error =>{
            if(error){
                iziToast.show({
                
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    color: 'red',
                    messageColor: 'white',
                    position: 'topRight'
    
                });
            }
            
        })
        .finally(() =>{
            hideLoader();
        })

        
            

        
        
        
    }



    
    form.reset();
    
}


formDoc.addEventListener('submit', formHandler);


