// const a = { b: 1, c: 3 };
// a.d = a;



// const obj = {
//   a: 2,
//   b: {
//     c: 4,
//     g: 'asdf'
//   }
// };

// const obj2 = obj;
// obj2.b.c = 1; // obj1.b.c === 1

// const obj3 = {};

// obj3.a = obj.a;
// obj3.b = obj.b;
// obj3.a = 10; // obj.a === 2
// obj3.b.c = 1; // obj.b.c === 1

// // shallow cloning 
// // Object.assign(target, a, b, c, d, e, f);

// const t = { a: 1, b: 5 };
// Object.assign(t, { c: 1, a: 5 });
// // t.c === 1
// // t.a === 5
// // t.b === 5

// Object.assign({}, t);

// const h = { a: 1, b : 5, d: { hh: 1}, g: function() { return 10; } };
// const cloned = { ...h };

// // deep cloning
// const j = { a: 1, b : 5, d: { hh: 1} };
// const cloned2 = JSON.parse(JSON.stringify(j));