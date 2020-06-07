'use strict';
// console.log('hey');
let keywordArr = [];
let $dropDown = $('.dropDown')

$dropDown.on('change', filterHorns);


$(document).ready(function(){
  $.ajax('/data/page-1.json').then(data => {
    data.forEach(things =>{
      render(things);

    });
  })
});

function render(object){
  let $imgTemp = $('#imgTemp').clone();


  $($imgTemp).addClass(object.keyword);
  $($imgTemp).append(`<header>${object.title}</header>`);
  $($imgTemp).append(`<img src="${object.image_url}"</img>`);
  $($imgTemp).append(`<p>${object.description}</p>`);
  $('#pictures').append($imgTemp);

  if ((keywordArr.includes(object.keyword) === false)){
    let $dropDown = $('#dropDown');


    keywordArr.push(object.keyword);
    $($dropDown).append(`<option value="${object.keyword}">${object.keyword}</option>`);

  }

}


function filterHorns(){
  let $keyword = $(this).val();
  // if the value of option picked === the cards class... show the matching cards and hide all others.
  if($keyword){
    $('#pictures').hide();
    $(`.${$keyword}`).fadeIn();
  }
  else{
    $('#pictures').show();
  }
  console.log('hey')
}

