function mazat(id){
    const data = {
        "id": id
    }
    fetch("/deleteuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
        
        
    })
    window.location.reload()
}

function ulozto(id) {
    const option = document.getElementById(`${id}.teacher`)
    const data = {
            id: id,
            fname: document.getElementById(`${id}.fname`).value,
            lname: document.getElementById(`${id}.lname`).value,
            age: document.getElementById(`${id}.age`).value,
            city: document.getElementById(`${id}.city`).value,
            Lname: parseInt(option.options[option.selectedIndex].getAttribute('data-id'))
    }
    console.log(data)
    fetch('/update', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
}

function findElementByIdInTable(tableId, elementId) {
  
    var table = document.getElementById(tableId);

    for (var i = 0, row; row = table.rows[i]; i++) {
      for (var j = 0, cell; cell = row.cells[j]; j++) {
        if (cell.id === elementId) {
          console.log('Found element with ID:', elementId);
          return cell;
        }
      }
    }


    console.log('Element with ID not found:', elementId);
    return null;
  }


  var foundElement = findElementByIdInTable('myTable', 'cell3');
  if (foundElement) {
    
    console.log('Text content of found element:', foundElement.textContent);
  }
