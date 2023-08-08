enum RadioMessage {
    message1 = 49434,
    one = 43929
}
let Counter = 0
music.setVolume(127)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
basic.showString("IN")
basic.forever(function () {
    basic.showNumber(Counter)
    basic.pause(400)
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(1)
        basic.showString("S")
        basic.pause(100)
        Counter = 1
        if (input.buttonIsPressed(Button.A)) {
            basic.showNumber(2)
            basic.showString("N")
            Counter = 2
            basic.pause(100)
            if (input.buttonIsPressed(Button.A)) {
                basic.showNumber(3)
                basic.showString("T")
                Counter = 3
                basic.pause(100)
                if (input.buttonIsPressed(Button.A)) {
                    basic.showNumber(4)
                    basic.showString("L")
                    Counter = 4
                    basic.pause(100)
                    if (input.buttonIsPressed(Button.A)) {
                        basic.showNumber(5)
                        basic.showString("A")
                        Counter = 5
                        basic.pause(100)
                        if (input.buttonIsPressed(Button.A)) {
                            basic.showNumber(6)
                            basic.showString("X")
                            Counter = 6
                            basic.pause(100)
                            if (input.buttonIsPressed(Button.A)) {
                                basic.showNumber(7)
                                basic.showString("X")
                                Counter = 7
                                basic.pause(100)
                            }
                        }
                    }
                }
            }
        }
        basic.showNumber(Counter)
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
    }
    if (input.buttonIsPressed(Button.B)) {
        if (Counter == 5) {
            basic.showString("A=")
            basic.showNumber(input.acceleration(Dimension.Strength))
            basic.pause(100)
            if (input.buttonIsPressed(Button.AB)) {
                Counter = 0
                basic.clearScreen()
                basic.pause(100)
            }
        } else if (Counter == 3) {
            basic.showString("T=")
            basic.showNumber(input.temperature())
            basic.pause(100)
            if (input.buttonIsPressed(Button.AB)) {
                Counter = 0
                basic.clearScreen()
                basic.pause(100)
            }
        } else if (Counter == 2) {
            basic.showString("N=")
            basic.showNumber(input.compassHeading())
            basic.pause(100)
            if (input.buttonIsPressed(Button.AB)) {
                Counter = 0
                basic.clearScreen()
                basic.pause(100)
            }
        } else if (Counter == 1) {
            basic.showString("S=")
            basic.showNumber(input.soundLevel())
            basic.pause(200)
            if (input.buttonIsPressed(Button.AB)) {
                Counter = 0
                basic.clearScreen()
                basic.pause(200)
            }
        } else if (Counter == 4) {
            basic.showString("L=")
            basic.showNumber(input.lightLevel())
            basic.pause(100)
            if (input.buttonIsPressed(Button.AB)) {
                Counter = 0
                basic.clearScreen()
                basic.pause(100)
            }
        } else if (Counter == 6) {
            basic.showString("Xt")
            radio.setGroup(1)
            for (let index = 0; index < 4; index++) {
                radio.sendMessage(RadioMessage.one)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # . . . .
                    # . . . .
                    # # # . .
                    `)
                basic.pause(100)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . #
                    . . . . #
                    . . # # #
                    `)
                basic.pause(100)
                if (input.buttonIsPressed(Button.AB)) {
                    Counter = 0
                    basic.clearScreen()
                    basic.pause(100)
                }
            }
        } else if (Counter == 7) {
            radio.setGroup(1)
            basic.showString("Xt2")
            basic.pause(100)
            radio.sendNumber(2)
            music.setVolume(127)
            music.play(music.stringPlayable("C5 B E D C E C C ", 120), music.PlaybackMode.UntilDone)
            if (input.buttonIsPressed(Button.AB)) {
                Counter = 0
                basic.clearScreen()
                basic.pause(100)
            }
        }
    }
})
