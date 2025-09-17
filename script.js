const grid = document.querySelector(".grid");


for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let block = document.createElement('div');
        block.classList.add('block');
        grid.append(block);
    }
}

const blocks = document.querySelectorAll(".block")

blocks.forEach(function (block) {
    block.addEventListener('mouseenter', () => {
        block.classList.add('block-color')
    })
})