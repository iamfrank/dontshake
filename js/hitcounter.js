export class HitCounter extends HTMLElement {

  hits = 0

  constructor() {
    super()
  }

  connectedCallback() {
    this.#render()
    window.addEventListener('hit', (e) => {
      this.takeHit()
    })
  }

  #render() {
    this.innerHTML = `
      <p>Hits: ${ this.hits }</p>
      <p id="hitalert" hidden>Don't shake!</p>
    `
  }

  takeHit() {
    this.hits = this.hits + 1
    this.#render(true)

    const hitAlert = this.querySelector('#hitalert')
    hitAlert.hidden = false
    setTimeout(() => {
      hitAlert.hidden = true
    }, 2500)
  }

}
