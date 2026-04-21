const btnaddexpense=document.getElementById('btn-add-expense')
btnaddexpense.addEventListener('click',GetInput)
function GetInput(){
    const txtname=document.getElementById('txt-name').value
    const txtprice=document.getElementById('txt-price').value
    const txtdescription=document.getElementById('txt-description')
   
    //array to store User inputs
    let expenses=[
        {name:""},
        {price:""},
        {description:""}
    ]
    expenses.push(name,txtname)
    // expenses.push(name.txtname)
    // expenses.push(price.txtprice)
    // expenses.push(description.txtdescription)
    // Nexpenses.push(name,NewExpense)
    const NewExpense=[...expenses]
    NewExpense.push([name,"NewExpsne track"])
    console.log(expenses)
    console.log(NewExpense)
}