let Zufall = 0
input.onGesture(Gesture.Shake, function () {
    Zufall = randint(0, 2)
    if (Zufall == 0) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (Zufall == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
    basic.pause(2000)
    basic.clearScreen()
})
