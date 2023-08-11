export function updateCanvas(canvasElement, a, b, c) {
  const ctx = canvasElement.getContext('2d');

  const midpoint = [(canvasElement.width / 2), (canvasElement.height / 2)]

  // Generate coordinates for the three points
  const point1 = { x: midpoint - a, y: midpoint + a };
  const point2 = { x: midpoint, y: midpoint - b };
  const point3 = { x: midpoint + c, y: midpoint + c };

  // Clear the canvas
  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

  // Draw the lines connecting the points
  ctx.beginPath();
  ctx.moveTo(point1.x, point1.y);
  ctx.lineTo(point2.x, point2.y);
  ctx.lineTo(point3.x, point3.y);
  ctx.closePath();

  // Set line color
  ctx.strokeStyle = 'black';

  // Draw the lines
  ctx.stroke();

  // Draw the points
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(point1.x, point1.y, 5, 0, Math.PI * 2);
  ctx.arc(point2.x, point2.y, 5, 0, Math.PI * 2);
  ctx.arc(point3.x, point3.y, 5, 0, Math.PI * 2);
  ctx.fill();
}
