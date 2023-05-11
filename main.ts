input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.showString("z")
    basic.showNumber(input.acceleration(Dimension.Z))
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showString("x")
        basic.showNumber(input.acceleration(Dimension.X))
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        basic.showString("y")
        basic.showNumber(input.acceleration(Dimension.Y))
    }
})
