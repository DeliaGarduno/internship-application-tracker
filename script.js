console.log("JavaScript connected")

const companyInput=document.getElementById("company")
console.log(companyInput)

const positionInput=document.getElementById("position")
console.log(positionInput)

const dateInput=document.getElementById("date")
console.log(dateInput)

const statusSelect=document.getElementById("status")
console.log(statusSelect)                                                                              

const applicationList=document.getElementById("application-list")
console.log(applicationList)

console.log(companyInput.value)

const applicationForm=document.getElementById("application-form")
console.log(applicationForm)

const errorMessage = document.getElementById("error-message");

applicationForm.addEventListener("submit", function(event){
    event.preventDefault()
    const company=companyInput.value.trim()
    const position=positionInput.value.trim()
    const date=dateInput.value
    const status=statusSelect.value

    console.log(company)
    console.log(position)
    console.log(date)
    console.log(status)

    if (company === "" || position === "" || date === "") {
    errorMessage.textContent = "Please complete all required fields";
    return;
}

    errorMessage.textContent = "";

    const newApplication= document.createElement("li")
    newApplication.textContent=company + " - " + position + " - " + date + " - " + status

    const deleteButton=document.createElement("button")

    deleteButton.textContent="Delete"
    newApplication.appendChild(deleteButton)
    deleteButton.addEventListener("click", function() {
        newApplication.remove()
    })
    applicationList.appendChild(newApplication)

    applicationForm.reset()
    
    console.log("Form submitted")
})
