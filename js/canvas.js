export class Jitter {

  canvasElement
  ctx
  midpoint
  point1
  point2
  point3

  constructor(DOMelement) {
    this.canvasElement = DOMelement
    console.log('this.canvasElement', this.canvasElement)
    this.ctx = this.canvasElement.getContext('2d')
    this.midpoint = [(this.canvasElement.width / 2), (this.canvasElement.height / 2)]

    // Set styles
    this.ctx.strokeStyle = 'black'
    
    this.ctx.fillStyle = 'red'

    this.updateCanvas(10,10,10)
  }

  updateCanvas(a, b, c) {

    // Generate coordinates for the three points
    this.point1 = { x: this.midpoint[0] - a, y: this.midpoint[1] + a }
    this.point2 = { x: this.midpoint[0], y: this.midpoint[1] - b }
    this.point3 = { x: this.midpoint[0] + c, y: this.midpoint[1] + c }
    
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height)
  
    // Draw the lines connecting the points
    this.ctx.strokeStyle = 'black'
    this.ctx.beginPath()
    this.ctx.moveTo(this.point1.x, this.point1.y)
    this.ctx.lineTo(this.point2.x, this.point2.y)
    this.ctx.lineTo(this.point3.x, this.point3.y)
    this.ctx.closePath()
  
    // Draw the lines
    this.ctx.stroke()
  
    // Draw the points
    /*
    this.ctx.fillStyle = 'red'
    this.ctx.beginPath()
    this.ctx.arc(this.point1.x, this.point1.y, 5, 0, Math.PI * 2)
    this.ctx.arc(this.point2.x, this.point2.y, 5, 0, Math.PI * 2)
    this.ctx.arc(this.point3.x, this.point3.y, 5, 0, Math.PI * 2)
    this.ctx.fill()
    */
  }

}
