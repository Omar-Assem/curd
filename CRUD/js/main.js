// t3reef
let ProductName = document.getElementById('Name')
let ProductPrice = document.getElementById('Price')
let ProductCateg = document.getElementById('Categ')
let ProductDesc = document.getElementById('Desc')
let ProductCount = document.getElementById('Count')
let productOBJ = []
let btnAdd = document.getElementById('add')
let btnDelete = document.getElementById('delete')
let total = document.getElementById('total')
let tbody = document.getElementById('tbody')
let btnUpdate = document.getElementById('update')
// error
let error = document.getElementById('error')
// add
if (JSON.parse(localStorage.getItem("STORE"))) {
    productOBJ = JSON.parse(localStorage.getItem("STORE"));
  } else {
    productOBJ = [];
  }
btnAdd.addEventListener('click',add())
// function add(){
//     let product = {
//         name : ProductName.value,
//         price : ProductPrice.value,
//         categ : ProductCateg.value,
//         desc : ProductDesc.value,
//         count : ProductCount.value,
//         total : ProductPrice.value * ProductCount.value
//     }
//     productOBJ.push(product)
   
    
//     console.log(productOBJ[i]);
// }

function addProduct(){
    
    let product = {
        name : ProductName.value,
        price : ProductPrice.value,
        categ : ProductCateg.value,
        desc : ProductDesc.value,
        count : ProductCount.value,
        total : ProductPrice.value * ProductCount.value
        }
        if(product=== ''){
            error.classList.remove('d-none')
            error.classList.add('d-block')
            return
        }
        else{
            productOBJ.push(product)

        }
        
        
        display()
        ClearInputs()
}
// delet
function deleteAll(){
    // productOBJ = []
    productOBJ.slice(i,1)
    display()
    
}
    function Delete(i){
    if(productOBJ[i].count > 1){
        productOBJ[i].count--
        
        productOBJ[i].total = productOBJ[i].price * productOBJ[i].count

    }
    else{
        productOBJ.splice(0)
    }
        display()
    }
    // display
    function display(){
        let data = ``
        for(let i=0 ; i< productOBJ.length ; i++){
            data += `
            <tr>
            <td>${i+1}</td>
            <td >${productOBJ[i].name}</td>
            <td >${productOBJ[i].price}</td>
            <td >${productOBJ[i].categ}</td>
            <td >${productOBJ[i].desc}</td>
            <td >${productOBJ[i].count}</td>
            <td> <h3 class="btn btn-danger" onclick="Delete(${i})">Delete</h3> </td>
            <td>  <h3 class="btn btn-warning" onclick="update(${i})">Update</h3> </td>
            <td >${productOBJ[i].total}</td>
            </tr>`
                ;
        }
        tbody.innerHTML = data
        ClearInputs()
        }
function ClearInputs(){
    ProductName.value = ''
    ProductPrice.value = ''
    ProductCount.value = ''
    ProductCateg.value = ''
    ProductDesc.value = ''

}
function update(){
    let i = productOBJ.indexOf(productOBJ.find(item => item.name === ProductName.value))
    productOBJ[i].name = ProductName.value
    productOBJ[i].price = ProductPrice.value
    productOBJ[i].ProductCateg = ProductCateg.value
    productOBJ[i].ProductDesc = ProductDesc.value

}