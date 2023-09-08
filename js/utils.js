const parse2D = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i += 16) {
    const row = arr.slice(i, i+16)
    result.push(row)
  }
  return result
}

const generateCollisionBlocks = (collisions) => {
  const collisionBlocks = []
  collisions.forEach((row, i) => {
    row.forEach((block, j) => {
      if (block !== 0) {
        collisionBlocks.push(new CollisionBlock({
          position: {
            x: j * 64,
            y: i * 64 
          }
        }))
      }
    })
  })
  return collisionBlocks
}

const moveToNextLevel = () => {
  gsap.to(overlay, {
    opacity: 1,
    onComplete: () => {
      level = (level + 1) % TOTAL_LEVELS
      levels[level].init()
      gsap.to(overlay, {
        opacity: 0
      })
    }
  })
}