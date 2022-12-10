let yourNumber = [255, 5000, 6, 7, 8];

const sort = (yourNumber) => {
  let newArr = [];
  let newArr1 = [];
  for (let key of yourNumber) {
    newArr.push(key.toString(32));
  }

  //   console.log(newArr);

  //   for (let key of newArr) {
  //     newArr1.push(parseInt(key, 32));
  //   }
  yourNumber = [...newArr];
  console.log(yourNumber);
  //   console.log(newArr);
  //   return yourNumber;
};

// console.log(parseInt((100).toString(16), 16));

sort(yourNumber);
console.log(yourNumber);
