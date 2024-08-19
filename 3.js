const student2 = {
  name: "mobin",
  lastname: "sarvari",
  age: 10,
};

const studentNew = {};
console.log(Object.keys(student2));
console.log(Object.values(student2));

Object.keys(student2).forEach((item) => {
  studentNew[student2[item]] = item;
});

console.log(studentNew);

const sentence =
  "mohsen kmkjkjkmohsuh mohsen jkjkomojmohsen jk mohsens lkdwd mojhse mohsen.";
console.log(sentence.indexOf("mohsen"));
console.log(sentence.split("mohsen"));
console.log(sentence.split("mohsen").length - 1);

console.log(sentence.indexOf("mohsen", 50));
console.log(Boolean(-1));

const numbers = (sentence, word) => {
  let count = 0;
  let offset = 0;
  let position = 0;
  let lengthWord = word.length;
  while (position != -1) {
    position = sentence.indexOf(word, offset);
    count = count + 1;
    offset = position + lengthWord;
  }
  console.log(count - 1);
};

numbers(sentence, "mohsen");
