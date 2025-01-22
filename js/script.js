const button = document.querySelector(".plusbutton");
const input = document.querySelector(".inputbar");
const list = document.querySelector("ol");
// dark mode
const darkMode = document.querySelector(".switch")
const body = document.querySelector("body")

input.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Enter") {
    handleAdd();
  }
});

const handleAdd = (e) => {
  const textToAdd = input.value;

  if (textToAdd.length > 0) {
    const ele = document.createElement("li");
    const text_node = document.createTextNode(textToAdd);

    ele.appendChild(text_node);
    list.appendChild(ele);

    const button = document.createElement("button");
    button.innerHTML = "Done";
    ele.appendChild(button);

    button.addEventListener("click", (e) => {
      ele.remove();
    });

    input.value = ''
  } else {
    window.alert ('Task can not be empty')
  }

};

button.addEventListener("click", handleAdd);


//dark mode
darkMode.addEventListener('click',(e) => {
    body.classList.toggle('dark')
})