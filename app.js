const board = document.querySelector('#board') //получение элемента, в котором будут находиться элементы доски
const colors = ['#FED6BC', '#FFFADD', '#DEF7FE', '#E7ECFF', '#C3FBD8', '#FDEED9', '#F6FFF8', '#B5F2EA'] //массив из цветов
const SQUARES_NUMBER = 500 //количество элементов в доске (квадратов)

//цикл, в котором будут отрисовываться элементы в доске
for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div') //создание "квадратика"
	square.classList.add('square') //добавление стилей элементу

	//слушатель события при наведении крусора на область элемента вызовется функция меняющая цвет
	square.addEventListener('mouseover', () => 
	setColor(square))
	
	//слушатель события при покидании курсора с области элемента вызовется функция меняющая цвет на первоначальный
	square.addEventListener('mouseleave', () => 
	removeColor(square))

	//добавление элемента в элемент доску, содержащий все эелменты "квадратики"
	board.append(square)
}

function setColor(element) {
	const color = getRandomColor() //получение рандомного цвета из массива цветов
	element.style.backgroundColor = color //добавление стиля, меняющий цвет
	element.style.boxShadow = `0 0 2px ${color},  0 0 10px ${color}` //добавление стиля, меняющий тень
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d' //возвращение цвета к первоначальному
	element.style.boxShadow = `0 0 2px black` //возвращение тени к первоначальной

}

//функция, получающая рандомный индекс элемента в массиве цветов
function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}