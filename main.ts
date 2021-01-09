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
let speed = 1000
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
    if (man.isTouching(h)) {
        score += 1
        man.set(LedSpriteProperty.X, 0)
        speed += -75
    }
    if (man.isTouching(o)) {
        score += 1
        man.set(LedSpriteProperty.X, 0)
        speed += -75
    }
    if (man.isTouching(r)) {
        score += 1
        man.set(LedSpriteProperty.X, 0)
        speed += -75
    }
    if (man.isTouching(r2)) {
        score += 1
        man.set(LedSpriteProperty.X, 0)
        speed += -75
    }
    if (man.isTouching(d)) {
        score += 1
        man.set(LedSpriteProperty.X, 0)
        speed += -500
    }
})
basic.forever(function () {
    croc1.set(LedSpriteProperty.Y, randint(0, 5))
    basic.pause(speed)
    croc2.set(LedSpriteProperty.Y, randint(0, 5))
    basic.pause(speed)
    croc3.set(LedSpriteProperty.Y, randint(0, 5))
})
