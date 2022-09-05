def on_button_pressed_a():
    global suma
    suma = suma + 1
    basic.show_number(suma)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global texto
    texto = "adios"
    basic.show_string(texto)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global resta
    resta = resta - 1
    basic.show_number(resta)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global texto
    texto = "hola"
    basic.show_string(texto)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

resta = 0
suma = 0
texto = ""
texto = "hola"
suma = 1
resta = 10