let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            x += 1
            basic.pause(100)
        }
        x = 0
        y += 1
    }
})
basic.forever(function () {
	
})
