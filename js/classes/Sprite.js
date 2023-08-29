class Sprite {
  constructor({
    position,
    imageSrc
  }) {
    this.position = position
    this.image = new Image()
    this.image.src = imageSrc
    this.loaded = false
    this.image.onload = () => {
      this.loaded = true
    }
  }

  draw(c) {
    if (!this.loaded) return
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}