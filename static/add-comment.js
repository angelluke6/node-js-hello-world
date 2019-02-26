document.getElementById("submit").addEventListener("click", function(event){
   event.preventDefault()   
   var comment =  document.getElementById("message").value
   var root = document.getElementById("root")
   var commentField = document.createElement("p")
   commentField.textContent = comment
   root.appendChild(commentField)
   console.log(root)
   console.log(commentField)
  });