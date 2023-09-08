class Sprite {
  constructor({
    position,
    imageSrc,
    frameRate = 1,
    frameBuffer = 2,
    animations,
    loop = true,
    autoplay = true
  }) {
    this.position = position
    this.image = new Image()
    this.image.src = imageSrc
    this.frameRate = frameRate
    this.frameBuffer = frameBuffer
    this.animations = animations
    this.loop = loop
    this.autoplay = autoplay
    this.loaded = false
    this.image.onload = () => {
      this.loaded = true
      this.width = this.image.width / this.frameRate
      this.height = this.image.height
    }
    this.currentFrame = 0
    this.elapsedFrames = 0
    this.currentAnimation = undefined
  }

  play() {
    this.autoplay = true
  }

  draw(c) {
    if (!this.loaded) return
    const cropbox = {
      position: {
        x: this.width * this.currentFrame,
        y: 0
      },
      width: this.width,
      height: this.height
    }
    c.drawImage(
      this.image,
      cropbox.position.x,
      cropbox.position.y,
      cropbox.width,
      cropbox.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
    this.updateFrames()
  }

  updateFrames() {
    if (!this.autoplay) return
    this.elapsedFrames++

    if (this.elapsedFrames % this.frameBuffer === 0) {
      if (this.loop) {
        this.currentFrame = (this.currentFrame + 1) % this.frameRate
      }
      else {
        if (this.currentFrame === this.frameRate - 1) {
          if (this.currentAnimation && !this.currentAnimation.isComplete) {
            this.currentAnimation.onComplete()
            this.currentAnimation.isComplete = true
          }
          return
        }
        this.currentFrame++
      }
    }
  }

  switchSprite(spriteName) {
    if (this.image === this.animations[spriteName].image) return

    this.currentFrame = 0
    const animation = this.animations[spriteName]

    this.loop = animation.loop
    this.image = animation.image
    this.frameRate = animation.frameRate
    this.frameBuffer = animation.frameBuffer
    this.currentAnimation = animation
  }
}