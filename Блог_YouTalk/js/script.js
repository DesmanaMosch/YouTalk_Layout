const categoryButtons = document.querySelectorAll('.categories__button');

categoryButtons.forEach((button) => {

  button.addEventListener('click', () => {

    categoryButtons.forEach((item) => {
      item.classList.remove('categories__button--active');
    });

    button.classList.add('categories__button--active');

  });

});