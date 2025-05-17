import getImagesByQuery from "./js/pixabay";
import createGallery from "./js/render-functions";

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
        
        
        getImagesByQuery(inputForm.value.trim())
        .then(value =>{
            createGallery(value);
        })
            

        
        
        
    }



    
    form.reset();
}


formDoc.addEventListener('submit', formHandler);


