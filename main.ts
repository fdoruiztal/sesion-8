input.onButtonPressed(Button.A, function () {
    resta = resta - 1
    basic.showNumber(resta)
})
input.onButtonPressed(Button.AB, function () {
    texto = "adios"
    basic.showString(texto)
})
input.onButtonPressed(Button.B, function () {
    suma = suma + 1
    basic.showNumber(suma)
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
