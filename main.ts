let copper_switch = 0
basic.forever(function () {
    copper_switch = pins.digitalReadPin(DigitalPin.P0)
    basic.showNumber(copper_switch)
    if (copper_switch == 1) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
