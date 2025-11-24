// #37 lắng nghe sự khiện với addEventListener

console.log("video 51");

const element = document.querySelector("#myBtn");

const handleClickBtn = () => {
  console.log("you click a button");
};

element.addEventListener("click", handleClickBtn);

console.log(element);
