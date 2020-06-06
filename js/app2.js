'use strict';
// console.log('hey');

$(document).ready(function(){
  $.ajax('/data/page-1.json').then(data => {
    data.forEach(things =>{
      render(things);

    });
  })
});


function render(object){
  let $imgTemp = $('#imgTemp').clone();

  $($imgTemp).removeAttr(`id`);
//   console.log('bro');
  $($imgTemp).addClass(object.keyword);
  $($imgTemp).append(`<header>${object.title}</header>`);
  $($imgTemp).append(`<img src="${object.image_url}"</img>`);
  $($imgTemp).append(`<p>${object.description}</p>`);
  $('#pictures').append($imgTemp);
  
  let $list = $('option').clone();
  
  $($list).append(`<option>${object.keyword}</option>`);
    console.log('bro2');
  $('select').append($list);

}


// imgTemp.prototype.dropDown = function {

//     let $list = $('option').clone();
//     let keyword = $(object).val();
//     console.log('bro');
//     $($list).text(object.keyword);
//     console.log('bro2');
//     $('select').append($list);
// }

// dropDown();



