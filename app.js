var tables = [
    {
        tableId: 1,
        amount: 0.00,
        itemList: []
    },
    {
        tableId: 2,
        amount: 0.00,
        itemList: []
    },
    {
        tableId: 3,
        amount: 0.00,
        itemList: []
    },
    {
        tableId: 4,
        amount: 0.00,
        itemList: []
    },
    {
        tableId: 5,
        amount: 0.00,
        itemList: []
    },
    {
        tableId: 6,
        amount: 0.00,
        itemList: []
    },
    {
        tableId: 7,
        amount: 0.00,
        itemList: []
    },
    {
        tableId: 8,
        amount: 0.00,
        itemList: []
    },
]

function generateTables() {
    for (let i = 0; i < tables.length; i++) {
        let gridElementTable = document.createElement('div');
        gridElementTable.className = "gridElementTable";
        gridElementTable.id = tables[i].tableId;
        gridElementTable.addEventListener('dragenter', function () { dragEnter(event) });
        gridElementTable.addEventListener('dragover', function () { dragOver(event) });
        gridElementTable.addEventListener('dragleave', function () { dragLeave(event) });
        gridElementTable.addEventListener('drop', function () { drop(event) });
        gridElementTable.addEventListener('click', function () { displayBill(this) })
        let tableHead = document.createElement('h2');
        tableHead.className = "tableNo";
        tableHead.innerHTML = `Table-${tables[i].tableId}`;
        gridElementTable.appendChild(tableHead);
        let price = document.createElement('div');
        price.className = "bill";
        price.innerHTML = `Rs. ${tables[i].amount}`;
        price.id = `table${i + 1}amount`;
        gridElementTable.appendChild(price);
        let items = document.createElement('span');
        items.className = "totalItems";
        items.id = `table${i + 1}items`;
        items.innerHTML = `Total Items: ${tables[i].itemList.length}`;
        gridElementTable.appendChild(items);

        document.getElementById("tableGrid").appendChild(gridElementTable);
    }
}

function searchTables() {
    let input, filter, tablenames, a, i, tableGrid, categoryNames;
    input = document.getElementById("tableSearch");
    filter = input.value.toUpperCase();
    tableGrid = document.getElementsByClassName('gridElementTable');
    tablenames = document.getElementsByClassName('tableNo');


    for (i = 0; i < tablenames.length; i++) {
        a = tablenames[i].innerText;
        if (a.toUpperCase().indexOf(filter) > -1) {
            tableGrid[i].style.display = "";
        } else {
            tableGrid[i].style.display = "none";
        }
    }
}

let foodMenu = [
    {
        foodName: "Afghani Soya Chaap",
        price: 219.00,
        foodType: "Starter"
    },
    {
        foodName: "Paneer Tikka Achari",
        price: 249.00,
        foodType: "Starter"
    },
    {
        foodName: "Paneer Tikka Malai",
        price: 249.00,
        foodType: "Starter"
    },
    {
        foodName: "Achari Soya Chaap",
        price: 219.00,
        foodType: "Starter"
    },
    {
        foodName: "Shahi Paneer",
        price: 269.00,
        foodType: "Main Course"
    },
    {
        foodName: "Paneer Lababdar",
        price: 299.00,
        foodType: "Main Course"
    },
    {
        foodName: "Paneer Butter Masala",
        price: 299.00,
        foodType: "Main Course"
    },
    {
        foodName: "Shahi Paneer",
        price: 269.00,
        foodType: "Main Course"
    },
    {
        foodName: "Malai Kofta",
        price: 299.00,
        foodType: "Main Course"
    },
    {
        foodName: "Palak Kofta",
        price: 269.00,
        foodType: "Main Course"
    },
    {
        foodName: "Dal Makhani",
        price: 199.00,
        foodType: "Main Course"
    },
    {
        foodName: "Gulab Jamun(2pcs)",
        price: 60.00,
        foodType: "Deserts"
    },
    {
        foodName: "Ras Malai",
        price: 100.00,
        foodType: "Deserts"
    },
    {
        foodName: "Ice-cream",
        price: 80.00,
        foodType: "Deserts"
    },
    {
        foodName: "Coke",
        price: 40.00,
        foodType: "Beverages"
    },
    {
        foodName: "Sweet Lassi",
        price: 70.00,
        foodType: "Beverages"
    }
];

function generateMenu() {

    for (let i = 0; i < foodMenu.length; i++) {
        let gridElementMenu = document.createElement('div');
        gridElementMenu.addEventListener('dragstart', function () { dragStart(event) });
        gridElementMenu.draggable = "true";
        gridElementMenu.addEventListener('dragend', function () { dragEnd(event) });
        let food = document.createElement('div');
        food.className = "itemName";
        food.innerHTML = foodMenu[i].foodName;
        gridElementMenu.appendChild(food);
        let cost = document.createElement('div');
        cost.className = "price";
        cost.innerHTML = foodMenu[i].price;
        gridElementMenu.appendChild(cost);
        let typeFood = document.createElement('div');
        typeFood.className = "type";
        typeFood.innerHTML = foodMenu[i].foodType;
        gridElementMenu.appendChild(typeFood);
        gridElementMenu.className = `${foodMenu[i].foodName} ${foodMenu[i].type}`;
        gridElementMenu.id = `item-${i}`;
        gridElementMenu.classList.add("gridElementMenu");
        document.getElementById("menuGrid").appendChild(gridElementMenu);
    }
}

function searchFoods() {
    var input, filter, foodnames, a, i, foodGrid, categoryNames;
    input = document.getElementById("foodSearch");
    filter = input.value.toUpperCase();
    foodGrid = document.getElementsByClassName('gridElementMenu');
    categoryNames = document.getElementsByClassName('type');
    foodnames = document.getElementsByClassName('itemName');


    for (i = 0; i < foodnames.length; i++) {
        a = foodnames[i].innerText;
        b = categoryNames[i].innerText;
        if (a.toUpperCase().indexOf(filter) > -1 || b.toUpperCase().indexOf(filter) > -1) {
            foodGrid[i].style.display = "";
        } else {
            foodGrid[i].style.display = "none";
        }
    }
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
    event.target.style.opacity = .5;
    //console.log("DragStart has triggered");
};

function dragEnd(event) {
    event.target.style.opacity = "";
    //console.log("DragEnd has triggered");

};

function dragOver(event) {
    event.preventDefault();
    //console.log("DragOver has triggered");
};

function dragEnter(event) {
    //console.log("DragEnter has triggered");
    if (event.target.className == "gridElementTable") {
        event.target.style.background = "#ced8e8";
    }
};

function dragLeave(event) {
    //console.log("DragLeave has triggered");
    if (event.target.className == "gridElementTable") {
        event.target.style.background = "";
    }
};

function drop(event) {
    event.preventDefault();

    if (event.target.className == "gridElementTable") {
        event.target.style.background = "";
    }
    var data = event.dataTransfer.getData("text");        //item-0,item-1...so on
    //console.log(data);
    let arr = data.split("-");
    //console.log(arr);
    let itemName = arr[0];
    let itemId = arr[1];
    let t_id = event.target.id;                       //table1,table2,table3....so on
    console.log(t_id);
    console.log(foodMenu[itemId].foodName);
    console.log(foodMenu[itemId].price);
    updateItemList(t_id, foodMenu[itemId].foodName, foodMenu[itemId].price);
    updateTable(t_id);
};

//this function is used to update itemList of each table when user dropping any menu
//card over a particular table
function updateItemList(t_id, foodName, price) {

    //To check if the food is present or not in the itemList
    let exists = false;
    for (let i = 0; i < tables[t_id - 1].itemList.length; i++) {
        if (tables[t_id - 1].itemList[i].name == foodName) {
            exists = true;
        }
    }

    //If its present increment the count(No. of servings) of the food
    if (exists == true) {
        for (let i = 0; i < tables[t_id - 1].itemList.length; i++) {
            if (tables[t_id - 1].itemList[i].name == foodName) {
                tables[t_id - 1].itemList[i].count++;
                break;
            }
        }
    }
    //If its not present, push the food with its price and quantity into itemList array
    else {
        var tempObj = {
            name: foodName,
            cost: price,
            count: 1
        }
        tables[t_id - 1].itemList.push(tempObj);
    }
    //console.log(tables[t_id-1].itemList);
}

//this is to update the total amount and total items of a particular table
function updateTable(t_id) {

    let amt = 0;
    let cnt = 0;
    for (let i = 0; i < tables[t_id - 1].itemList.length; i++) {
        amt += (tables[t_id - 1].itemList[i].cost * tables[t_id - 1].itemList[i].count);
        cnt += (tables[t_id - 1].itemList[i].count);
    }
    document.getElementById(`table${t_id}amount`).innerHTML = `Rs. ${amt} `;
    document.getElementById(`table${t_id}items`).innerHTML = `Total Items: ${cnt}`;
}

var visible = false;
var currentId;

//this function is called when i click on a particular table to get the bill of
//that table
function displayBill(ele) {
    console.log(ele);
    if (visible == true) {
        document.getElementById('modal').style.display = "none";
        visible = false;
    } 
    else {
        visible = true;
        document.getElementById('modal').style.display = "block";
        document.getElementById("modalHeading").innerHTML = `Table-${ele.id} | Order Details`;
        let tempid = ele.id;
        currentId = tempid;
        updateBill(tempid);
    }
}

//this function is for updating the bill after adding items to the table
function updateBill(t_id) {
    //console.log(t_id);
    document.getElementById('tableBill').innerHTML = ` <tr >
        <th>S.No</th>
        <th>Item</th>
        <th>Price</th>
        <th>No. of Servings</th>
        <th></th>
    </tr>`
    let mycount = 0;
    for (let i = 0; i < tables[t_id-1].itemList.length; i++) {

        if (tables[t_id - 1].itemList[i].count != 0) {
            document.getElementById('tableBill').innerHTML += `
          <tr>
            <td> ${++mycount} </td>
            <td>${tables[t_id - 1].itemList[i].name}</td>
            <td>${tables[t_id - 1].itemList[i].cost}</td>
            <td>
            <input id="servings" type='number' min='1' max='8' value = '${tables[t_id - 1].itemList[i].count}' onchange='updateValue(${t_id},${i},this)'></td>
            <td><button style="float: right;" onclick="deleteItem(${t_id},${i})" > <i class="fa fa-trash"></i> </button></td>
          </tr>
          `
        }
    }
    let total = 0;
    for (let i = 0; i < tables[t_id - 1].itemList.length; i++) {
        total += (tables[t_id - 1].itemList[i].count * tables[t_id - 1].itemList[i].cost);
    }
    console.log(total);
    document.getElementById('displaytotal').innerHTML = total;
    updateTable(t_id)
}

//this function will be called when someone click on generate bill button
function generateBill() {
    alert("Bill generated : ) \nThanks for visiting!!!");
    clearTable();
}

//this function will called when we clear session or after generating the bill
function clearTable() {
    //console.log(currentId + "clearTable called");

    tables[currentId - 1].itemList = [];
    document.getElementById(`table${currentId}amount`).innerHTML = `Rs. 0 `;
    document.getElementById(`table${currentId}items`).innerHTML = `Total Items: 0`;
    updateBill(currentId);
}

// his function will be called when someone increses or decreses in the count of no of servings
function updateValue(t_id, index, ev) {
    console.log(ev);
    tables[t_id - 1].itemList[index].count = parseInt(ev.value);
    updateBill(t_id);
}

//this function will be called if someone wants to remove particular dish from the order
function deleteItem(t_id, index) {
    //console.log(index);
    tables[t_id - 1].itemList[index] = {
        name: "name",
        cost: 0,
        count: 0,
    };
    updateBill(t_id);
}