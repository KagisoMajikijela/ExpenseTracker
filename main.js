
const btnaddexpense=document.getElementById('btn-add-expense')
            btnaddexpense.addEventListener('click',GetInput)
 //Empty ary for data 
let expenses=[];

//function to get and update the Total
 function getTotal(){
    let totalamount=0
    expenses.forEach(el=>{ 
            totalamount+=el.price
            return totalamount 
    })
    const h2total=document.querySelector('.h2-total')
    h2total.textContent=`Total: R${totalamount}`
    return totalamount
}

//function to get the user inputs
function GetInput(){
    //getting user inputs
    const txtname=document.getElementById('txt-name').value
    const txtprice=parseInt(document.getElementById('txt-price').value)
    const txtdescription=document.getElementById('txt-description').value
    const cmbfilter=document.getElementById('cmb-filter').value

    //array to store User input
    expenses.push({name:txtname,price:txtprice,description:txtdescription,category:cmbfilter})
    //function to clear fileds working data recieved
    function ClearFields(name,price,description){
      console.log(name,price,description)
    }
    //Calling outer funtions

    ClearFields(txtname,txtprice,txtdescription)
    display(expenses)  
    getTotal()
   return cmbfilter
}

//funtion to filter based of category of expense
function FilterByCategory(){
    const arrdata=expenses.filter(el=>el.category==`${GetInput()}`)
    console.log(arrdata)

  return  display(arrdata)
}

//functon to display expenses inside the array of objects
function display(dt){
  const ul=document.querySelector('.items')
  //Clear dataDuplication when rendering to the UI
  ul.textContent=""
  //looping through each element to display
  dt.forEach((el)=>{
       const newli=document.createElement('li');
       newli.classList.add('list-style')
       newli.textContent=(`Expense Name: ${el.name} 
                           Expense Price:R${el.price}
                           Expense Description:${el.description}`)
       ul.append(newli)
  })
}