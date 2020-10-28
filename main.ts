basic.forever(function () {
    for (let index = 0; index <= 8; index++) {
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                if (x + y == index) {
                    led.plot(4 - x, 4 - y)
                }
            }
        }
        basic.pause(100)
    }
    basic.clearScreen()
})
