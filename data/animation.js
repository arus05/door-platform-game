const playerAnimations = {
  idle: {
    frameRate: 11,
    frameBuffer: 2,
    loop: true,
    imageSrc: "../public/images/king/idle.png"
  },
  idleLeft: {
    frameRate: 11,
    frameBuffer: 2,
    loop: true,
    imageSrc: "../public/images/king/idleLeft.png"
  },
  runRight: {
    frameRate: 8,
    frameBuffer: 4,
    loop: true,
    imageSrc: "../public/images/king/runRight.png"
  },
  runLeft: {
    frameRate: 8,
    frameBuffer: 4,
    loop: true,
    imageSrc: "../public/images/king/runLeft.png"
  },
  enterDoor: {
    frameRate: 8,
    frameBuffer: 4,
    loop: false,
    imageSrc: "../public/images/king/enterDoor.png",
    onComplete: moveToNextLevel,
    isComplete: false
  }
}

for (let key in playerAnimations) {
  const image = new Image()
  image.src = playerAnimations[key].imageSrc
  playerAnimations[key].image = image
}