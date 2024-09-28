//

const arr = [1, 2, 3, 5, 6, 7, 11];

const oddElementRemove = (array) => {
  for (i = 0; i < array.length - 1; i++) {
    if ((array[i] % 2 !== 0) & (array[i + 1] % 2 !== 0)) {
      array.splice(i, 1);
      i--;
    }
  }
};

oddElementRemove(arr);
console.log(arr);
