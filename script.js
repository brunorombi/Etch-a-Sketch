const gridElement = document.querySelector(".grid");
const sizeButton = document.querySelector(".sizeBtn")

let gridSize = 16; 

function createGrid(gridSize) {
  let totalBlocks = gridSize * gridSize;

  gridElement.querySelectorAll(".block").forEach((block) => {
    block.remove();
  })

  for (let i = 0; i < totalBlocks; i++) {
    let block = document.createElement('div');
    block.classList.add('block');
    block.style.flex = `1 1 calc(100% / ${gridSize})`;
    gridElement.append(block);
  }
  trailBlock();
}

createGrid(gridSize);

function setupGridResize(buttonElement) {
  buttonElement.addEventListener("click", () => {
    let newSize = parseInt(prompt("Digite o tamanho do seu grid"));
    if (newSize > 100) {
      newSize = 100
      alert("Maximum grid is 100");
    } else if(!newSize) {
      newSize = 16;
    }
    createGrid(newSize);
  })
}

setupGridResize(sizeButton);

function trailBlock() {
    const blocks = document.querySelectorAll(".block")

    blocks.forEach(function (block) {
        block.addEventListener('mouseenter', () => {
            block.classList.add('block-color')
        })
    })
}