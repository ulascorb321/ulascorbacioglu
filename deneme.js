let next = document.getElementById('next');
let prev = document.getElementById('prev');
let resim1 = document.getElementById('f1');
let resim2 = document.getElementById('f2');
let resim3 = document.getElementById('f3');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let i = 0;
let x = 0;

c1.style.backgroundColor = "white"
c2.style.backgroundColor = "transparent"
c3.style.backgroundColor = "transparent"

next.onclick = function () {
    i++;
    if (i == 1) {
        resim1.src = "proje2.png";
        resim2.src = "proje1.png";
        resim3.src = "proje3.png";
        c3.style.backgroundColor = "transparent"
        c2.style.backgroundColor = "white"
        c1.style.backgroundColor = "transparent"
        x = 2;
    }
    if (i == 2) {
        resim1.src = "proje3.png";
        resim2.src = "proje2.png";
        resim3.src = "proje1.png";
        c2.style.backgroundColor = "transparent"
        c1.style.backgroundColor = "transparent"
        c3.style.backgroundColor = "white"
        x = 1;
    }
    if (i == 3) {
        resim1.src = "proje1.png";
        resim2.src = "proje3.png";
        resim3.src = "proje2.png";
        c1.style.backgroundColor = "white"
        c2.style.backgroundColor = "transparent"
        c3.style.backgroundColor = "transparent"
        i = 0;
        x = 0;
    }
}

prev.onclick = function () {
    x++;
    if (x == 1) {
        resim1.src = "proje3.png";
        resim2.src = "proje2.png";
        resim3.src = "proje1.png";
        c2.style.backgroundColor = "transparent"
        c3.style.backgroundColor = "white"
        c1.style.backgroundColor = "transparent"
        i = 2;
    }

    if (x == 2) {
        resim1.src = "proje2.png";
        resim2.src = "proje1.png";
        resim3.src = "proje3.png";
        c3.style.backgroundColor = "transparent"
        c2.style.backgroundColor = "white"
        c1.style.backgroundColor = "transparent";
        i = 1;
    }

    if (x == 3) {
        resim1.src = "proje1.png";
        resim2.src = "proje3.png";
        resim3.src = "proje2.png";
        c1.style.backgroundColor = "white"
        c2.style.backgroundColor = "transparent"
        c3.style.backgroundColor = "transparent"
        x = 0;
        i = 0;
    }
}

c1.onclick = function () {
    resim1.src = "proje1.png"
    resim2.src = "proje3.png"
    resim3.src = "proje2.png";
    i = 0;
    x = 0;
    c1.style.backgroundColor = "white"
    c2.style.backgroundColor = "transparent"
    c3.style.backgroundColor = "transparent"
}

c2.onclick = function () {
    resim1.src = "proje2.png"
    resim2.src = "proje1.png"
    resim3.src = "proje3.png"
    i = 1;
    x = 2;
    c1.style.backgroundColor = "transparent"
    c2.style.backgroundColor = "white"
    c3.style.backgroundColor = "transparent"
}

c3.onclick = function () {
    resim1.src = "proje3.png"
    resim2.src = "proje2.png"
    resim3.src = "proje1.png"
    i = 2;
    x = 1;
    c1.style.backgroundColor = "transparent"
    c2.style.backgroundColor = "transparent"
    c3.style.backgroundColor = "white"
}


const sayHelloEl = document.getElementById('say-hello')
const hiddenEl = document.querySelectorAll('.hidden')
const shadowEl = document.querySelector('.logos')
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target === shadowEl) {
                entry.target.classList.add('show', 'shadow')
            } else { entry.target.classList.add('show') }
        } else { entry.target.classList.remove('show', 'shadow') }
    })
})
hiddenEl.forEach((el) => observer.observe(el))
// Say Hello
function sayHello() {
    let welcome;
    let date = new Date();
    let helloHour = date.getHours();
    if (helloHour < 12) {
        welcome = "Good Morning";
    } else if (helloHour < 16) {
        welcome = "Good Afternoon";
    } else {
        welcome = "Good Evening";
    }
    return welcome
}
