  // Инициализация карты
        ymaps.ready(init);
 
        function init () {
            
            //Центрирование и выбор масштаба карты
             
                 var myMap = new ymaps.Map('map', {
                    center: [55.6824518, 37.5488007 ], 
                    zoom: 18,
                    controls:['zoomControl'],
                    behaviors:['drag']
                }); 
 
           // Создание своей метки 
                var myPlacemark = new ymaps.Placemark(
                // Координаты метки
                  [55.6824518,37.5488007] , {
                    // Свойства метки
                    hintContent: '<div class="window_market"><div class="market_title">Vibranium</div><div class="market_adress"><span>Адрес:</span>117997, г. Москва, ул. Вавилова 69/7б, офис 912</div><div class="market_adress"><span>Телефон:</span>+7 (495) 232-32-54</div></div>'                //Подсказка при наведении на маркер
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/marker.png',  // картинка иконки
                    iconImageSize: [55, 65],                                      // размеры картинки
                    iconImageOffset: [15, -40]                                   // смещение картинки
                    });









 
                // Добавление метки на карту
                myMap.geoObjects.add(myPlacemark);
        

                //Элементы управления    
                myMap.controls
                // Кнопка изменения масштаба
                    .add('zoomControl')
                    // Список типов карты
                  
                    // Кнопка изменения масштаба - справа
                    .add('smallZoomControl', { right: 5, top: 75 })
                    // Стандартный набор кнопок
               
                    //Линейка масштаба
                
        }


