//SET SOME GLOBAL VARIABLES
var list = document.getElementById('list');
var listItems = list.children;
var addInput = document.getElementById('addInput');
var addBtn = document.getElementById('addBtn');

// CREATE THE BUTTONS FOR THE LIST ITEMS
function addListItemButtons(li) {
  var remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
  var down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);
	var up = document.createElement('BUTTON');
  up.className = 'up';
  up.textContent ='Up';
  li.appendChild(up);
}

//ADD THE BUTTONS TO THE DEFAULT LIST ITEMS
for (var i = 0; i < listItems.length; i++) {
	addListItemButtons(listItems[i]);
}

//ADD NEW ITEMS TO THE LIST
addBtn.addEventListener('click', function() {
  if (addInput.value !== "") {
	var li = document.createElement('li');
  li.textContent = addInput.value;
  addListItemButtons(li);
  list.appendChild(li);
  addInput.value = "";
} else {
  alert("Please make a valid entry");
}
}, false);

//ADD THE BUTTONS TO THE NEWLY ADDED LIST ITEMS
list.addEventListener('click', function(e) {
	if (e.target.tagName === 'BUTTON') {
    if (e.target.className === 'up') {
    	var li = e.target.parentNode;
      var prevLi = li.previousElementSibling;
      var ul = li.parentNode;
      if (prevLi) {
      	ul.insertBefore(li, prevLi);
      }
    }
    if (e.target.className === 'down') {
    	var li = e.target.parentNode;
      var nextLi = li.nextElementSibling;
      var ul = li.parentNode;
      if (nextLi) {
      	ul.insertBefore(nextLi, li);
      }
    }
    if (e.target.className === 'remove') {
    	var li = e.target.parentNode;
      var ul = li.parentNode;
      ul.removeChild(li);
    }
  }
});
