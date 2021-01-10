input.onButtonPressed(Button.A, function () {
    man.move(-1)
})
input.onGesture(Gesture.LogoUp, function () {
    man.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    man.move(1)
})
input.onGesture(Gesture.LogoDown, function () {
    man.change(LedSpriteProperty.Y, -1)
})
function GameOver () {
    // save for restart
    croc1.delete()
    croc2.delete()
    croc3.delete()
    man.delete()
    d.delete()
    h.delete()
    o.delete()
    r.delete()
    r.delete()
    r2.delete()
    music.playTone(932, music.beat(BeatFraction.Whole))
    music.playTone(831, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    Animation = images.createImage(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    Animation.showImage(0)
    Animation = images.createImage(`
        # . . . #
        . # . # .
        . . . . .
        . # . # .
        # . . . #
        `)
    Animation.showImage(0)
    Animation = images.createImage(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    Animation.showImage(0)
    basic.showString("GAME OVER!!!")
    basic.showString("Score:")
    basic.showNumber(score)
}
let Animation: Image = null
let d: game.LedSprite = null
let r2: game.LedSprite = null
let r: game.LedSprite = null
let o: game.LedSprite = null
let h: game.LedSprite = null
let score = 0
let croc3: game.LedSprite = null
let croc2: game.LedSprite = null
let croc1: game.LedSprite = null
let man: game.LedSprite = null
man = game.createSprite(0, 2)
croc1 = game.createSprite(1, 2)
croc2 = game.createSprite(2, 2)
croc3 = game.createSprite(3, 2)
score = 0
h = game.createSprite(4, 0)
o = game.createSprite(4, 1)
r = game.createSprite(4, 2)
r2 = game.createSprite(4, 3)
d = game.createSprite(4, 4)
let speed = 800
let directionCroc1 = 1
let DirectionCroc2 = -1
let DirectionCroc3 = 1
man.set(LedSpriteProperty.Blink, 200)
basic.forever(function () {
    if (man.isTouching(croc1)) {
        GameOver()
    }
    if (man.isTouching(croc2)) {
        GameOver()
    }
    if (man.isTouching(croc3)) {
        GameOver()
    }
    if (man.get(LedSpriteProperty.X) == 4) {
        man.set(LedSpriteProperty.X, 0)
        man.set(LedSpriteProperty.Y, 2)
        score += 1
        music.playTone(587, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
    if (croc1.get(LedSpriteProperty.Y) == 4) {
        croc1.change(LedSpriteProperty.Y, directionCroc1)
        directionCroc1 = -1
    } else if (croc1.get(LedSpriteProperty.Y) == 0) {
        croc1.change(LedSpriteProperty.Y, directionCroc1)
        directionCroc1 = 1
    } else {
        croc1.change(LedSpriteProperty.Y, directionCroc1)
    }
    basic.pause(speed)
    if (croc2.get(LedSpriteProperty.Y) == 4) {
        croc2.change(LedSpriteProperty.Y, DirectionCroc2)
        DirectionCroc2 = -1
    } else if (croc2.get(LedSpriteProperty.Y) == 0) {
        croc2.change(LedSpriteProperty.Y, DirectionCroc2)
        DirectionCroc2 = 1
    } else {
        croc2.change(LedSpriteProperty.Y, DirectionCroc2)
    }
    if (croc3.get(LedSpriteProperty.Y) == 4) {
        croc3.change(LedSpriteProperty.Y, DirectionCroc3)
        DirectionCroc3 = -1
    } else if (croc3.get(LedSpriteProperty.Y) == 0) {
        croc3.change(LedSpriteProperty.Y, DirectionCroc3)
        DirectionCroc3 = 1
    } else {
        croc3.change(LedSpriteProperty.Y, DirectionCroc3)
    }
})
basic.forever(function () {
    if (score == 16) {
        let sprite: game.LedSprite = null
        man.delete()
        sprite.delete()
    }
})
