const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let square = document.createElement('div');
        square.classList.add('block');
        grid.append(square);
    }
}

