import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";




function createGallery(images){
    const ul = document.querySelector('.gallery');
    let markUp = '';
    for(let i = 0; i < images.length; i++){
        markUp += `
            <li>
                
                <a href="${images[i].largeImageURL}">
                    <img
                      src="${images[i].webformatURL}"
                      alt="${images[i].tags}"
                    
                    >
                    <p>Likes ${images[i].likes}</p>
                    <p>Views ${images[i].views}</p>
                    <p>Comments ${images[i].comments}</p>
                    <p>Downloads ${images[i].downloads}</p>
                    
                
                </a>
                
                    
                    
            
            
            </li>
        
        `;

    }
    ul.insertAdjacentHTML('afterbegin', markUp);
}


export default createGallery;