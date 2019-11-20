var button = document.createElement('button');
var container = document.querySelector('.container');
var showOverflow = false;

var overflowStyle = `
  overflow: hidden;
`;

var buttonStyle = `
  position: fixed;
  left: 40px;
  bottom: 40px;
  width: auto;
  height: 50px;
`;

button.style = buttonStyle;
button.innerHTML = 'Toggle overflow';

button.onclick = function() {

  showOverflow ? container.style = `` : container.style = overflowStyle;
  showOverflow ? showOverflow = false : showOverflow = true;

};

document.body.appendChild(button);
