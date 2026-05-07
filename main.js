
const btnaddexpense=document.getElementById('btn-add-expense')
btnaddexpense.addEventListener('click',GetInput)
 const btntest=document.getElementById('test')
 btntest.addEventListener('click',FilterByCategory)
let expenses=[];
//function to get and update the Total
 function getTotal(){
    let totalamount=0
    expenses.forEach(el=>{ 
            totalamount+=el.price
            return totalamount 
    })

    const h2total=document.querySelector('.h2-total')
    // console.log(h2total)
    h2total.textContent=`Total: R${totalamount}`
    return totalamount
}

//function to get the user inputs
function GetInput(){
    //getting user inputs
    const txtname=document.getElementById('txt-name').value
    const txtprice=Number(document.getElementById('txt-price').value)
    const txtdescription=document.getElementById('txt-description').value
    const cmbfilter=document.getElementById('cmb-filter').value

    //array to store User input
    expenses.push({name:txtname,price:txtprice,description:txtdescription,category:cmbfilter})
    console.log(expenses)
    //Calling outer funtions
    display()  
    getTotal()
   //FilterByCategory()
}
//Test data
const testarr=[
  {name:"txtname",price:213,description:"description eg",category:"savings"},
  {name:"txtname",price:526,description:"description eg",category:"savings"},
  {name:"txtname",price:567823,description:"description eg",category:"food"},
  {name:"txtname",price:53678,description:"description eg",category:"transport"},
  {name:"txtname",price:563,description:"description eg",category:"needs"},
  {name:"txtname",price:56362,description:"description eg",category:"filter"},
  {name:"txtname",price:20983,description:"description eg",category:"savings"},
]
//funtion to filter based of category of expense
//bug in the filter feature
function FilterByCategory(){
  const Newli=document.createElement('li')
              Newli.classList.add('list-style')
  const Ul=document.querySelector('.items')

  for(i=0;i<expenses.length;i++)
    if(expenses[i].category==='filter'){
      display()
    }
    else if(expenses[i].category==='savings'){
      Ul.textContent=''
      const savings=expenses.filter(el=>el.category==='savings')
      //considering removing the arrow function to filter and pass a full function on the filter method!
      Newli.append(JSON.stringify(`Name:${expenses.name} Price:${expenses.price} Description:${expenses.category}`))
      Ul.append(Newli)
      console.log(`savings${JSON.stringify(savings)}`)
    }
    else if(expenses[i].category==='food'){
      Ul.textContent=''
      const food=expenses.filter(el=>el.category==='food')
      Newli.append(JSON.stringify(food))
      Ul.append(Newli)
      // console.log(`food${JSON.stringify(Ul)}`)
    }
    else if(expenses[i].category==='needs'){
      Ul.textContent=''
      const needs=expenses.filter(el=>el.category==='needs')
      Newli.append(JSON.stringify(needs))
      Ul.append(Newli)
      // console.log(`needs${JSON.stringify(Ul)}`)
    }
    else if(expenses[i].category==='transport'){
      Ul.textContent=''
      const transport=expenses.filter(el=>el.category==='transport')
      Newli.append(JSON.stringify(transport))
      Ul.append(Newli)
      // console.log(`transport${JSON.stringify(Ul)}`)
    }
  //console.log(testarr.filter(el=>el.category==='savings'))
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