let groceryList = []; 
let addItems = prompt("Do you want to create a grocery list? (y/n):");


if (addItems.toLowerCase() === 'y') {
    let numberOfItems = parseInt(prompt("How many items do you want to register?"));

    
    for (let i = 0; i < numberOfItems; i++) {
        let item = prompt("Enter grocery item " + (i + 1) + ":");
        groceryList.push(item); 
    }

  
    let groceryList_Sort = [...groceryList].sort();  
    let groceryList_Reverse = [...groceryList_Sort].reverse(); 
    
    alert("Grocery List: " + groceryList.join(", "));
    alert("Sorted Grocery List: " + groceryList_Sort.join(", "));
    alert("Reversed Sorted Grocery List: " + groceryList_Reverse.join(", "));
} else {
    alert("No grocery list created.");
}
