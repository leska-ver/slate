document.addEventListener('DOMContentLoaded', function() {
  //Проверка ошибок console.log("Я не ошибка")

  
  //Смотреть больше товаров gallery//
  const btnMore = document.querySelector('.gallery__span-more');
  const itemsLength = document.querySelectorAll('.gallery__item').length; // кол-во карточек //
  let items = 7 //видимое кол-во карточек 

  btnMore.addEventListener('click', function() {
    items+=2;
    const array = Array.from(document.querySelector('.gallery__list').children);
    const visItems = array.slice(0, items);
    visItems.forEach(function(el) {
      el.classList.add('is-visible')});
    if (visItems.length === itemsLength) {
      btnMore.closest('.gallery__btn').classList.add('gallery__btn_wrapper--hidden');
    }
  });



  //Смотреть больше товаров partners//
  const btnMoreTwo = document.querySelector('.partners__span-more');
  const itemsLengthTwo = document.querySelectorAll('.partners__item').length; // кол-во карточек //
  let itemsTwo = 6; // видимое кол-во карточек //

  btnMoreTwo.addEventListener('click', function() {
    itemsTwo+=6;
    const arrayTwo = Array.from(document.querySelector('.partners__list').children);
    const visItemsTwo = arrayTwo.slice(0, itemsTwo);
    visItemsTwo.forEach(function(el) {
      el.classList.add('is-visibleTwo')});
    if (visItemsTwo.length === itemsLengthTwo) {
        btnMoreTwo.closest('.partners__btn').classList.add('partners__btn_wrapper--hidden');
      }
  });

   

  // Плавный скролл по якорям. В любое место можно кинуть.
  $(function(){
    $('a[href^="#"]').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({scrollTop: $
    (target).offset().top},800);
      return false;
    })
  })
});  