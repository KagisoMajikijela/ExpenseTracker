const btnaddexpense=document.getElementById('btn-add-expense')
            btnaddexpense.addEventListener('click',GetInput)
 //Empty array to store data 
let expenses=[];

//function to get and update the Total
 function getTotal(){
    let totalamount=0
    expenses.forEach(el=>{ 
            totalamount+=el.price
    })
    const h2total=document.querySelector('.h2-total')
    h2total.textContent=`Total: R${totalamount.toFixed(2)}`
    return totalamount
}

//function to get the user inputs
function GetInput(){
  try{
    //getting user inputs
    const txtname=document.getElementById('txt-name').value
    const txtprice=Math.round(Number(document.getElementById('txt-price').value))
    const txtdescription=document.getElementById('txt-description').value
    const cmbfilter=document.getElementById('cmb-filter').value

    if(!txtname){
      
      document.getElementById('txt-name').focus()
    }else if(!txtprice||typeof txtprice=='string'){
      alert('Price Value should have a number value')
      document.getElementById('txt-price').focus()
    }else if(!txtdescription){
      alert('Description should have a value')
      document.getElementById('txt-description').focus()
    }
    else{
    //array to store User input
        expenses.push({name:txtname,price:txtprice,description:txtdescription,category:cmbfilter})  
        console.log('success!')  
    //Calling outer funtions
        getTotal()
        display(expenses) 
        ClearInputsfields()
    }
  }catch(error){
    alert(error)
  }
}

//funtion to filter based of category of expense
function FilterByCategory(){
  const FilterVal=document.getElementById('cmb-filter').value
  if(FilterVal=='filter'){
    display(expenses)
  }
  else{
  const filterdData=expenses.filter(el=>el.category==FilterVal)
  display(filterdData)
  }
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
       newli.textContent=(`Name: ${el.name}
                           Price:R${el.price}
                           Expense Description:${el.description}`)
       ul.append(newli)
  })
  console.log(dt)
}

//funtion to clear inputs 
function ClearInputsfields (){
  const name=document.getElementById('txt-name').value=''
  const price=document.getElementById('txt-price').value=''
  const description=document.getElementById('txt-description').value=''
}