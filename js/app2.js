'use strict';
// console.log('hey');

$(document).ready(function(){
  $.ajax('/data/page-1.json').then(data => {
    data.forEach(things =>{
      render(things);

    });
  })
});

let keywordArr = [];
function render(object){
  let $imgTemp = $('#imgTemp').clone();

  $($imgTemp).removeAttr(`id`);
  console.log('bro');
  $($imgTemp).addClass(object.keyword);
  $($imgTemp).append(`<header>${object.title}</header>`);
  $($imgTemp).append(`<img src="${object.image_url}"</img>`);
  $($imgTemp).append(`<p>${object.description}</p>`);
  $('#pictures').append($imgTemp);

  if ((keywordArr.includes(object.keyword) === false)){
    keywordArr.push(object.keyword)
  }


}

forEach(keywordArr){
  
}