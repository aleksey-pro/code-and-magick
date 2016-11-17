'use strict';

define(function() {
  var Gallery = function(sources) {

// Свойства объекта
    this.galleryContainer = document.querySelector('.overlay-gallery');
    this.closeElement = this.galleryContainer.querySelector('.overlay-gallery-close');
    this.leftArrow = this.galleryContainer.querySelector('.overlay-gallery-control-left');
    this.rightArrow = this.galleryContainer.querySelector('.overlay-gallery-control-right');
    this.pictures = this.galleryContainer.querySelector('.overlay-gallery-preview');
    this.previewNumber = this.galleryContainer.querySelector('.preview-number-current');
    this.totalNumber = this.galleryContainer.querySelector('.preview-number-total');

    this.pictures.src = sources;
  };

// Методы объекта

//show принимает на вход число
  Gallery.prototype.show = function(index) {
    this.index = index;
//  Показывает фотогалерею, убирая у ее DOM-элемента класс invisible.
    this.galleryContainer.classList.remove('invisible');
//  Вызывает метод setActivePicture, передав в него параметром число,
// которое было передано параметром в show.
    this.setActivePicture(index);

// Добавляем обработчики событий DOM-элементам галереи
    var self = this;
//hide убирает фотогалерею
    this.closeElement.onclick = function() {
      self.hide();
    };
//перелистывание
    this.leftArrow.onclick = function() {
      self.moveleft();
    };
    this.rightArrow.onclick = function() {
      self.moveright();
    };
  };

//setActivePicture принимает на вход число и записывает его в свойство activePicture.
  Gallery.prototype.setActivePicture = function(index) {
    this.activePicture = this.pictures[index];
//Если в блоке overlay-gallery-preview уже есть фотография, ее нужно предварительно
// удалить (или воспользоваться методом replaceChild).
    if (this.activePicture) {
      this.activePicture.parentNode.removeChild(this.activePicture);
    }
//После этого находит в массиве pictures фотографию с нужным индексом,
// создает для нее DOM-элемент Image с помощью конструктора, записывает
// ему src нужной фотографии и ставит его в конец блока overlay-gallery-preview.
    //this.index = Object.keys(this.pictures); может еще надо приветси индексы в числа? Так как метод выводит строки.
    Array.prototype.forEach.call(this.pictures, function(item, indx) {
      if (indx === this.index) {
        this.activePicture = new Image();
        this.activePicture.src = item.src;
        this.pictures.appendChild(this.activePicture);
        this.activePicture.height = 300;
        this.activePicture.width = 300;
//После этого метод записывает номер показанной фотографии в блок preview-number-current.
        this.previewNumber.textContent = indx;
      }
    }, this);
  };

//     Обработчики событий

// Обработчик события click по элементу gallery-overlay-close, который вызывает метод hide.
  Gallery.prototype.hide = function() {
    this.galleryContainer.classList.add('invisible');
    this.closeElement.onclick = null;
    this.leftArrow.onclick = null;
    this.rightArrow.onclick = null;
  };

//     Обработчик события click по элементам overlay-gallery-control-left
// и overlay-gallery-control-right, которые показывают, соответственно
// следующую или предыдущую фотографию из списка вызывая метод setActivePicture
// с соответствующим параметром. Показ галереи не зацикливается, например, если
// мы находимся на последней фотографии, при клике на контрол, переключающий
// на следующую фотографию ничего не происходит.
  Gallery.prototype.moveleft = function() {
    this.setActivePicture(this.index--);
    if (this.index < 0) {
      this.leftArrow.onclick = null;
    }
  };
  Gallery.prototype.moveright = function() {
    this.setActivePicture(this.index++);
    if (this.index === this.totalNumber.textContent) {
      this.rightArrow.onclick = null;
    }
  };
  return Gallery;
});
