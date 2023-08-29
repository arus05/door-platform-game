canvas = document.querySelector("canvas")
canvas.width = 16*64
canvas.height = 9*64
c = canvas.getContext("2d")

const player = new Player({
  position: {
    x: 0,
    y: 0
  }
})

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
}

function animate(){
  c.fillStyle = "white"
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.velocity.x = 0
  if(keys.a.pressed){
    player.velocity.x = -2
  }
  if(keys.d.pressed){
    player.velocity.x = 2
  }
  player.draw(c)
  player.update(canvas)
  window.requestAnimationFrame(animate)
}

animate()