let test = document.querySelector('#test');

let questions = [
	{
		text: 'В каком году вышел ES6?',
		answer: '2015',
	},
	{
		text: 'В каком году умер основатель Apple Стив Джобс?',
		answer: '2011',
	},
	{
		text: 'Что упало Ньютону на голову?',
		answer: 'яблоко',
	},
  {
    text: 'Расшифровка JS?',
    answer: 'JavaScript',
  },
  {
    text: 'Сколько в одном килограмме грамм?',
    answer: '1000',
  }
];


for (let question of questions) {
	let div = document.createElement('div');
	test.appendChild(div);
	
	let p = document.createElement('p');
	p.innerHTML = question.text;
	div.appendChild(p);
	
	let input = document.createElement('input');
	input.dataset.answer = question.answer;
	div.appendChild(input);
}

let button = document.querySelector('#button');
button.addEventListener('click', function() {
	let inputs = document.querySelectorAll('#test input');
	
	for (let input of inputs) {
		input.classList.remove('correct');
		input.classList.remove('incorrect');
		
		if (input.value == input.dataset.answer) {
			input.classList.add('correct');
		} else {
			input.classList.add('incorrect');
		}
	}
});