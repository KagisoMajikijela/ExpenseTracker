
const btnaddexpense=document.getElementById('btn-add-expense')
btnaddexpense.addEventListener('click',GetInput)

let expenses=[];

let Total=0
//function to get and update the Total
 function getTotal(){
    const amount=expenses.forEach(el=>{
        Total+el.price 
        return Total
    })
    console.log(amount)
    console.log(Total)

    return Total
}


//function to get the user inputs
function GetInput(){
    //getting user inputs
    const txtname=document.getElementById('txt-name').value
    const txtprice=document.getElementById('txt-price').value
    const txtdescription=document.getElementById('txt-description').value
    const cmbfilter=document.getElementById('cmb-filter')
    Total=txtprice

    //array to store User inputs
    expenses.push({name:txtname,price:Number(txtprice),description:txtdescription})

    // console.log(expenses)

    //Calling outer funtions
    display()
    getTotal()
}


//functon to display expenses inside the array of objects
function display(){
  const ul=document.querySelector('.items')
  //Clear dataDuplication when rendering to the UI
  ul.textContent=""
  console.log(ul)
  expenses.forEach((el)=>{
       const newli=document.createElement('li');
       newli.classList.add('list-style')
        // newli.style.borderBottom="1.5px solid black";
       newli.textContent=(`Expense name: ${el.name} 
                           Expense price:R${el.price}
                           Expense description:${el.description}`)
       ul.append(newli)
  })
}

