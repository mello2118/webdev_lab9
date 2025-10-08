function init(){
  var button = document.getElementById('entrybutton');
  function myEventFunction () {
  var textbox=document.getElementById('entryinput');
  document.getElementById('textoutput').innerHTML = textbox.value;
  alert("Malcolm Sanoria: " + textbox.value);
  }
 
button.addEventListener('click', myEventFunction);

}




window.addEventListener('load', init);
