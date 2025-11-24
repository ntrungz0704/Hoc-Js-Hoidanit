//

console.log("bài tập lab04");

const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const myBtnElement = document.getElementById("myBtn");

myBtnElement.addEventListener("click", () => {
  const username = usernameElement.value;
  const password = passwordElement.value;
  if (username === "admin" && password === "1607") {
    alert("đăng nhập thành công");
    window.location.href = "success.html";
  } else {
    alert("đăng nhập khóa");
    usernameElement.style.borderColor = "red";
    passwordElement.style.borderColor = "red";
  }
});
