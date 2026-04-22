const btnaddexpense=document.getElementById('btn-add-expense')
btnaddexpense.addEventListener('click',GetInput)
  let expenses=[
    ];
let counter=0
function GetInput(){
    //getting user inputs
    const txtname=document.getElementById('txt-name').value
    const txtprice=document.getElementById('txt-price').value
    const txtdescription=document.getElementById('txt-description').value
    const cmbfilter=document.getElementById('cmb-filter')
    //array to store User inputs
    expenses.push({name:txtname,price:txtprice,description:txtdescription})
    // console.log(expenses)
    display()
    // getTotals()
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
      //  newli.style.borderBottom="1.5px solid black";
       newli.textContent=(`Expense name: ${el.name} 
                           Expense price: ${el.price}
                           Expense description:${el.description}`)
       ul.append(newli)
  })
}

//function to calculate total later after fixing element display 
function getTotals(){
  const h2counter=document.querySelector('.h2-total')
  h2counter.textContent=`Total${counter}`
  counter++
  
}