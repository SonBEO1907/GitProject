let products = ["Product1", "Product2", "Product3", "Product4"];

function renderTable(){
    let str = "";
    for (let i = 0; i < products.length; i++){
        str += 
        `
        <tr>
            <td> ${i} </td>
            <td> ${products[i]}</td>
            <td> 
                <button onclick="updateEdit(${i})">Update</button>
            </td>
            <td> 
                <button onclick="deleteProduct(${i})">Delete</button>
            </td>
        </tr>
        `;
    }
    document.getElementById("table").innerHTML = str;
}

function addProduct(){
    let input = document.getElementById("addNewProduct");
    let data = input.value.trim();

    if (data !== ""){
        products.push(data);
        input.value = "";
        alert("Product Added");
        renderTable();
    }
}

function updateEdit(index){
    let data = prompt("Update Data:").trim();
    if (data !== ""){
        products[index] = data;
        renderTable();
    }
}

function deleteProduct(index){
    if (confirm("Delete?")){
        products.splice(index,1);
        renderTable();
    }
}

renderTable();