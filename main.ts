radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 505) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
    basic.pause(2000)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("AB")
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(2000)
    basic.pause(100)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        if (receivedString == "B") {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showLeds(`
                . . # . .
                . . . # .
                . . . . #
                . . . # .
                . . # . .
                `)
            basic.pause(100)
            basic.clearScreen()
            basic.pause(2000)
            pins.digitalWritePin(DigitalPin.P1, 0)
        } else {
            if (receivedString == "AB") {
                pins.digitalWritePin(DigitalPin.P2, 1)
                basic.showLeds(`
                    . . # . .
                    . # . # .
                    # . . . #
                    . # . # .
                    . . # . .
                    `)
                basic.pause(100)
                basic.clearScreen()
                pins.digitalWritePin(DigitalPin.P2, 0)
                basic.pause(2000)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        . . # . .
        `)
    basic.pause(2000)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(505)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(200)
    basic.clearScreen()
})
radio.setTransmitPower(7)
radio.setGroup(69)
