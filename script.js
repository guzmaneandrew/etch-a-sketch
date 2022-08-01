let container = document.createElement('div');
container.className = 'container';

document.body.appendChild(container);

let square = document.createElement('div');
square.className = 'square'

for(let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let square = document.createElement('div');
    square.className = 'square';
    container.appendChild(square);
  }
}