document.querySelector('#add').addEventListener("click", () => {
  let input = document.querySelector('#add-input').value;
  if (input.trim() !== "") {
    let listItem = document.createElement('li'); 

    let task = document.createElement('input');
    task.type = "checkbox";

    let label = document.createElement('label');
    label.textContent = input;

    listItem.appendChild(task);
    listItem.appendChild(label);

    // Add cross element
    let cross = document.createElement('span');
    cross.textContent = 'x';
    cross.classList.add('cross'); // Add a class for styling
    listItem.appendChild(cross);

    document.querySelector('#tasks-list').appendChild(listItem);
    document.querySelector('#add-input').value = "";
  }
});

if (document.querySelector('#tasks-list') !== null) {
  document.querySelector("p").innerHTML = " ";

  // Event Listener for deleting tasks
  document.querySelector('#tasks-list').addEventListener("click", (e) => {
    if (e.target.classList.contains('cross')) {
      e.target.parentElement.remove(); 
    }
  });

  // Create a clear button
  let clearButton = document.createElement('button');
  clearButton.textContent = "Clear All"; 

  // Add event listener to the clear button
  clearButton.addEventListener('click', () => {
    document.querySelector('#tasks-list').innerHTML = "";
    document.querySelector("p").innerHTML = " No task assign yet";
  });

  // Append the clear button to the DOM
  document.querySelector('.add').appendChild(clearButton); 
}

// Add hover effect to show the cross
document.querySelector('#tasks-list').addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.querySelector('.cross').style.visibility = 'visible';
  }
});

document.querySelector('#tasks-list').addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'li') {
    e.target.querySelector('.cross').addEventLisenter('click', () =>{
      remove(li)
    });
  }
});