class Player extends Sprite{

  constructor({ position, collisionBlocks = [], imageSrc, frameRate, animations, loop, lastDirection = "right" }) {
    super({ position, imageSrc, frameRate, animations, loop })
    this.velocity = {
      x: 0,
      y: 0
    }
    this.collisionBlocks = collisionBlocks
    this.gravity = 0.5
    this.hitbox = {
      position: {
        x: this.position.x + 58,
        y: this.position.y + 34,
      },
      width: 50,
      height: 53
    }
    this.preventInput = false
    this.lastDirection = lastDirection
  }

  update(canvas) {
    // c.fillStyle = "blue"
    // c.globalAlpha = 0.5
    // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    this.applyGravity()
    this.updateXPosition()
    this.checkForHorizontalCollisions()
    this.updateYPosition()
    this.checkForVerticalCollisions()
    this.checkForCanvasOutOfBounds()
    // c.fillStyle = "blue"
    // c.globalAlpha = 0.5
    // c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
  }

  handleInput(keys) {
    if (this.preventInput) return
    
    if (keys.a.pressed) {
      this.switchSprite("runLeft")
      this.velocity.x = -4
      this.lastDirection = "left"
    }
    if (keys.d.pressed) {
      this.switchSprite("runRight")
      this.velocity.x = 4
      this.lastDirection = "right"
    }
    if (this.velocity.x === 0) {
      if (this.lastDirection === "left") {
        this.switchSprite("idleLeft")
      }
      else {
        this.switchSprite("idle")
      }
    }
    
  }
  
  updateXPosition() {
    this.position.x += this.velocity.x
    this.updateHitBox()
  }

  updateYPosition() {
    this.position.y += this.velocity.y
    this.updateHitBox()
  }

  applyGravity() {
    this.velocity.y += this.gravity
  }

  updateHitBox() {
    this.hitbox.position = {
      x: this.position.x + 58,
      y: this.position.y + 34,
    }
  }

  checkForHorizontalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]
      if (this.hitbox.position.x < collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width > collisionBlock.position.x &&
        this.hitbox.position.y < collisionBlock.position.y + collisionBlock.height &&
        this.hitbox.position.y + this.hitbox.height > collisionBlock.position.y
      ) {
        if (this.velocity.x > 0) {
          const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
          this.position.x = collisionBlock.position.x - offset - 0.01
        } else {
          const offset = this.hitbox.position.x - this.position.x
          this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01
        }
        break
      }
    }
  }

  checkForVerticalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]
      if (this.hitbox.position.x < collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width > collisionBlock.position.x &&
        this.hitbox.position.y < collisionBlock.position.y + collisionBlock.height &&
        this.hitbox.position.y + this.hitbox.height > collisionBlock.position.y
      ) {
        if (this.velocity.y > 0) {
          const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
          this.position.y = collisionBlock.position.y - offset - 0.01
        } else {
          const offset = this.hitbox.position.y - this.position.y
          this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01
        }
        this.velocity.y = 0
        break
      }
    }
  }

  isInsideOf(block) {
    return (
      this.hitbox.position.x + this.width <= block.position.x + block.width &&
      this.hitbox.position.x >= block.position.x &&
      this.hitbox.position.y <= block.position.y + block.height &&
      this.hitbox.position.y + this.hitbox.height >= block.position.y
    )
  }

  isCollidingWith(block) {
    return (
      this.hitbox.position.x < block.position.x + block.width &&
      this.hitbox.position.x + this.hitbox.width > block.position.x &&
      this.hitbox.position.y < block.position.y + block.height &&
      this.hitbox.position.y + this.hitbox.height > block.position.y
    )
  }

  checkForCanvasOutOfBounds() {
    /** HORIZONTAL */
    if(this.position.x + this.width > canvas.width){
      this.position.x = canvas.width - this.width
      this.velocity.x = 0
    }

    if (this.position.x < 0) {
      this.position.x = 0
      this.velocity.x = 0
    }

    /** VERTICAL */
    if (this.position.y + this.height > canvas.height) {
      this.position.y = canvas.height - this.height;
      this.velocity.y = 0;
    }
    if (this.position.y < 0) {
      this.position.y = 0;
      this.velocity.y = 0;
    }
  }
}