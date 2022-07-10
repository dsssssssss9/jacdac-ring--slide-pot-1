basic.showString("Frank")
modules.led1.setBrightness(56)
basic.forever(function () {
    modules.led1.plotBarGraph(modules.potentiometer1.position(), 100)
})
