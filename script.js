const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.contol_prev');
const next_btn = document.querySelector('.contol_next');

let n = 0;

function changeSlide() {
  imgs.forEach(img => img.style.display = 'none');
  imgs[n].style.display = 'block';
}

changeSlide();

prev_btn.addEventListener('click', () => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});

next_btn.addEventListener('click', () => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});
const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
  item.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
