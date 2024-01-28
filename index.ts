import LinkedList from './linked-list';

const exampleLL = new LinkedList<number>();
exampleLL.show(); // []
// { data: 1, next: null}
console.log(exampleLL.add(1));

console.log(exampleLL.add(2));
// { data: 1, next: { data: 2, next: null}}

console.log(exampleLL.add(3));
// { data: 1, next: {data: 2, next: { data: 3, next: null }}}

console.log(exampleLL.add(4));
exampleLL.show(); // [1,2,3,4]
exampleLL.insertAt(5, 0);
exampleLL.show(); // [5,1,2,3,4]
exampleLL.insertAt(10, exampleLL.size());
exampleLL.show(); // [5, 1, 2, 3, 4, 10]

try {
  exampleLL.insertAt(6, -1);
} catch (e) {
  console.log(e.message); // Invalid position
}

try {
  exampleLL.insertAt(6, 11);
} catch (e) {
  console.log(e.message); // Invalid position
}

try {
  const linkedList = new LinkedList();
  linkedList.removeAt(2);
} catch (e) {
  console.log(e.message); // LinkedList is empty
}

try {
  const linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.removeAt(5);
} catch (e) {
  console.log(e.message); // Position is undefined
}
