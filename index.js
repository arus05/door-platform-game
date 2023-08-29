/** CANVAS SETUP */
const canvas = document.querySelector("canvas")
canvas.width = 16*64
canvas.height = 9*64
const c = canvas.getContext("2d")

/** GAME CONFIGURATION */
const backgroundLevel1 = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: "./public/images/backgroundLevel1.png"
})

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

const collisionBlocks = generateCollisionBlocks(collisions[0])

/** ANIMATION LOOP */
function animate() {
  /** DRAWING THE BG */
  backgroundLevel1.draw(c)
  collisionBlocks.forEach(block => {
    block.draw(c)
  })

  player.velocity.x = 0
  if(keys.a.pressed){
    player.velocity.x = -4
  }
  if(keys.d.pressed){
    player.velocity.x = 4
  }
  player.draw(c)
  player.update(canvas)

  window.requestAnimationFrame(animate)
}

animate()