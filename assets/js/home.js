function buyNow(id) {
    let price = parseFloat(document.getElementById("price"+id.substring(3)).innerText.substring(3));
    let image = document.getElementById("image"+id.substring(3)).src
    console.log(id);
    console.log(price);
    console.log(image);  
}