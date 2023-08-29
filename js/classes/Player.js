class Player{

  gravity = 0.25
  constructor({position, width=50, height=50}){
    this.position = position
    this.width = width
    this.height = height
    this.velocity = {
      x: 0,
      y: 0
    }
    this.gravity = 0.25
  }

  draw(c){
    c.fillStyle = "red"
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update(canvas){
    this.velocity.y += this.gravity
    this.position.y += this.velocity.y
    if(this.position.y + this.height > canvas.height){
      this.position.y = canvas.height - this.height;
      this.velocity.y = 0;
    }
    if(this.position.y < 0){
      this.position.y = 0;
      this.velocity.y = 0;
    }
    this.position.x += this.velocity.x
    if(this.position.x + this.width > canvas.width){
      this.position.x = canvas.width - this.width
      this.velocity.x = 0
    }

    if(this.position.x < 0){
      this.position.x = 0
      this.velocity.x = 0
    }
  }
}