var grid = document.getElementById('grid');
var list = document.getElementById('list');

var switchToGrid = document.getElementById('grid-style');
var switchToList = document.getElementById('list-style');


//pseudocode:
// if i click the grid icon, i will switch to the grid-style stylesheet
// if i click the list icon, i will switch to the list-style stylesheet
// http://stackoverflow.com/questions/19844545/replacing-css-file-on-the-fly-and-apply-the-new-style-to-the-page


list.addEventListener('click', function() { // when the user clicks the list icon
  // alert("This Also Works");
  switchToList.disabled = false;
  switchToGrid.disabled = true;
});

grid.addEventListener('click', function() { // when the user clicks the grid icon
  // alert("This Works");
  switchToGrid.disabled = false;
  switchToList.disabled = true;
});
