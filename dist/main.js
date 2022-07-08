(()=>{"use strict";const t=function(){let t=document.querySelector(".modal-background");t.style.zIndex="-1500",t.style.background="none",document.querySelector(".modal").style.display="none";let e=document.querySelectorAll(".board-piece-one");for(let t=0;t<c.length;t++)e[c[t]].classList.add("chosen");for(let t=0;t<d.length;t++)e[d[t]].classList.add("chosen");for(let t=0;t<f.length;t++)e[f[t]].classList.add("chosen");for(let t=0;t<h.length;t++)e[h[t]].classList.add("chosen");for(let t=0;t<g.length;t++)e[g[t]].classList.add("chosen")},e=function(t){let e=document.querySelectorAll(".modal-board-piece");if("Carrier"===t)for(let t=0;t<c.length;t++)e[c[t]].classList.add("chosen");else if("Battleship"===t)for(let t=0;t<d.length;t++)e[d[t]].classList.add("chosen");else if("destroyer1"===t)for(let t=0;t<f.length;t++)e[f[t]].classList.add("chosen");else if("destroyer2"===t)for(let t=0;t<h.length;t++)e[h[t]].classList.add("chosen");else if("patrol boat"===t)for(let t=0;t<g.length;t++)e[g[t]].classList.add("chosen")};let s=["Carrier","Battleship","destroyer1","destroyer2","patrol boat"],o=[7,17,27,37,47,57,67,77,87,97],n=[8,18,28,38,48,58,68,78,88,98],i=[9,19,29,39,49,59,69,79,89,99],r=[70,71,72,73,74,75,76,77,78,79],l=[80,81,82,83,84,85,86,87,88,89],a=[90,91,92,93,94,95,96,97,98,99],c=[],d=[],f=[],h=[],g=[],L=!0,u=document.querySelector(".rotate-btn"),m=u.innerHTML[u.innerHTML.length-1],y=document.getElementById("shipTitle"),p=["Carrier","Battleship","destroyer1","destroyer2","patrol boat"],S=!1;function M(t,e){return Math.random()*(e-t)+t}let E=document.querySelector(".rotate-btn"),b=(E.innerHTML[E.innerHTML.length-1],0),v=0;function I(){let t=document.querySelector("#win-text"),e=document.querySelectorAll(".game-board");12===b?(e.forEach((t=>t.style.display="none")),t.innerHTML="Player won the game",setTimeout(location.reload(),7e3)()):12===v&&(e.forEach((t=>t.style.display="none")),t.innerHTML="Computer won the game",setTimeout(location.reload(),7e3)())}function T(){let t=Math.round((0,100,100*Math.random()+0));let e=document.querySelectorAll(".board-piece-one");e[t].classList.contains("hit")||e[t].classList.contains("miss")?T():e[t].classList.contains("chosen")?(e[t].classList.remove("chosen"),e[t].classList.add("hit"),v++):e[t].classList.add("miss")}!function(){let u=0,p=document.querySelectorAll(".modal-board-piece"),S=s[u];u===s.length?t():(console.log(S),console.log(m),p.forEach(((t,e)=>{t.addEventListener("mouseover",(t=>{if("Carrier"===S){if("Y"===m){let t=e;if(o.includes(e))for(let e=0;e<3;e++)p[t].classList.add("choosing"),t++;else if(n.includes(e))for(let e=0;e<2;e++)p[t].classList.add("choosing"),t++;else if(i.includes(e))for(let e=0;e<1;e++)p[t].classList.add("choosing"),t++;else for(let e=0;e<4;e++)p[t].classList.add("choosing"),t++}if("X"===m){console.log(e);let t=e;if(r.includes(e))for(let e=0;e<3;e++)p[t].classList.add("choosing"),t+=10;else if(l.includes(e))for(let e=0;e<2;e++)p[t].classList.add("choosing"),t+=10;else if(a.includes(e))p[t].classList.add("choosing"),t+=10;else for(let e=0;e<4;e++)p[t].classList.add("choosing"),t+=10}}if("Battleship"===S){if("Y"===m){let t=e;if(n.includes(e))for(let e=0;e<2;e++)p[t].classList.add("choosing"),t++;else if(i.includes(e))for(let e=0;e<1;e++)p[t].classList.add("choosing"),t++;else for(let e=0;e<3;e++)p[t].classList.add("choosing"),t++}if("X"===m){let t=e;for(let e=0;e<3;e++)p[t].classList.add("choosing"),t+=10}}if("destroyer1"===S||"destroyer2"===S){let t=e;if("Y"===m)if(i.includes(e))for(let e=0;e<1;e++)p[t].classList.add("choosing"),t++;else for(let e=0;e<2;e++)p[t].classList.add("choosing"),t++;if("X"===m){let t=e;for(let e=0;e<2;e++)p[t].classList.add("choosing"),t+=10}}"patrol boat"===S&&p[e].classList.add("choosing")}))})),p.forEach(((t,e)=>{t.addEventListener("mouseleave",(t=>{if("Carrier"===S){if("Y"===m){let t=e;for(let e=0;e<4;e++)p[t].classList.remove("choosing"),t++}if("X"===m){let t=e;for(let e=0;e<4;e++)p[t].classList.remove("choosing"),t+=10}}if("Battleship"===S){if("Y"===m){let t=e;for(let e=0;e<3;e++)p[t].classList.remove("choosing"),t++}if("X"===m){let t=e;for(let e=0;e<3;e++)p[t].classList.remove("choosing"),t+=10}}if("destroyer1"===S||"destroyer2"===S){if("Y"===m){let t=e;for(let e=0;e<2;e++)p[t].classList.remove("choosing"),t++}if("X"===m){let t=e;for(let e=0;e<2;e++)p[t].classList.remove("choosing"),t+=10}}"patrol boat"===S&&p[e].classList.remove("choosing")}))})),p.forEach((o=>{o.addEventListener("click",(()=>{if("Carrier"===S&&(y.innerHTML=` Place your ${S}`,p.forEach(((t,e)=>{t.classList.contains("choosing")&&c.push(e)})),4===c.length?(u++,S=s[u],e("Carrier"),p.forEach((t=>t.classList.remove("choosing")))):c=[]),"Battleship"===S&&(y.innerHTML=` Place your ${S}`,p.forEach(((t,e)=>{t.classList.contains("choosing")&&d.push(e)})),3===d.length?(u++,S=s[u],e("Battleship"),p.forEach((t=>t.classList.remove("choosing")))):d=[],L=!0),"destroyer1"===S){y.innerHTML=` Place your ${S}`,p.forEach(((t,e)=>{t.classList.contains("choosing")&&f.push(e)}));for(let t=0;t<f.length;t++)p[f[t]].classList.contains("chosen")&&(L=!1);!1!==L&&2===f.length?(u++,S=s[u],e("destroyer1"),p.forEach((t=>t.classList.remove("choosing")))):f=[],L=!0}if("destroyer2"===S){y.innerHTML=` Place your ${S}`,p.forEach(((t,e)=>{t.classList.contains("choosing")&&h.push(e)}));for(let t=0;t<h.length;t++)p[h[t]].classList.contains("chosen")&&(L=!1);!1!==L&&2===h.length?(u++,S=s[u],e("destroyer2"),p.forEach((t=>t.classList.remove("choosing")))):h=[],L=!0}if("patrol boat"===S){y.innerHTML=` Place your ${S}`,p.forEach(((t,e)=>{t.classList.contains("choosing")&&g.push(e)}));for(let t=0;t<g.length;t++)p[g[t]].classList.contains("chosen")&&(L=!1);!1!==L?(1===g.length?(u++,S=s[u],e("patrol boat"),p.forEach((t=>t.classList.remove("choosing")))):g=[],u===s.length&&t()):f=[],L=!0,console.log(u),console.log(S)}}))})))}(),function(){let t=document.querySelectorAll(".board-piece-two");for(let e=0;e<p.length;e++){let s=Math.round(M(1,2));if(console.log(s),"Carrier"===p[e])if(1===s){let e=Math.round(M(0,9)),s=Math.round(M(0,6)),o=e.toString()+s.toString();o=parseInt(o);for(let e=0;e<4;e++)t[o].classList.add("enemy"),o++}else if(2===s){let e=Math.round(M(0,6)),s=Math.round(M(0,9)),o=e.toString()+s.toString();o=parseInt(o);for(let e=0;e<4;e++)t[o].classList.add("enemy"),o+=10}if("Battleship"===p[e]){for(;!1===S;)if(1===s){let e=Math.round(M(0,9)),s=Math.round(M(0,7)),o=e.toString()+s.toString();o=parseInt(o);for(let e=0;e<3;e++)S=!t[o].classList.contains("enemy"),o++;if(!1!==S){o=parseInt(e.toString()+s.toString());for(let e=0;e<3;e++)t[o].classList.add("enemy"),o++}}else if(2===s){let e=Math.round(M(0,7)),s=Math.round(M(0,9)),o=e.toString()+s.toString();o=parseInt(o);for(let e=0;e<3;e++)S=!t[o].classList.contains("enemy"),o+=10;if(!1!==S){o=parseInt(e.toString()+s.toString());for(let e=0;e<3;e++)t[o].classList.add("enemy"),o+=10}}S=!1}if("destroyer1"===p[e]){for(;!1===S;)if(1===s){let e=Math.round(M(0,9)),s=Math.round(M(0,8)),o=e.toString()+s.toString();o=parseInt(o);for(let e=0;e<2;e++)S=!t[o].classList.contains("enemy"),o++;if(!1!==S){o=parseInt(e.toString()+s.toString());for(let e=0;e<2;e++)t[o].classList.add("enemy"),o++}}else if(2===s){let e=Math.round(M(0,8)),s=Math.round(M(0,9)),o=e.toString()+s.toString();o=parseInt(o);for(let e=0;e<2;e++)S=!t[o].classList.contains("enemy"),o+=10;if(!1!==S){o=parseInt(e.toString()+s.toString());for(let e=0;e<2;e++)t[o].classList.add("enemy"),o+=10}}S=!1}if("destroyer2"===p[e]){for(;!1===S;)if(1===s){let e=Math.round(M(0,9)),s=Math.round(M(0,8)),o=e.toString()+s.toString();o=parseInt(o);for(let e=0;e<2;e++)S=!t[o].classList.contains("enemy"),o++;if(!1!==S){o=parseInt(e.toString()+s.toString());for(let e=0;e<2;e++)t[o].classList.add("enemy"),o++}}else if(2===s){let e=Math.round(M(0,8)),s=Math.round(M(0,9)),o=e.toString()+s.toString();o=parseInt(o);for(let e=0;e<2;e++)S=!t[o].classList.contains("enemy"),o+=10;if(!1!==S){o=parseInt(e.toString()+s.toString());for(let e=0;e<2;e++)t[o].classList.add("enemy"),o+=10}}S=!1}if("patrol boat"===p[e]){for(;!1===S;)if(1===s){let e=Math.round(M(0,9)),s=Math.round(M(0,9)),o=e.toString()+s.toString();o=parseInt(o);for(let e=0;e<2;e++)S=!t[o].classList.contains("enemy"),o++;if(!1!==S){o=parseInt(e.toString()+s.toString());for(let e=0;e<1;e++)t[o].classList.add("enemy"),o++}}else if(2===s){let e=Math.round(M(0,9)),s=Math.round(M(0,9)),o=e.toString()+s.toString();o=parseInt(o);for(let e=0;e<1;e++)S=!t[o].classList.contains("enemy"),o+=10;if(!1!==S){o=parseInt(e.toString()+s.toString());for(let e=0;e<1;e++)t[o].classList.add("enemy"),o+=10}}S=!1}}}(),document.querySelectorAll(".board-piece-two").forEach((t=>{t.addEventListener("click",(t=>{t.target.classList.contains("hit")||t.target.classList.contains("miss")?console.log("debil"):t.target.classList.contains("enemy")?(t.target.classList.add("hit"),b++,I(),T(),I()):(t.target.classList.add("miss"),I(),T(),I())}))})),E.addEventListener("click",(()=>{"Y"===E.innerHTML[E.innerHTML.length-1]?(E.innerHTML="Rotate to X",m="X"):(E.innerHTML="Rotate to Y",m="Y")}))})();