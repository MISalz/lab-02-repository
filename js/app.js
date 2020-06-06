'use strict';

let img_list = [];
let i = 0;
let newArrHorn = [];
let newArrKey = [];
let newArr = [];


$.ajax('/data/page-1.json').then(data => {
  ////gets array of images
  img_list.push(data);

  data.forEach(() => {
    let imgTemp = $('.imgTemp').clone();
    let url = img_list[0][i].image_url;
    let hornNum = img_list[0][i].horns;
    let keyword = img_list[0][i].keyword;
    console.log('hey');
    imgTemp.find('img').attr('src', url).addClass(keyword).appendTo('main');
    imgTemp.addClass(hornNum);
    newArrHorn.push(hornNum);
    newArrKey.push(keyword);

    i++;
  });

});

// $('.rhino').





