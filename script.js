function alterabody(){
    let animationNeon = document.querySelector(".animacao");
   let rocketAnimation = document.querySelector(".scene");


setTimeout(() => { animationNeon.style.display = 'none'} , 10000)

setTimeout(() => { rocketAnimation.style.display = 'flex'}, 10001);

}

alterabody();

function stars(){
    let count = 150;
    let scene = document.querySelector('.scene');
    let i = 0;
    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 25;
        let h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = 40 + 'px';
        star.style.animationDuration = duration + 's';
        
        scene.appendChild(star);//adiciona star dentro de scene
        i++;

            setTimeout(() => { star.style.animationDuration = Math.random() * 1 + 's';}, 1700);
            setTimeout(() => { star.style.animationDuration = Math.random() * 50 + 's';}, 5000);
            setTimeout(() => { star.style.animationDuration = Math.random() * 500 + 's';}, 8000);
    }
}

stars();


