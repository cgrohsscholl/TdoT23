Zufall = 0

def on_forever():
    global Zufall
    Zufall = randint(0, 2)
basic.forever(on_forever)
