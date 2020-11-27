const color = document.querySelector('.color'); // display color
const hex = document.querySelector('.hex'); // name of color
const btn = document.querySelector('button'); // button => save color
const saved = document.querySelector('.saved'); // saved color contains main->col/hex
const inp = document.querySelector('.inp'); // input


// Display Color 
inp.addEventListener('keyup', (e) => {

    inp.classList.toggle('upDown');
    inp.style.borderColor = e.target.value;

    color.style.backgroundColor = "" + e.target.value;

    if (e.target.value === "") {
        hex.innerHTML = "#0066FF";
    } else hex.innerHTML = e.target.value;
})


// Save Colors
btn.addEventListener('click', (e) => {
    const main = document.createElement('div');
    const col = document.createElement('div');
    const name = document.createElement('div');
    let txt = " ";
    if (inp.value == "") txt = document.createTextNode('#0066FF');
    else txt = document.createTextNode(inp.value);


    col.classList.add('col');
    main.classList.add('main');
    col.style.backgroundColor = inp.value;


    saved.appendChild(main);
    main.appendChild(col);
    main.appendChild(name);
    name.appendChild(txt);
})