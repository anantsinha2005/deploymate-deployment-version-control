const boxes = [...document.querySelectorAll('.check-card input[type="checkbox"]')];
function update(){const done=boxes.filter(b=>b.checked).length;const percent=Math.round(done/boxes.length*100);document.querySelector('#progress').textContent=percent+'%';document.querySelector('#barfill').style.width=percent+'%';document.querySelector('#progresslabel').textContent=`${done} of ${boxes.length} completed`;}
boxes.forEach(b=>b.addEventListener('change',update));
document.querySelector('#copy').addEventListener('click',async()=>{const button=document.querySelector('#copy');try{await navigator.clipboard.writeText(document.querySelector('#gitcommands').textContent);button.textContent='COPIED!';setTimeout(()=>button.textContent='COPY COMMANDS',1500);}catch{button.textContent='SELECT & COPY';}});
