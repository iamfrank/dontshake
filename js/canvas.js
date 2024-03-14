export class Jitter {

  canvasElement
  ctx
  midpoint
  point1
  point2
  point3
  hitEvent = new CustomEvent('hit', {bubbles: true})

  constructor(DOMelement) {

    this.canvasElement = DOMelement
    this.canvasElement.height = this.canvasElement.clientHeight
    this.canvasElement.width = this.canvasElement.clientWidth
    
    this.ctx = this.canvasElement.getContext('2d')
    this.ctx.strokeStyle = 'red' // Set style

    this.midpoint = [(this.canvasElement.width / 2), (this.canvasElement.height / 2)]

    this.updateCanvas(1,1,1)
  }

  calcPoint(mid, value) {
    return mid + (value * 50)
  }

  updateCanvas(a, b, c) {

    // Generate coordinates for the three points
    this.point1 = { 
      x: this.calcPoint(this.midpoint[0], -a), 
      y: this.calcPoint(this.midpoint[1], a)
    }
    this.point2 = { 
      x: this.calcPoint(this.midpoint[0], 0), 
      y: this.calcPoint(this.midpoint[1], -b)
    }
    this.point3 = { 
      x: this.calcPoint(this.midpoint[0], c), 
      y: this.calcPoint(this.midpoint[1], c)
    }
    
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height)
  
    // Draw the lines connecting the points
    this.ctx.beginPath()
    this.ctx.moveTo(this.point1.x, this.point1.y)
    this.ctx.lineTo(this.point2.x, this.point2.y)
    this.ctx.lineTo(this.point3.x, this.point3.y)
    this.ctx.closePath()
  
    // Draw the lines
    this.ctx.stroke()

    if (a > 5 || b > 5 || c > 5) {
      console.log('too fast!')
      window.dispatchEvent(this.hitEvent)
    } else {
      console.log('too slow')
    }
  }

}
