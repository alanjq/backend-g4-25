print("Hola mundo")

saludo = "Hola a Python"

# Los booleanos se declaran con inicial mayúscula
esLunes = False
esMartes = True

print(saludo)

if esLunes:
    # Ejecutamos el código en caso de sí
    print("Hoy es lunes")
    esNoche = True
    if esNoche:
        print("Lunes por la noche")
        # Este if no tiene un else
elif not esLunes and esMartes:
    print("Hoy es martes (elif)")
else:
    # Ejecutamos el código en caso de no
    print("Es fin de semana")
    
