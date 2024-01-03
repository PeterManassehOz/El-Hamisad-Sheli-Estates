const form = document.querySelector('form');

form.addEventListener('submit', (e) => {e.preventDefault();
const fd = new FormData(form);
const obj = Object.fromEntries(fd);

const json = JSON.stringify(obj);
localStorage.setItem('form', json);

window.location.href = "saveDetails.html";

})

/*function select1() {const buttonElement = document.querySelector('.js-select-button-1');

if (buttonElement.innerHTML === 'Buy') {buttonElement.innerHTML = 'Bought';
buttonElement.classList.add('is-selected');
} else {buttonElement.innerHTML = 'Buy';
buttonElement.classList.remove('is-selected');
  }
}


function select2() {const buttonElement = document.querySelector('.js-select-button-2');

if (buttonElement.innerHTML === 'Buy') {buttonElement.innerHTML = 'Bought';
buttonElement.classList.add('is-selected');
} else {buttonElement.innerHTML = 'Buy';
buttonElement.classList.remove('is-selected');
  }
}

function select3() {const buttonElement = document.querySelector('.js-select-button-3');
if (buttonElement.innerHTML === 'Buy') {buttonElement.innerHTML = 'Bought';
buttonElement.classList.add('is-selected');
} else {buttonElement.innerHTML = 'Buy';
buttonElement.classList.remove('is-selected');
  }
}

function select4() {const buttonElement = document.querySelector('.js-select-button-4');
if (buttonElement.innerHTML === 'Buy') {buttonElement.innerHTML = 'Bought';
buttonElement.classList.add('is-selected');
} else {buttonElement.innerHTML = 'Buy';
buttonElement.classList.remove('is-selected');
  }
}

function select5() {const buttonElement = document.querySelector('.js-select-button-5');
if (buttonElement.innerHTML === 'Buy') {buttonElement.innerHTML = 'Bought';
buttonElement.classList.add('is-selected');
} else {buttonElement.innerHTML = 'Buy';
buttonElement.classList.remove('is-selected');
  }
}

function select6() {const buttonElement = document.querySelector('.js-select-button-6');
if (buttonElement.innerHTML === 'Buy') {buttonElement.innerHTML = 'Bought';
buttonElement.classList.add('is-selected');
} else {buttonElement.innerHTML = 'Buy';
buttonElement.classList.remove('is-selected');
  }
}

function select7() {const buttonElement = document.querySelector('.js-select-button-7');
if (buttonElement.innerHTML === 'Buy') {buttonElement.innerHTML = 'Bought';
buttonElement.classList.add('is-selected');
} else {buttonElement.innerHTML = 'Buy';
buttonElement.classList.remove('is-selected');
  }
}*/

