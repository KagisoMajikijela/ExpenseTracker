const btnaddexpense=document.getElementById('btn-add-expense')
btnaddexpense.addEventListener('click',GetInput)

function GetInput(){
    
    const txtname=document.getElementById('txt-name').value
    const txtprice=document.getElementById('txt-price').value
    const txtdescription=document.getElementById('txt-description')
    const cmbfilter=document.getElementById('cmb-filter')
   
    //array to store User inputs
    let expenses=[
    ];
    
    expenses.push({name:txtname,price:txtprice,description:txtdescription})
    console.log(expenses)
   alert(expenses)
}