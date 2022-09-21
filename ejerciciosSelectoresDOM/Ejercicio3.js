const nombre = document.querySelector('[name = "firstname"]');
nombre.value = 'Florian';

const favDay = document.querySelector('[name = "fav_day"]');
favDay.querySelectorAll('option')[2].setAttribute('selected', 'selected');

