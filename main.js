const btnaddexpense=document.getElementById('btn-add-expense').addEventListener('click',addexpense)

function addexpense(){
        const txtname=document.getElementById('txt-name').value
        const txtprice=document.getElementById('txt-price').value
        const filtercmb=document.getElementById('filter-cmb').value
        const price =txtprice
        console.log(price)
        const Newp=document.createElement('p').textContent="Input field should have values"
        if(txtname===""||txtprice==="")
            document.body.append(Newp)
        else{
            const Newli=document.createElement('li')
            Newli.textContent=txtname
            Newli.classList.add('.display')
            document.body.appendChild(Newli)
            console.log(Newli)
        }

        const Newdiv=document.createElement('div')
        const Newul =document.createElement('ul')
        const Newli =document.createElement('li')

        Newli.textContent=txtname

        Newul.classList.add('items')
        Newul.append(Newli)
        Newdiv.appendChild(Newul)
        Newdiv.classList.add('display')


        document.body.append(Newdiv)
        console.log(Newli)
        console.log(Newul)
        console.log(Newdiv)

        const Divtotal=document.querySelector('.calc-container')
        const h2total=document.querySelector('h2-total')

        console.log(h2total)
        console.log(Divtotal)
    }

//I need to fix the total Div section to automatically pickup expense amounts and add them to total amount h2