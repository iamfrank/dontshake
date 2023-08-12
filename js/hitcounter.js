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
    this.innerHTML = `<p>Hits: ${ this.hits }</p>`
  }

  takeHit() {
    this.hits = this.hits + 1
    this.#render()
  }

}
