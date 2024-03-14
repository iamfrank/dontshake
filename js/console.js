let log = []

function renderLog(element) {
  log = log.slice(-20)
  element.innerHTML = '<span>' + log.join('</span><span>') + '</span>'
}

export function redirectConsoleToDOM(element) {

  const originalLog = console.log
  console.log = function(message) {
    originalLog.apply(console, arguments) // Call the original console.log
    log.push(message)
    renderLog(element)
  }
  const originalErr = console.error
  console.error = function(message) {
    originalErr.apply(console, arguments) // Call the original console.log
    log.push(message)
    renderLog(element)
  }
  const originalWarn = console.warn
  console.warn = function(message) {
    originalWarn.apply(console, arguments) // Call the original console.log
    log.push(message)
    renderLog(element)
  }
  const originalInfo = console.info
  console.info = function(message) {
    originalInfo.apply(console, arguments) // Call the original console.log
    log.push(message)
    renderLog(element)
  }
}
