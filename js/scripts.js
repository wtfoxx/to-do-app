
  function newItem(){

    //javascript
    //1. Adding a new item to the list of items:
  
      //let li = document.createElement("li");
      //as it's a createElement, you need to specify the html markup <li></li>
      let li = $('<li></li>');
  
      //let inputValue = document.getElementById("input").value;
      //as it's an id, you just need to specify with # in the function
      //the .value becomes a new function val()
      let inputValue = $("#input").val();
  
      //let text = document.createTextNode(inputValue);
      //This was already specified in the val() function
  
      //li.appendChild(text);
      li.append(inputValue);
  
  
  
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        //let list = document.querySelector('#list');
        //list.appendChild(li);
        let list = $('#list');
        list.append(li);
      }
  
    //2. Crossing out an item from the list of items:
     /* function crossOut() {
        li.classList.toggle("strike");
      }
  
      li.addEventListener("dblclick",crossOut);*/
      //the function can be specified inside the .on if it won't be used oustide of it
      //addEventListener becomes .on, and classList.toggle becomes toggleClass
      li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
      })
  
    /*3(i). Adding the delete button "X": 
      let crossOutButton = document.createElement("crossOutButton");
      crossOutButton.appendChild(document.createTextNode("X"));
      li.appendChild(crossOutButton);
  
      crossOutButton.addEventListener("click", deleteListItem);*/
      //you still need to specify document.create... 
      let crossOutButton = $('<crossoutbutton></crossoutbutton>');
      crossOutButton.append(document.createTextNode('x'));
      li.append(crossOutButton);
  
      crossOutButton.on('click', deleteListItem);
  
    /*3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
      function deleteListItem(){
        li.classList.add("delete")
      }*/
      function deleteListItem(){
        li.addClass('delete')
      }
  
    //4. Reordering the items: 
      $('#list').sortable();
  
    }