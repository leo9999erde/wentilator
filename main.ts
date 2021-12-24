input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . . . #
        . # . # .
        # . # . #
        `)
    for (let index = 0; index < 46666636; index++) {
        music.playMelody("A E B G D F C5 C ", 120)
    }
})
basic.forever(function () {
	
})
