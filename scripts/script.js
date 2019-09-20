{
  // $('p.heroParagraph').click( function(event) {
  //     $(this).html('Select your cat by clicking on the picture ↓');
  //
  //  });

   // $('p.heroParagraph').mouseleave( function(event) {
   //     $(this).html('Learn more');
   //
   //  });
   //
   // $('.picture').click( function(event){
   //   $(this).css('border-color', 'red');
   //   alert("Selected");
   // });

   $('.picture').hover( function(event){
     $(this).css('border-color', 'red');

   });


$('p.heroParagraph').click(function(event){
  $(this).css('color', 'pink');
})

$('#first').click(function(event){
  $(this).attr('src', '/images/cat2.png');
})

$('.picture').mouseover (function(event){

})

}

// var count = function(x,y){
//   return x + y;
// };
//
// var plural = function (singularWords){
//   var pluralWords = [];
//   for (i = 0; i< singularWords.length; i++){
//     pluralWords[i] = singularWords[i] + "s";
//   }
//   return pluralWords;
// };


// function canDrink (age) {
//   if (age>21) {
//     return "you can drink";
//   } else{
//     return "go home!";
//   }
//
// }

// var larger = function (x) {
//   if (x > 5) {
//     return true;
//   } else {
//     return false;
//   }

function add (moneyArray) {
  var total = 0;
  for(i=0; i<moneyArray.length; i++){
    total += moneyArray[i];
  }
  return total;
}
