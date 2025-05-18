import{a as u,i as l,S as f}from"./assets/vendor-frHSA4Lh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function d(o){return u({method:"get",url:"https://pixabay.com/api/",params:{key:"50347067-e28b29b4ef237673f62dbb07b",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>{const e=s.data.hits;return e.length===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",messageColor:"white",position:"topRight"}),e})}const c=document.querySelector(".gallery"),p=document.querySelector(".loader");function m(o){let s="";for(let e=0;e<o.length;e++)s+=`
            <li>
                <div class="photo">
                    <a href="${o[e].largeImageURL}">
                        <img
                        src="${o[e].webformatURL}"
                        alt="${o[e].tags}"
                        
                        >
                    </a>
                    
                </div>
                <div class="info">
                    <p class="text">Likes <span class="info-span">${o[e].likes}</span></p>
                    <p class="text">Views <span class="info-span">${o[e].views}</span></p>
                    <p class="text">Comments <span class="info-span">${o[e].comments}</span></p>
                    <p class="text">Downloads <span class="info-span">${o[e].downloads}</span></p> 
                
                
                
                </div>
                    
                
                
                    
                    
            
            
            </li>
        
        `;c.insertAdjacentHTML("afterbegin",s),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function h(){c.innerHTML=""}function y(){p.classList.add("show")}function g(){p.classList.remove("show")}const i=document.querySelector("input"),L=document.querySelector("form");function b(o){o.preventDefault();const s=o.currentTarget;i.value.trim()===""?l.show({message:"Please fill all fields",color:"red",messageColor:"white",position:"topRight"}):(y(),d(i.value.trim()).then(e=>{m(e)}).finally(()=>{g()})),s.reset(),h()}L.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
