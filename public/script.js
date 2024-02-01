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

function performSearch() {
  const cislo = $("#searchInput").val()
  console.log($(`tr:not(#${cislo})`))
  $(`tr:not(${cislo})`).each(function() {
    //console.log($(this).attr('id'))
    if ($(this).attr('id') != cislo && $(this).attr('id') != "ignore") $(this).hide()
  })

}
