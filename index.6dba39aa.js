function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=document.querySelector(".append-row"),r=document.querySelector(".remove-row"),o=document.querySelector(".append-column"),l=document.querySelector(".remove-column"),d=document.querySelector("tbody"),i=document.querySelector("tbody").children;n.addEventListener("click",function(){r.disabled&&(r.disabled=!1),d.append(d.lastElementChild.cloneNode(!0)),10===i.length&&(n.disabled=!0)}),r.addEventListener("click",function(){n.disabled&&(n.disabled=!1),d.lastElementChild.remove(),2===i.length&&(r.disabled=!0)}),o.addEventListener("click",function(){l.disabled&&(l.disabled=!1),t(i).forEach(function(e){e.insertCell()}),10===i[0].children.length&&(o.disabled=!0)}),l.addEventListener("click",function(){o.disabled&&(o.disabled=!1),t(i).forEach(function(e){e.deleteCell(e[e.length-1])}),2===i[0].children.length&&(l.disabled=!0)});
//# sourceMappingURL=index.6dba39aa.js.map
