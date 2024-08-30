const bodyElement=document.querySelector("body");

bodyElement.addEventListener("mousemove",(event)=>{
    const xPos=event.offsetX;
    const yPos=event.offsetY;
    const spanE=document.createElement("span");
    spanE.style.left=xPos + "px";
    spanE.style.top=yPos + "px";
    const size=Math.random()*100;
    spanE.style.width=size + "px";
    spanE.style.height=size + "px";
    bodyElement.appendChild(spanE);

    setTimeout(() => {
        spanE.remove();
    }, 3000);
})