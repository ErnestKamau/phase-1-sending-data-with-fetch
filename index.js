function submitData(userName, userEmail){
    const formData = {
        name: userName, 
        email: userEmail
    }

    const configurationObject = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    }


    return fetch("http://localhost:3000/users", configurationObject)
    .then( (res) => res.json())
    .then( (data) => {
        const body = document.querySelector("body")
        body.innerHTML = `
        <p>Name: ${data.name} </p>
        <p>Email:  ${data.email} </p>
        <p>ID: ${data.id} </p>`
    })
    .catch((error) => {
            document.body.innerHTML = `<p>${error.message}</p>`
        })
}
submitData("Byron Gachagua", "Byron@gmail.com")




