const btnOn = document.querySelector('#btn-on');
const btnOff = document.querySelector('#btn-off');
const img = document.querySelector('img');

btnOn.addEventListener('click',() => {
    img.src = "images/light-on.png";
    img.alt = "light-on";
});

btnOff.addEventListener('click',() => {
    img.src = "images/light-off.png";
    img.alt = "light-off";
})

