const reverse = function (phrase){
  let  element = '';

  for (let i = phrase.length - 1; i > - 1; i--) {
    element = element + phrase[i];
    
  }
  return element;
}

let word = 'hello anisa';
console.log(reverse(word));