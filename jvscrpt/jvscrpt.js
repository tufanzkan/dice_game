let at=document.getElementById("throw");
let plyzar= document.querySelector(".plyzar");
let cmpzar= document.querySelector(".cmpzar");


at.addEventListener('click',game);

function game(e){

    let plydizi= [1,2,3,4,5,6];
    let plyrastind = Math.floor(Math.random() * plydizi.length);
	let plyrast=plydizi[plyrastind];
    

    let cmpdizi= new Array(1,2,3,4,5,6);
    let cmprastind = Math.floor(Math.random() * cmpdizi.length);
	let cmprast=cmpdizi[cmprastind];

    console.log(plyrast,cmprast)

    if (plyrast==1) {
        let imageElement = document.createElement("img");
        imageElement.src = "./stil/1.jpg";
        imageElement.style.width="100px";
        imageElement.style.height="100px";
        plyzar.appendChild(imageElement);
        
    } else if(plyrast==2) {
        let imageElement = document.createElement("img");
        imageElement.src = "./stil/2.jpg";
        imageElement.style.width="100px";
        imageElement.style.height="100px";
        plyzar.appendChild(imageElement);
    }
    else if(plyrast==3) {
        let imageElement = document.createElement("img");
        imageElement.src = "./stil/3.jpg";
        imageElement.style.width="100px";
        imageElement.style.height="100px";
        plyzar.appendChild(imageElement);
    }
    else if(plyrast==4) {
        let imageElement = document.createElement("img");
        imageElement.src = "./stil/4.jpg";
        imageElement.style.width="100px";
        imageElement.style.height="100px";
        plyzar.appendChild(imageElement);
    }
    else if(plyrast==5) {
        let imageElement = document.createElement("img");
        imageElement.src = "./stil/5.jpg";
        imageElement.style.width="100px";
        imageElement.style.height="100px";
        plyzar.appendChild(imageElement);
    }
    else if(plyrast==6) {
        let imageElement = document.createElement("img");
        imageElement.src = "./stil/6.jpg";
        imageElement.style.width="100px";
        imageElement.style.height="100px";
        plyzar.appendChild(imageElement);
    }


    if (cmprast==1) {
        let imageElement = document.createElement("img");
        imageElement.src = "./stil/1.jpg";
        imageElement.style.width="100px";
        imageElement.style.height="100px";
        cmpzar.appendChild(imageElement);
        
    } else if(cmprast==2) {
        let imageElement = document.createElement("img");
        imageElement.src = "./stil/2.jpg";
        imageElement.style.width="100px";
        imageElement.style.height="100px";
        cmpzar.appendChild(imageElement);
    }
    else if(cmprast==3) {
        let imageElement = document.createElement("img");
        imageElement.src = "./stil/3.jpg";
        imageElement.style.width="100px";
        imageElement.style.height="100px";
        cmpzar.appendChild(imageElement);
    }
    else if(cmprast==4) {
        let imageElement = document.createElement("img");
        imageElement.src = "./stil/4.jpg";
        imageElement.style.width="100px";
        imageElement.style.height="100px";
        cmpzar.appendChild(imageElement);
    }
    else if(cmprast==5) {
        let imageElement = document.createElement("img");
        imageElement.src = "./stil/5.jpg";
        imageElement.style.width="100px";
        imageElement.style.height="100px";
        cmpzar.appendChild(imageElement);
    }
    else if(cmprast==6) {
        let imageElement = document.createElement("img");
        imageElement.src = "./stil/6.jpg";
        imageElement.style.width="100px";
        imageElement.style.height="100px";
        cmpzar.appendChild(imageElement);
    }

}