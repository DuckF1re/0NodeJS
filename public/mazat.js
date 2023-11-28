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