function getFirstSelector(selector) {
  return document.querySelector(selector);

  //accepts a selector and returns the first matching element
}
function nestedTarget() {
  return document.querySelector('#nested .target')
  //getElementById('nested').getElementByClassName('target');
  //pulls a .target out of #nested
}
function increaseRankBy(n) {
  const children = document.getElementById('app').querySelectorAll('.ranked-list li')

  for (let i=0; i < children.length; i++ ){
    //(parseInt(all[i].innerHTML) + n).toString()
    children[i].innerHTML = (parseInt(children[i].innerHTML, 10) + n)

  }
  //parseInt(children[i].innerHTML)
  //ParseInt(n,10)
  //increases the ranks in all of the .ranked-list  by n (parseInt())
}
function deepestChild() {
  const grand = document.getElementById('grand-node').querySelector('div div div div');
  return grand
  //pulls out the most deeply nested child from div #grand-node
  //you can iterate over elements and call querySelector() and querySelectorAll()
}

//HINT1: Your solution for deepestChild() does not need to be totally
//generic; we don't expect it to work in every case. For example, we know that
//div#grand-node has only one node at each level — for this lab, you can solve
//for that case, and not worry about a case where there are sibling nodes.

//HINT2: Remember learning about breadth-first search? A similar technique
//might come in handy here.
