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
    getTotals()
}
//functon to display expenses inside the array of objects
function display(){
  expenses.forEach((el)=>{
        const Divdisplay =document.querySelector('.display')
        const Ulitems=document.querySelector(".items")
        //losing the list point
        const Newli=document.createElement('li')
       //Adding elements to the document()32
        Ulitems.append(Newli)
        // console.log(Divdisplay)
        console.log(Ulitems)
        console.log(Newli)
  })
  
}
//function to calculate total later after fixing element display 
function getTotals(){
  const h2counter=document.querySelector('.h2-total')
  h2counter.textContent=`Total${counter}`
  counter++
  
}