function zipList(data1, data2) {
  const result = [];
  for (let i = 0; i < data1.length; i++) {
    result.push(data1[i], data2[i]);
  }
  return result;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheSimpleWay(data1, data2) {
  return _.flatten(_.zip(data1, data2));
}
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));

/** write a single test for ziplist() that checks that it can merge two lists of length three correctly. */
