function stars(){
    let count = 150;
    let scene = document.querySelector('.scene');
    let i =0;
    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 1;
        let h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = 60 + 'px';
        star.style.animationDuration = duration + 's';
        
        scene.appendChild(star);
        i++;

        for(i=0; i<count; i++){
            
        }

        setTimeout(() => { 'i'.style.background = "linear-gradient(blue, #f887ff"}, 2000);
        setTimeout(() => { star.style.height=20 + "px"}, 2000);
    }
}

stars();

