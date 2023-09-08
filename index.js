levels[level].init()

/** ANIMATION LOOP */
function animate() {
  /** DRAWING THE BG */
  background.draw(c)

  doors.forEach(door => {
    door.draw(c)
  })

  player.velocity.x = 0

  player.handleInput(keys)

  player.draw(c)
  player.update(canvas)

  c.save()
  c.globalAlpha = overlay.opacity
  c.fillStyle = "black"
  c.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  c.restore()

  window.requestAnimationFrame(animate)
}

animate()