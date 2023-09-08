// window.addEventListener("resize", (e) => {
//   if (window.innerWidth < CANVAS_WIDTH) {
//     canvas.hidden = true
//   }
//   else {
//     canvas.hidden = false
//   }
// })

window.addEventListener("keydown", (e) => {
  if (player.preventInput) return
  switch(e.key){
    case "w":
      if(player.velocity.y === 0){
        player.velocity.y = -15
      }
      break
    case "a":
      keys.a.pressed = true
      break
    case "d":
      keys.d.pressed = true
      break
    case " ":
      doors.forEach(door => {
        if (player.isCollidingWith(door)) {
          player.velocity.x = 0
          player.velocity.y = 0
          player.preventInput = true
          player.switchSprite("enterDoor")
          door.play()
        }
      })
  }
})

window.addEventListener("keyup", (e) => {
  if (player.preventInput) return
  switch(e.key){
    case "a":
      keys.a.pressed = false
      break
    case "d":
      keys.d.pressed = false
      break
  }
})