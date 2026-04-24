
const btnaddexpense=document.getElementById('btn-add-expense')
btnaddexpense.addEventListener('click',GetInput)

let expenses=[];

//function to get and update the Total
 function getTotal(){
    let totalamount=0
    expenses.forEach(el=>{ 
            totalamount+=el.price
            return totalamount 
    })

    const h2total=document.querySelector('.h2-total')
    console.log(h2total)
    h2total.textContent=`Total: R${totalamount}`
    return totalamount
}

//function to get the user inputs
function GetInput(){
    //getting user inputs
    const txtname=document.getElementById('txt-name').value
    const txtprice=Number(document.getElementById('txt-price').value)
    const txtdescription=document.getElementById('txt-description').value
    const cmbfilter=document.getElementById('cmb-filter')
    //reserting Calprit=>>>
    // Total=txtprice

    //array to store User inputs
    expenses.push({name:txtname,price:txtprice,description:txtdescription})
    //Calling outer funtions
    display()
    getTotal()
}

//functon to display expenses inside the array of objects
function display(){
  const ul=document.querySelector('.items')
  //Clear dataDuplication when rendering to the UI
  ul.textContent=""
  //looping through each element to display
  expenses.forEach((el)=>{
       const newli=document.createElement('li');
       newli.classList.add('list-style')
       newli.textContent=(`Expense Name: ${el.name} 
                           Expense Price:R${el.price}
                           Expense Description:${el.description}`)
       ul.append(newli)
  })
}

