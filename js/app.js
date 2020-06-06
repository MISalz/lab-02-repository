'use strict';

let img_list = [];
let i = 0;
let newArrHorn = [];
let newArrKey = [];


$.ajax('/data/page-1.json').then(data => {
  ////gets array of images
  img_list.push(data);

  data.forEach(() => {
    let $imgTemp = $('.imgTemp').clone();
    let url = img_list[0][i].image_url;
    let hornNum = img_list[0][i].horns;
    let keyword = img_list[0][i].keyword;
    let title = img_list[0][i].title;
    let description = img_list[0][i].description;

    $imgTemp.find('header').text(title).appendTo('.pictures');
    $imgTemp.find('img').attr('src', url).removeClass('imgTemp').addClass(keyword).appendTo('.pictures');
    $imgTemp.find('p').text(description).appendTo('.pictures');
    // imgTemp.appendTo('.pictures');

    newArrHorn.push(hornNum);
    newArrKey.push(keyword);

    i++;
  });
  console.log('done');
});







