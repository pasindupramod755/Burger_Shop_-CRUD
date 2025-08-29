function buyNow(id) {

    let index = id.substring(3);


    let price = parseFloat(document.getElementById("price" + index).innerText.substring(3));
    let image = document.getElementById("image" + index).src;
    let name = document.getElementById("name" + index).innerText;


    const addNew = {
        name,
        price,
        image
    };

    let cart = JSON.parse(localStorage.getItem("cartArray") || "[]");
    
    cart.push(addNew);

    localStorage.setItem("cartArray", JSON.stringify(cart));

    alert("Added to Cart ✅");
    console.log(cart);
}

