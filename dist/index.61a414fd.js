var e=globalThis,t={},r={},n=e.parcelRequire94c2;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequire94c2=n),n.register;var i=n("fYyLS");const a=document.getElementById("modal"),o=document.getElementById("modal-img"),c=document.getElementById("caption"),l=document.querySelector(".close");a.style.display="none";const s=document.querySelector(".image-grid");function d(e){return e&&(e.startsWith("http://")||e.startsWith("https://"))}async function m(){try{let e=await (0,i.default)();e.forEach(e=>{d(e.imgUrl)||console.warn(`URL inv\xe1lida detectada: ${e.imgUrl}`)});let t=e.map(e=>{var t;let r=(t=e.imgUrl,d(t)?t:"https://via.placeholder.com/300x200?text=Imagem+Indisponível");return`
          <article data-description="${e.descricao}">
            <figure>
              <img src="${r}" alt="${e.alt||"Imagem sem descrição"}" loading="lazy" />
            </figure>
          </article>
        `}).join("");t?(s.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".image-grid img").forEach(e=>{e.addEventListener("click",function(){c.textContent="",a.style.display="block",o.src=this.src;let e=this.closest("article"),t=(e?e.dataset.description:"")||this.alt;c.innerHTML=`<p>${t}</p>`})})):s.innerHTML="<p>Nenhuma imagem disponível para exibir.</p>"}catch(e){console.error("Erro ao popular página",e),s.innerHTML="<p>Erro ao carregar as imagens.</p>"}}l.addEventListener("click",function(){a.style.display="none"}),window.addEventListener("click",function(e){e.target===a&&(a.style.display="none")}),document.addEventListener("DOMContentLoaded",m);
//# sourceMappingURL=index.61a414fd.js.map
