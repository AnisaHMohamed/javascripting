// const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// // Write a while loop that prints out the contents of ingredients:
// var i=0;
//  while(i < ingredients.length){
//      console.log(ingredients[i]);
//      i++;
// };
// // Write a for loop that prints out the contents of ingredients:
// for (var i = 0; i < ingredients.length;  i++) {
// console.log(ingredients[i]);
// };

// // Write any loop (while or for) that prints out the contents of ingredients backwards:
// for (var i =ingredients.length - 1; i >= 0; i--) {
// console.log(ingredients[i]);
// };

const chooseStations = (stations) => {
  // Code here!
  let final = [];
for (let i = 0; i < stations.length; i++){
  if (stations[i][1] > 20 && (stations[i][2] ==='community centre' || stations[i][2] === 'school' )){
    final.push(stations[i][0]);
  }
}
  console.log(final);
};
  // Remember to return a value!

    const stations = [
      ['Big Bear Donair', 10, 'restaurant'],
      ['Bright Lights Elementary', 50, 'school'],
      ['Moose Mountain Community Centre', 45, 'community centre']
    ];
    chooseStations(stations)