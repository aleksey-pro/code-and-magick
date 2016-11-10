'use strict';

// Свойства объекта
//
// Свойства объекта создаются в функции-конструкторе
//
// Массив строк pictures: адреса фотографий, которые нужно показать. В этот массив нужно будет передать значения параметров src скриншотов из блока photogallery
// Число activePicture: номер текущей фотографии в галерее
// Ссылки на DOM-элементы:
// элемент галереи overlay-gallery
// элементы переключения фотографии overlay-gallery-control-left и overlay-gallery-control-right
// номер фотографии preview-number-current и количество фотографий preview-number-total
// элемент закрытия галереи overlay-gallery-close
// Методы объекта
//
// Методы объекта должны быть описаны в прототипе, потому что они повторяются для всех объектов, создающихся конструктором Gallery. Методы управляют свойствами объекта.
//
//     show принимает на вход число
// Добавляет обработчики событий DOM-элементам галереи.
//     Показывает фотогалерею, убирая у ее DOM-элемента класс invisible.
//     Вызывает метод setActivePicture, передав в него параметром число, которое было передано параметром в show.
//     hide убирает фотогалерею
// Добавлет DOM-элементу фотогалереи класс invisible.
//     Удаляет обработчики событий, записывая в них значение null.
//     setActivePicture принимает на вход число и записывает его в свойство activePicture. После этого находит в массиве pictures фотографию с нужным индексом, создает для нее DOM-элемент Image с помощью конструктора, записывает ему src нужной фотографии и ставит его в конец блока overlay-gallery-preview. Если в блоке overlay-gallery-preview уже есть фотография, ее нужно предварительно удалить (или воспользоваться методом replaceChild). После этого метод записывает номер показанной фотографии в блок preview-number-current.
//     Обработчики событий
//
// Обработчик события click по элементу gallery-overlay-close, который вызывает метод hide.
//     Обработчик события click по элементам overlay-gallery-control-left и overlay-gallery-control-right, которые показывают, соответственно следующую или предыдущую фотографию из списка вызывая метод setActivePicture с соответствующим параметром. Показ галереи не зацикливается, например, если мы находимся на последней фотографии, при клике на контрол, переключающий на следующую фотографию ничего не происходит.

define(function() {
    var Gallery = function() {
        this.pictures = [];
        this.activePicture = 0;

        this.galleryContainer = document.querySelector('.overlay-gallery');
        this.closeElement = this.galleryContainer.querySelector('.overlay-gallery-close');
        this.leftArrow = this.galleryContainer.querySelector('.overlay-gallery-control-left');
        this.rightArrow = this.galleryContainer.querySelector('.overlay-gallery-control-right');
        this.previewElement = this.galleryContainer.querySelector('.preview-number-current');
        this.totalNumber = this.galleryContainer.querySelector('.preview-number-total');
    };

    Gallery.prototype.show = function(pictures) {
        // if (pictures !== this.galleryPictures) {
        //     this.thumbnailsContainer.innerHTML = '';
        //
        //     this.galleryPictures = pictures;
        //
        //     pictures.forEach(function(pic) {
        //         var pictureElement = new Image();
        //         pictureElement.classList.add('gallery-thumbnails-image');
        //         this.thumbnailsContainer.appendChild(pictureElement);
        //         pictureElement.src = pic;
        //     }, this);
        // }
        //
        this.galleryContainer.classList.remove('invisible');

        var self = this;

        this.closeElement.onclick = function() {
            self.hide();
        };
        this.leftArrow.onclick = function() {
            self.setActivePicture(?);
        };
        this.rightArrow.onclick = function() {
            self.setActivePicture(?);
        };


        // this.setActivePicture(0); передав в него параметром число, которое было передано параметром в show

    };

    Gallery.prototype.hide = function() {
        this.galleryContainer.classList.add('invisible');
        this.closeElement.onclick = null;
    };

    Gallery.prototype.setActivePicture = function(picture) {
        // this.activePicture = picture;
        //
        // var thumbnails = this.thumbnailsContainer.querySelectorAll('img');
        //
        // var currentlyActivePic = this.thumbnailsContainer.querySelector('.active');
        // if (currentlyActivePic) {
        //     currentlyActivePic.classList.remove('active');
        // }
        //
        // thumbnails[picture].classList.add('active');
        // this.previewElement.src = thumbnails[picture].src;
    };

    return new Gallery();
});