'use strict';

let contentArr = [];
//// we could put them into an array from the begining
let testArr = $.ajax('/data/page-1.json');
console.log(testArr + 'hey');

let Pictures = (image_url, title, description, keyword, horns) => {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;

  contentArr.push(this);

};

let $imgContainer = testArr
let $imgOnPage = $('.temp')

$.ajax('/data/page-1.json').then(data => {
////gets array of images
  console.log(data);

  data.forEach((pic) => {
    ////each image
    console.log(pic);
    let $createImg = $imgOnPage.clone();

    $createImg.find('img').attr('src', data.image_url);
    $imgContainer.append($createImg);
  });

});



