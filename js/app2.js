'use strict';
// console.log('hey');
let keywordArr = [];
let $dropDown = $('#dropDown')

$dropDown.on('change', filter);


$(document).ready(function(){
  $.ajax('/data/page-1.json').then(data => {
    data.forEach(things =>{
      render(things);

    });
  })
});

function render(object){
  let $imgTemp = $('#imgTemp').clone();


  $($imgTemp).addClass(object.keyword).removeAttr('id', 'imgTemp');
  $($imgTemp).append(`<h2>${object.title}</h2>`);
  $($imgTemp).append(`<img src="${object.image_url}"</img>`);
  $($imgTemp).append(`<p>${object.description}</p>`);
  $('#pictures').append($imgTemp);

  if ((keywordArr.includes(object.keyword) === false)){
    let $dropDown = $('#dropDown');


    keywordArr.push(object.keyword);
    $($dropDown).append(`<option value="${object.keyword}">${object.keyword}</option>`);
  }


}



/// if option value clicked === class of card
/// hide all cards then...
/// show all cards with the class of value clicked
/// else show all cards

function filter(){
  let $value = $('option').val();

  $('.card').hide();
  $(`.${$value}`).fadeIn();
}
