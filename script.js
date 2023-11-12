document.getElementById("myButton").addEventListener("click", function() {
    var input = document.getElementById("myInput");
    var text = input.value;
    
    if (text !== "") {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(text));
      document.getElementById("myList").appendChild(li);
      
      input.value = "";
    }
  });


  document.getElementById('myInput').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      var book = document.getElementById('myInput').value;
      document.getElementById("myList").innerHTML += "<li>" + book + "</li>";
      document.getElementById("myInput").value = "";
    }
  });