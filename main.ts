basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > 500) {
        basic.showString("Y")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(500)
    } else {
        if (input.acceleration(Dimension.Y) < -500) {
            basic.showString("X")
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            basic.pause(500)
        } else {
            basic.clearScreen()
        }
    }
})
