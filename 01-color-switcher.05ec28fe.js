const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,l=setInterval((()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;d.style.backgroundColor=e}),1e3)})),t.addEventListener("click",(function(){clearInterval(l),t.disabled=!0,e.disabled=!1}));let l=null;
//# sourceMappingURL=01-color-switcher.05ec28fe.js.map
