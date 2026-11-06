const selectboxes = document.querySelectorAll('.color');
const background = document.querySelector('.body');

selectboxes.forEach((box) => {
  box.addEventListener("click",() => 
    {
      let color = box.dataset.color;
      background.style.backgroundColor = color;
});});
