const table = document.querySelector("table")
const div = document.querySelector("div")
let arr = ['']
let hole = []

for (let i = 1; i <= 15; i++) {
    arr.push(i)     
}
arr.sort((a, b) => 0.5 - Math.random());

cedvel()

function swipe(i, j) {
    let cell0 = document.getElementById(hole.join(''))
    let cell1 = document.getElementById([i,j].join(''))
    if (i == hole[0] && Math.abs(j - hole[1]) == 1 ||
        j == hole[1] && Math.abs(i - hole[0]) == 1 ) {
        cell0.innerHTML = cell1.innerHTML
        cell1.innerHTML = ''
        hole = [i, j]
    }

    if (isGameFinished()) gameOver();

    //* For check gameOver() method :)
    // else gameOver(); 
}

function cedvel() {
    const n = 4;
    let kod = '';
    let x = 0;
    for (let i = 1; i <= n; i++) {
        kod += '<tr>'
            for (let j = 1; j <= n; j++) {
                if(arr[x] == '') hole = [i, j]
                kod += `<td id="${i}${j}" onclick="swipe(${i}, ${j})">${arr[x]}</td>`;
                x++;
            }
        kod += '</tr>'
    }
    table.innerHTML = kod
}

function isGameFinished() {
    const cells = table.querySelectorAll("td");
    for (let i = 0; i < cells.length; i++) {
        const cellValue = +cells[i].innerHTML;
        if (cellValue !== i + 1) {
            return false;
        }
    }
    return true;
}


function gameOver() {
    const str="GameOver";
    kod='';
    let c=0;
    for (let i = 0; i < 4; i++) {
        kod+= `<tr class="end">`;
        for (let j = 0; j <4; j++) {
            kod+= `<td> ${i > 0 && i < 3 ? str[c++] : ''}</td>`
        }
        kod+=`</tr>`
    }
    table.innerHTML = kod
}
