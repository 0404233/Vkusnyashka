// const obj = {
//     name: 'Andrey',
//     age: 21,
// }

// for (let key in obj) {
//     console.log(obj[key]);
// }


const count = 10 ** 9;
let i = 0;

const butt = document.querySelector('.butt');
butt.addEventListener('click', bys);


function bys() { 
    let interval = setInterval(function () {
    let img = document.createElement('img');
    img.src = "./s.svg";
    document.body.append(img);

    i++;

    if (i === count) {
        clearInterval(interval)
    }
}, 200);

butt.classList.add('hide');
document.body.style.display = 'flex';
}