
// console.log(args[0]);
// let firstLetter = args[0][0];
// let ending = "ay";
// let leftover = args[0].slice(1);
// console.log(leftover+firstLetter+ending)


const translate = (phrase) => {
  let finalString = ""
  for (let index = 0; index < phrase.length; index++) {
    let firstLetter = phrase[index][0];
    let ending = "ay";
    let leftover = phrase[index].slice(1);
    let newWord =  leftover+firstLetter+ending;
    finalString = finalString + " " + newWord;
  }

  return finalString;
}
const args = process.argv.slice(2);;
console.log(args)
console.log(translate(args))