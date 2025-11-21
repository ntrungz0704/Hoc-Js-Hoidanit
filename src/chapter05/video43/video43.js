//#30 truy cập và cập nhật object
console.log("video 43");

const person = {
  name: "trung",
  age: 19,
};

// set data
person.address = "hcm";
console.log("person before: ", person);

// update data
person.age = 20;
console.log("person: ", person);

delete person.address;
console.log("person after: ", person);
