function processData(input) {
    //Enter your code here
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
function processData(input) {
  //Enter your code here
  input = input.split('\n');

  for (i = 1; i < input.length; i++) {
    var splitWord = input[i].split('');

    var even = '';
    var odd = '';

    for (x = 0; x < splitWord.length; x++) {
      if (x % 2 === 0) {
        even = even + splitWord[x];
      } else {
        odd = odd + splitWord[x];
      }
    }
    console.log(even + ' ' + odd);
  }
}