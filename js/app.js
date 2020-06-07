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
console.log('fuckthis');
    $imgTemp.find('header').text(title);
    $imgTemp.find('img').attr('src', url).addClass(keyword);
    $imgTemp.find('p').text(description);
    console.log('fuckthis2');
    $('.imgTemp').append($imgTemp);

    newArrHorn.push(hornNum);
    newArrKey.push(keyword);

    i++;
  });
  console.log('done');
});







