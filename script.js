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
        star.style.width = 2 + 'px';
        star.style.height = 40 + 'px';
        star.style.animationDuration = duration + 's';
        
        scene.appendChild(star);
        i++;

     
            setTimeout(() => { star.style.background = "white"}, 0500);
            setTimeout(() => { star.style.background+ "yellow"}, 1000); // setTime funcionando, só falta fazer a animação direito
            setTimeout(() => { star.style.background= "cyan"}, 1000);
            setTimeout(() => { star.style.background = "green"}, 1500);
            setTimeout(() => { star.style.background= "#321450"}, 2000); 

    }
}

stars();
