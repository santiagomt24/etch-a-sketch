const gridContainer = document.getElementById('grid-container');
const resizeButton = document.getElementById('resize-button');
const containerSize = 480;

// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }


function createGrid(size) {
    // Clear the existing grid
    gridContainer.innerHTML = '';
    
    // Calculate the size of each square based on the number of rows
    const squareSize = containerSize / size;

    // Create the grid items
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.classList.add('grid-item');
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;

      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor(); // Change to a random color on hover
      });

      gridContainer.appendChild(square);
    }
  }

// Create the initial grid, default size (16x16)
createGrid(16);

// Resize grid when the button is clicked
resizeButton.addEventListener('click', () => {
    let userInput = prompt('Enter the number of rows between 1 and 100:');

    userInput = parseInt(userInput);
    if (userInput >= 1 && userInput <= 100) {
      createGrid(userInput);
    } else {
      alert('Please enter a valid number between 1 and 100.');
    }
  });


