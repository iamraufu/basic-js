var a = ['Raufu', 'Prezens', 'Eftykhar', 'Rahman'];

var p = a.indexOf('Eftykhar');

console.log(a[1]);

console.log(p);

a.push('Guddu');

console.log(a);

console.log(a.length);

a.shift();
console.log(a);

a.unshift('Raufu');
console.log(a);

var part = a.slice(2, 1);
console.log(part);