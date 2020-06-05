'use strict';

// let contentArr = [];
// //// we could put them into an array from the begining
// let testArr = $.ajax('/data/page-1.json');
// console.log(testArr + 'hey');

// let Pictures = (image_url, title, description, keyword, horns) => {
//   this.image_url = image_url;
//   this.title = title;
//   this.description = description;
//   this.keyword = keyword;
//   this.horns = horns;

//   contentArr.push(this);
// };

// let $imgContainer = $('.img')
// let $imgOnPage = $('.disp_uni')
// let $body = $('div')

let uni_list = [];
let times = 0;

$.ajax('/data/page-1.json').then(data => {
////gets array of images
  console.log('console1')
  uni_list.push(data);
  data.forEach((uni) => {
    ////each image
      console.log('type2');
      let div = $('.img');
      div.find('img').attr('src',uni_list[0][0].image_url);
      //let $$img = $('img');
      //let img = $$img.clone();
      //img.attr('src', uni_list.image_url);
      //console.log('hey bro!');
      $('.img').append(`<div>${div}</div>`);
      times++;
    },
    console.log('console2'),
    // let $createImg = $disp_uni.clone();
    // $createImg.find('.disp_uni').attr('src', uni.image_url);
    // $imgContainer.append($createImg);
    );
    
});









