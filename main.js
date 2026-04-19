const btnaddexpense=document.getElementById('btn-add-expense').addEventListener('click',addexpense)

function addexpense(){
        const txtname=document.getElementById('txt-name').value
        const txtprice=document.getElementById('txt-price').value
        const filtercmb=document.getElementById('filter-cmb').value

    try {
            const Newp=document.createElement('p').textContent="Input field should have values"
            if(txtname===""||txtprice==="")
                document.body.append(Newp)
            else{
                const Newli=document.createElement('li')
                Newli.textContent=txtname
                Newli.classList.add('.items')
                console.log(Newli)
        }
    } catch (er) {
        console.er('something went wrong')
    }

}