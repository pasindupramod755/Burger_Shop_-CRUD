const cartArray = [

]


function buyNow(id) {
    let price = parseFloat(document.getElementById("price" + id.substring(3)).innerText.substring(3));
    let image = document.getElementById("image" + id.substring(3)).src
    let name = document.getElementById("name" + id.substring(3)).innerText
    console.log(id);
    console.log(price);
    console.log(image);
    const addNew = {
        name,
        price,
        image
    }
    cartArray.push(addNew);
    console.log(cartArray);
    const stringifyArray = JSON.stringify(cartArray)
    localStorage.setItem("dataArray", stringifyArray);
    console.log(JSON.parse(localStorage.getItem("dataArray"))[0])
}



