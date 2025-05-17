import{a as c,i as l}from"./assets/vendor-CEsQX3fQ.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function u(t){return c({method:"get",url:"https://pixabay.com/api/",params:{key:"50347067-e28b29b4ef237673f62dbb07b",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>{const s=i.data.hits;return s.length===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",messageColor:"white",position:"topRight"}),s})}function f(t){const i=document.querySelector(".gallery");let s="";for(let r=0;r<t.length;r++)s+=`
            <li>
                
                <a href="${t[r].largeImageURL}">
                    <img
                      src="${t[r].webformatURL}"
                      alt="${t[r].tags}"
                    
                    >
                    <p>Likes ${t[r].likes}</p>
                    <p>Views ${t[r].views}</p>
                    <p>Comments ${t[r].comments}</p>
                    <p>Downloads ${t[r].downloads}</p>
                    
                
                </a>
                
                    
                    
            
            
            </li>
        
        `;i.insertAdjacentHTML("afterbegin",s)}const a=document.querySelector("input"),d=document.querySelector("form");function m(t){t.preventDefault();const i=t.currentTarget;a.value.trim()===""?l.show({message:"Please fill all fields",color:"red",messageColor:"white",position:"topRight"}):u(a.value.trim()).then(s=>{f(s)}),i.reset()}d.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
