$(function() {
  $("form#word-puzzle").submit(function(event) {
    var sentence = $("input#sentence-input").val();
    var sentenceSplit = sentence.split("");

    for (i = 0; i < sentenceSplit.length; i++) {
      if ( sentenceSplit[i] === 'a' || sentenceSplit[i] === 'e' || sentenceSplit[i] === 'i' || sentenceSplit[i] === 'o' || sentenceSplit[i] === 'u' ) {

      sentenceSplit[i] = "-";
      }
    }

    sentenceSplit = sentenceSplit.join("");



   //   var result = sentenceSplit.replace( vowel, '-');

    // var result = sentenceSplit.map(function(vowels) {
    //   .replace('a', '')
    // });

    // vowels.forEach(function(vowel) {




    //
    //   if ( vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' ) {
    //   var result = sentenceSplit.replace( vowel, '-');
    //   }
    //  });


    // console.log(sentenceArray);

    $('#result').prepend('<li>' + sentenceSplit + '</li>');

    event.preventDefault();
  });
});
