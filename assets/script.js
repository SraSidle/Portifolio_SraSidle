function alterabody() {
  let animationNeon = document.querySelector(".animacao");
  let telainicial = document.querySelector(".home");

  setTimeout(() => {
    animationNeon.style.display = "none";
  }, 9900);

  setTimeout(() => {
    telainicial.style.display = "flex";
  }, 9991);
}

function alteraWidth() {
  let linha1 = document.querySelector(".line-1");
  let linha2 = document.querySelector(".line-2");
  let linha3 = document.querySelector(".line-3");
  let linha4 = document.querySelector(".line-4");
  let linha5 = document.querySelector(".line-5");
  let linha6 = document.querySelector(".line-6");
  let linha7 = document.querySelector(".line-7");
  let linha8 = document.querySelector(".line-8");
  let linha9 = document.querySelector(".line-9");
  let linha10 = document.querySelector(".line-10");
  let linha11 = document.querySelector(".line-11");
  let linha12 = document.querySelector(".line-12");

  setTimeout(() => {
    linha1.style.width = "9.5rem";
    linha2.style.border = "right: 2px solid rgba(255, 255, 255, 0.75);";
  }, 4101);

  setTimeout(() => {
    linha2.style.width = "9.7rem";
  }, 7501);

  setTimeout(() => {
    linha3.style.width = "10rem";
  }, 11102);

  setTimeout(() => {
    linha4.style.width = "5rem";
  }, 14000);

  setTimeout(() => {
    linha5.style.width = "11rem";
  }, 18000);

  setTimeout(() => {
    linha6.style.width = "8rem";
  }, 22000);

  setTimeout(() => {
    linha7.style.width = "9.5rem";
  }, 26000);

  setTimeout(() => {
    linha8.style.width = "9.5rem";
  }, 30000);

  setTimeout(() => {
    linha9.style.width = "9.5rem";
  }, 34000);

  setTimeout(() => {
    linha10.style.width = "9.5rem";
  }, 38000);

  setTimeout(() => {
    linha11.style.width = "10rem";
  }, 42000);

  setTimeout(() => {
    linha12.style.width = "9.5rem";
  }, 46000);
}

alteraWidth();

alterabody();

function stars() {
  let count = 150;
  let scene = document.querySelector(".scene");
  let i = 0;
  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let duration = Math.random() * 25;
    let h = Math.random() * 100;

    star.style.left = x + "px";
    star.style.width = 1 + "px";
    star.style.height = 40 + "px";
    //star.style.borderradius = 50 + '%'
    star.style.animationDuration = duration + "s";

    scene.appendChild(star); //adiciona star dentro de scene
    i++;

    setTimeout(() => {
      star.style.animationDuration = Math.random() * 1 + "s";
    }, 1700);
    setTimeout(() => {
      star.style.animationDuration = Math.random() * 50 + "s";
    }, 5000);
    setTimeout(() => {
      star.style.animationDuration = Math.random() * 500 + "s";
    }, 8000);
  }
}

stars();
