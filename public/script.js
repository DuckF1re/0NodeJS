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
}

function ulozto(id) {
    const data = {
            id: id,
            fname: document.getElementById(`${id}.fname`).value,
            lname: document.getElementById(`${id}.lname`).value,
            age: document.getElementById(`${id}.age`).value,
            city: document.getElementById(`${id}.city`).value,
    }
    fetch('/update', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
}