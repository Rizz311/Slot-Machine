var slot = ['img/bar.png', 'img/cherries.png', 'img/gem.jpg', 'img/seven.png', 'img/star.png', 'img/star.png']
var pic = 0
var wallet = 25
var ante = 0
var house = 1000
var small = 1
var big = 5

$(document).ready(function(){
  $('#wallet').text(wallet)
})

$('#handle').on('click', function(){
    $('#handle').attr('src', 'img/handlepull.jpg')
    setTimeout(function(){
      $('#handle').attr('src', 'img/handle.png');
    }, 500)

    var random1 = Math.round(Math.random() *slot.length - 1)
    var random2 = Math.round(Math.random() *slot.length - 1)
    var random3 = Math.round(Math.random() *slot.length - 1)

    $('#display1').attr('src', slot[pic]);
    pic = random1
    $('#display2').attr('src', slot[pic]);
    pic = random2
    $('#display3').attr('src', slot[pic]);
    pic = random3;

    if($('#display1').attr('src') == $('#display2').attr('src') &&
       $('#display1').attr('src') == $('#display3').attr('src')){
       alert('Win!')
       if(ante > 0){
      wallet = wallet + ante * 10;
      $('#wallet').text(wallet)
     }}
    if( $('#display1').attr('src') == 'img/seven.png' &&
        $('#display2').attr('src') == 'img/seven.png' &&
        $('#display3').attr('src') == 'img/seven.png'){
         alert('JACKPOT!!!')
         wallet = wallet + house
         $('#wallet').text(wallet)
       }
       else {
         wallet = wallet - ante
         house = house + ante
         $('#house').text(house)
         $('#wallet').text(wallet)
          }
    if(wallet <= 0){
      alert('Look you\'ve lost all your money and have a gambling problem go home...')
      wallet = 25
      $('#wallet').text(wallet)
    }
})
$('#one').on('click', function(){
  $('#ante').text(small)
  ante = small
})
$('#five').on('click', function(){
  $('#ante').text(big)
  ante = big
})
