let at=document.getElementById("throw");
let plyzar= document.querySelector(".plyzar");
let cmpzar= document.querySelector(".cmpzar");
let plyimg = document.createElement("img");
let cmpimg = document.createElement("img");

let plsay=0;
let cmpsay=0;

at.addEventListener('click',game);

function game(e){

    plyimg.remove();
    cmpimg.remove();

    let pls= document.querySelector("#plscore");
    let cmps= document.querySelector("#cmpscore");

    let plydizi= [1,2,3,4,5,6];
    let plyrastind = Math.floor(Math.random() * plydizi.length);
	let plyrast=plydizi[plyrastind];

    let cmpdizi= new Array(1,2,3,4,5,6);
    let cmprastind = Math.floor(Math.random() * cmpdizi.length);
	let cmprast=cmpdizi[cmprastind];

    console.log(plyrast,cmprast)

    
    if (plyrast==1) {
        
        plyimg.src = "./stil/1.jpg";
        plyimg.style.width="100px";
        plyimg.style.height="100px";
        plyzar.appendChild(plyimg);

        plsay+=plyrast;
        pls.textContent=plsay;
    } 
    else if(plyrast==2) {
        
        plyimg.src = "./stil/2.jpg";
        plyimg.style.width="100px";
        plyimg.style.height="100px";
        plyzar.appendChild(plyimg);

        plsay+=plyrast;
        pls.textContent=plsay;
    }
    else if(plyrast==3) {
        
        plyimg.src = "./stil/3.jpg";
        plyimg.style.width="100px";
        plyimg.style.height="100px";
        plyzar.appendChild(plyimg);

        plsay+=plyrast;
        pls.textContent=plsay;
    }
    else if(plyrast==4) {
        
        plyimg.src = "./stil/4.jpg";
        plyimg.style.width="100px";
        plyimg.style.height="100px";
        plyzar.appendChild(plyimg);

        plsay+=plyrast;
        pls.textContent=plsay;
    }
    else if(plyrast==5) {
        
        plyimg.src = "./stil/5.jpg";
        plyimg.style.width="100px";
        plyimg.style.height="100px";
        plyzar.appendChild(plyimg);
        
        plsay+=plyrast;
        pls.textContent=plsay;
    }
    else if(plyrast==6) {
        
        plyimg.src = "./stil/6.jpg";
        plyimg.style.width="100px";
        plyimg.style.height="100px";
        plyzar.appendChild(plyimg);

        plsay+=plyrast;
        pls.textContent=plsay;
    }


    if (cmprast==1) {
        
        cmpimg.src = "./stil/1.jpg";
        cmpimg.style.width="100px";
        cmpimg.style.height="100px";
        cmpzar.appendChild(cmpimg);

        cmpsay+=cmprast;
        cmps.textContent=cmpsay;
    } 
    else if(cmprast==2) {
        
        cmpimg.src = "./stil/2.jpg";
        cmpimg.style.width="100px";
        cmpimg.style.height="100px";
        cmpzar.appendChild(cmpimg);

        cmpsay+=cmprast;
        cmps.textContent=cmpsay;
    }
    else if(cmprast==3) {
        
        cmpimg.src = "./stil/3.jpg";
        cmpimg.style.width="100px";
        cmpimg.style.height="100px";
        cmpzar.appendChild(cmpimg);

        cmpsay+=cmprast;
        cmps.textContent=cmpsay;
    }
    else if(cmprast==4) {
        
        cmpimg.src = "./stil/4.jpg";
        cmpimg.style.width="100px";
        cmpimg.style.height="100px";
        cmpzar.appendChild(cmpimg);

        cmpsay+=cmprast;
        cmps.textContent=cmpsay;
    }
    else if(cmprast==5) {
        
        cmpimg.src = "./stil/5.jpg";
        cmpimg.style.width="100px";
        cmpimg.style.height="100px";
        cmpzar.appendChild(cmpimg);

        cmpsay+=cmprast;
        cmps.textContent=cmpsay;
    }
    else if(cmprast==6) {
        
        cmpimg.src = "./stil/6.jpg";
        cmpimg.style.width="100px";
        cmpimg.style.height="100px";
        cmpzar.appendChild(cmpimg);

        cmpsay+=cmprast;
        cmps.textContent=cmpsay;
    }
}