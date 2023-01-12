async function loadData() {
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
    const data= await response.json();
    displayData(data);
    return data;
}
function displayData(data) {
    for (let index = 0; index < data.length; index++) {
        const item = document.createElement("li");
        item.innerText=  data[index].name; 
        document.getElementById("myList").appendChild(item);
        
    }
}
loadData();


