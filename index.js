/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let hours = time.split(':')
  if (hours[0] < 12) {
    return "Good Morning"
  } else if (hours[0] > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(str) {
  let mess = document.getElementById('greeting');
  mess.innerText = str
}
