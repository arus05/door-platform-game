/** GAME CONFIGURATION */
let level = 0
let background
let collisionBlocks
let initialAnimation
let player
let doors

const levels = {
  0: {
    init: () => {
      playerAnimations["enterDoor"].isComplete = false
      background = new Sprite({
        position: {
          x: 0,
          y: 0
        },
        imageSrc: "./public/images/backgroundLevel1.png"
      })
      collisionBlocks = generateCollisionBlocks(collisions[0])
      initialAnimation = playerAnimations["idle"]
      player = new Player({
        position: {
          x: 200,
          y: 200
        },
        collisionBlocks,
        imageSrc: initialAnimation.imageSrc,
        frameRate: initialAnimation.frameRate,
        loop: initialAnimation.loop,
        animations: playerAnimations
      })
      doors = [
        new Sprite({
          position: {
            x: 767,
            y: 270
          },
          imageSrc: "./public/images/doorOpen.png",
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false
        })
      ]
    }
  },
  1: {
    init: () => {
      playerAnimations["enterDoor"].isComplete = false
      background = new Sprite({
        position: {
          x: 0,
          y: 0
        },
        imageSrc: "./public/images/backgroundLevel2.png"
      })
      collisionBlocks = generateCollisionBlocks(collisions[1])
      initialAnimation = playerAnimations["idle"]
      player = new Player({
        position: {
          x: 96,
          y: 140
        },
        collisionBlocks,
        imageSrc: initialAnimation.imageSrc,
        frameRate: initialAnimation.frameRate,
        loop: initialAnimation.loop,
        animations: playerAnimations
      })
      doors = [
        new Sprite({
          position: {
            x: 772,
            y: 336
          },
          imageSrc: "./public/images/doorOpen.png",
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false
        })
      ]
    }
  },
  2: {
    init: () => {
      playerAnimations["enterDoor"].isComplete = false
      background = new Sprite({
        position: {
          x: 0,
          y: 0
        },
        imageSrc: "./public/images/backgroundLevel3.png"
      })
      collisionBlocks = generateCollisionBlocks(collisions[2])
      initialAnimation = playerAnimations["idleLeft"]
      player = new Player({
        position: {
          x: 750,
          y: 230
        },
        collisionBlocks,
        imageSrc: initialAnimation.imageSrc,
        frameRate: initialAnimation.frameRate,
        loop: initialAnimation.loop,
        animations: playerAnimations,
        lastDirection: "left"
      })
      doors = [
        new Sprite({
          position: {
            x: 176,
            y: 335
          },
          imageSrc: "./public/images/doorOpen.png",
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false
        })
      ]
    }
  }
}