let prev = document.querySelector('.control.prev');
let next = document.querySelector('.control.next');
let listDivImg = document.querySelectorAll('.list-img div');
let imgWrap = document.querySelector('.img-wrap img');

let currentIndex = 0;

function setCurrent(index) {
  currentIndex = index;
  imgWrap.src = listDivImg[currentIndex].querySelector('img').src;

  //remove active
  listDivImg.forEach(item => {
    item.classList.remove('active');
  })

  //set active
  listDivImg[currentIndex].classList.add('active')
}

listDivImg.forEach((image, index) => {
  image.addEventListener('click', () => {
    setCurrent(index)
  })
})

prev.addEventListener('click', () => {
  if(currentIndex == 0) {
    currentIndex = listDivImg.length - 1
  }
  else {
    currentIndex--
  }
  setCurrent(currentIndex)
})

next.addEventListener('click', () => {
  if(currentIndex == listDivImg.length - 1) {
    currentIndex = 0
  }
  else {
    currentIndex++
  }
  setCurrent(currentIndex)
})




