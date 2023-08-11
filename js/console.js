export function redirectConsoleToDOM(element) {
  var originalLog = console.log
  console.log = function(message) {
    originalLog.apply(console, arguments) // Call the original console.log
    element.innerHTML += '<p>' + message + '</p>'
  }
  console.error = function(message) {
    originalLog.apply(console, arguments) // Call the original console.log
    element.innerHTML += '<p>' + message + '</p>'
  }
  console.warning = function(message) {
    originalLog.apply(console, arguments) // Call the original console.log
    element.innerHTML += '<p>' + message + '</p>'
  }
  console.info = function(message) {
    originalLog.apply(console, arguments) // Call the original console.log
    element.innerHTML += '<p>' + message + '</p>'
  }
}
