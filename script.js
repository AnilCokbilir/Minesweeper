let fields = [];
x = 16;
y = 16;

function init() {
    fillFields();
    render();
}

function render() {
    document.getElementById('gameField').innerHTML = '';
    for (let i = 0; i < x; i++) {
        for (let a = 0; a < y; a++) {
            document.getElementById('gameField').innerHTML += `
            <div class="field" id="field${i}" onmouseover="hover(${i}, ${a})"></div>
            `
        }
    }
}

function fillFields() {
    for (let i = 0; i < x; i++) {
        for (let a = 0; a < y; a++) {
            fields.push({
                x: i,
                y: a,
                number: 0,
                hasBomb: false,
                revealed: false
            })
        }
    }
}

function hover(posX) {
    let fieldPos = document.getElementById('field' + posX);
    console.log(fieldPos)
    if (!fields[posX].revealed) {
        fieldPos.style.backgroundImage = "url('img/buttons/00b_Default - hover.png')"
    }
}