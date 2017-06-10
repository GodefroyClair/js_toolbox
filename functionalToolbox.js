//fold and other functions for arrays and objects
/* globals module: false */

const forEach = (xs, fn) => {
  for (let i = 0; i < xs.length; i++) {
    fn(xs[i]);
  }
};

function reduce(xs, base, combine) {
  let acc = base;
  forEachD(xs, (x) => {
    acc = combine(acc, x);
  });
  return acc;
}

// forEach for dictionnaries
const forEachD = (dic, fn) => {
  Object.keys(dic).forEach(function(key) {
    // console.log("key: " + key);
    fn(key, dic[key]);
  });
};
// acc = {};
// forEachD({'un':1,'deux':2,'trois':3}, (k, i)  => acc[k]=(i+1));
// console.log(acc)



// reduce / fold for dictionnaries
function reduceD(tree, base, combine) {
  let acc = base;
  console.log(tree);
  forEachD(tree, (k, v) => {
    acc = combine(acc, {[k]: v}); // should it be an object or an array ?
  });
  return acc;
}
// console.log(reduceD({a:1, b:2}, [], function toArray(acc, x) {
//	return acc.concat(x[Object.keys(x)[0]]);
// }));


// function flatTree(tree) {
//	flat_tree = reduceD(tree, {}, (acc, o) => {
//		console.log("acc: " + JSON.stringify(acc));
//		console.log("o: " + JSON.stringify(o) + "\n");

//		key = Object.keys(o)[0];
//		val = o[key];
//		console.log(typeof(val))
//		if(typeof(val) === "object"){
//			console.log("test");
//			Object.keys(val).forEach(function(key1) {
//				acc[key1]=val[key1];
//			});
//		}else {
//			// console.log(n);
//			acc[key] = val;
//		}
//		return acc;
//	})
//	return flat_tree
// }
// console.log(flatTree(loremIpsum));



module.exports = {
  forEach:forEach,
  forEachD:forEachD,
  reduce:reduce,
  reduceD:reduceD

}
