let color = prompt('Это светофор,укажи цвет:')

if (color == 'зеленый' || color == 'Зеленый') {
    console.log('Можно ехать!')
}else if (color == 'желтый' || color == 'Желтый') {
    console.log('Приготовьтесь')
}else if (color == 'красный' || color == 'Красный') {
    console.log('Остановитесь')
}else {
    console.log('Ошибка: некорректный цвет светофора.')
}