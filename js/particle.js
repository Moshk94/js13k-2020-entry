function pop(t,a,e){for(let n=0;n<50;n++)createParticle(t,a,e)}function createParticle(t,a,e){const n=document.createElement("particle");document.body.appendChild(n);const o=Math.floor(20*Math.random()+5);n.style.width=`${o}px`,n.style.height=`${o}px`,n.style.background=`hsl(${30*Math.random()+0}, 100%, ${e}%)`;const r=t+2*(Math.random()-.5)*75,c=a+2*(Math.random()-.5)*75;n.animate([{transform:`translate(-50%, -50%) translate(${t}px, ${a}px)`,opacity:1},{transform:`translate(${r}px, ${c}px)`,opacity:0}],{duration:1e3*Math.random()+500,easing:"cubic-bezier(0, .9, .57, 1)",delay:200*Math.random()}).onfinish=(()=>{n.remove()})}