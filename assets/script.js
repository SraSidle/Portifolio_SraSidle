function alterabody() {
  let animationNeon = document.querySelector(".animacao");
  let telainicial = document.querySelector(".home");

  setTimeout(() => {
    animationNeon.style.display = "none";
  }, 00001);

  setTimeout(() => {
    telainicial.style.display = "flex";
  }, 00001);
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

  setTimeout(() => {
    linha1.style.width = "9.5rem";
  }, 4101);

  setTimeout(() => {
    linha2.style.width = "10";
  }, 8201);

  setTimeout(() => {
    linha3.style.width = "9.5rem";
  }, 6000);

  setTimeout(() => {
    linha4.style.width = "9.5rem";
  }, 6000);

  setTimeout(() => {
    linha5.style.width = "9.5rem";
  }, 6000);

  setTimeout(() => {
    linha6.style.width = "9.5rem";
  }, 6000);

  setTimeout(() => {
    linha7.style.width = "9.5rem";
  }, 6000);

  setTimeout(() => {
    linha8.style.width = "9.5rem";
  }, 6000);

  setTimeout(() => {
    linha9.style.width = "9.5rem";
  }, 6000);

  setTimeout(() => {
    linha10.style.width = "9.5rem";
  }, 6000);
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
