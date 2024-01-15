function changeColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('color-container').style.backgroundColor = randomColor;
  }
  