function getFirstSelector(selector) {
  var element = document.querySelector(selector)
  return element
}

function nestedTarget(target) {
  var item = document.getElementById('nested')
  return item
}

function increaseRankBy(n) {
  const lis = document.getElementsByClassName('.ranked-list')
    for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  
}