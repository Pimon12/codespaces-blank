// เพิ่ม animation ให้กับปุ่มเมื่อ hover
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.classList.add('hover');
  });

  button.addEventListener('mouseout', () => {
    button.classList.remove('hover');
  });
});