input.onButtonPressed(Button.A, function () {
    suma = suma + 1
    basic.showNumber(suma)
})
input.onButtonPressed(Button.AB, function () {
    texto = "adios"
    basic.showString(texto)
})
input.onButtonPressed(Button.B, function () {
    resta = resta - 1
    basic.showNumber(resta)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    texto = "hola"
    basic.showString(texto)
})
let resta = 0
let suma = 0
let texto = ""
texto = "hola"
suma = 1
resta = 10
