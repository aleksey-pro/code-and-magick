'use strict';

define(function() {
  var Gallery = function() {

// Свойства объекта

    this.pictureSection = document.querySelector('.photogallery');
    this.pictures = this.pictureSection.querySelectorAll('a > img');
    this.galleryContainer = document.querySelector('.overlay-gallery');
    this.closeElement = this.galleryContainer.querySelector('.overlay-gallery-close');
    this.leftArrow = this.galleryContainer.querySelector('.overlay-gallery-control-left');
    this.rightArrow = this.galleryContainer.querySelector('.overlay-gallery-control-right');
    this.previewContainer = this.galleryContainer.querySelector('.overlay-gallery-preview');
    this.previewNumber = this.galleryContainer.querySelector('.preview-number-current');
    this.totalNumber = this.galleryContainer.querySelector('.preview-number-total');
  };

// Методы объекта

//show принимает на вход число
  Gallery.prototype.show = function(index) {
//  Показывает фотогалерею, убирая у ее DOM-элемента класс invisible.
    this.galleryContainer.classList.remove('invisible');
//  Вызывает метод setActivePicture, передав в него параметром число,
// которое было передано параметром в show.
    this.setActivePicture(index);
    this.index = index;
// Добавляем обработчики событий DOM-элементам галереи

//hide убирает фотогалерею
    var self = this;

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
//Если в блоке overlay-gallery-preview уже есть фотография, ее нужно предварительно
// удалить (или воспользоваться методом replaceChild).
    this.picture = this.pictures[index];
    if (this.previewContainer.contains(this.picture)) {
      this.previewContainer.removeChild(this.picture);
    }
  };

//setActivePicture принимает на вход число и записывает его в свойство activePicture.
  Gallery.prototype.setActivePicture = function(index) {
    this.activePicture = this.pictures[index];
//После этого находит в массиве pictures фотографию с нужным индексом,
// создает для нее DOM-элемент Image с помощью конструктора, записывает
// ему src нужной фотографии и ставит его в конец блока overlay-gallery-preview.
    pictures.forEach(function(item, indx) {
      if (indx === index) {
        var activePicture = new Image();
        activePicture.src = item.src;
        this.previewContainer.appendChild(activePicture);
        activePicture.height = 300;
        activePicture.width = 300;
      }
    }, this);
//После этого метод записывает номер показанной фотографии в блок preview-number-current.
    this.previewNumber.textContent = index;
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
    this.setActivePicture(index--);
    if (index < 0) {
      this.leftArrow.onclick = null;
    }
  };
  Gallery.prototype.moveright = function() {
    this.setActivePicture(index++);
    if (index = this.totalNumber.textContent) {
      this.rightArrow.onclick = null;
    }
  };

  return Gallery;
});


