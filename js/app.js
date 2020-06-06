'use strict';

let img_list = [];
let i = 0;
// let imgTemp = $('.imgTemp').clone();

$.ajax('/data/page-1.json').then(data => {
////gets array of images
  img_list.push(data);

  data.forEach((hornImgs) => {
    let imgTemp = $('.imgTemp').clone();

    imgTemp.find('img').attr('src', img_list[0][i].image_url).appendTo('main');

    i++;
  });

});





