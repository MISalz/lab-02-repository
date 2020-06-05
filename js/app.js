'use strict';

let uni_list = [];
let i = 0;

$.ajax('/data/page-1.json').then(data => {
////gets array of images
  console.log('console1')
  uni_list.push(data);
  data.forEach((uni) => {
    let div = $('.img');
    console.log('console2');
    div.find('img').attr('src', uni_list[0][i].image_url);
    console.log('console3');
    // div.appendTo('div');
    console.log('console3.5');
    i++;
  });
  console.log('console4');
});









