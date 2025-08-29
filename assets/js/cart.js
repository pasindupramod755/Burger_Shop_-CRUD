console.log("Pasindu");

let dataArrayObj = JSON.parse(localStorage.getItem("cartArray")) || [];
cartUpdate();

function cartUpdate() {
    let cartContainer = document.getElementById("cartLoad");
    cartContainer.innerHTML = "";

    let lastPrice = 0;

    for (let i = 0; i < dataArrayObj.length; i++) {
        let cartItem = document.createElement("div");
        cartItem.innerHTML = `
        <hr class="my-4">
        <div class="row mb-4 d-flex justify-content-between align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2">
                <img src="${dataArrayObj[i].image}" class="img-fluid rounded-3" alt="Product">
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
                <h6 class="mb-0">${dataArrayObj[i].name}</h6>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 class="mb-0">Rs.${dataArrayObj[i].price}.00</h6>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#" class="text-danger" onclick="removeItem(${i}); return false;">
                    <img src="assets/image/trash.svg" alt="Delete" width="25">
                </a>
            </div>
        </div>`;
        cartContainer.appendChild(cartItem);

        lastPrice += dataArrayObj[i].price;
    }

    document.getElementById("totalPrice").innerText = "Rs." + lastPrice + ".00";
    document.getElementById("countItem").innerText = dataArrayObj.length + " Items";
}

function removeItem(index) {
    dataArrayObj.splice(index, 1);
    localStorage.setItem("cartArray", JSON.stringify(dataArrayObj));
    cartUpdate();
}

function buyNow(){
    for (let i = 0; i < dataArrayObj.length; i++) {
       dataArrayObj.splice(i);
       localStorage.setItem("cartArray", JSON.stringify(dataArrayObj));
       alert("🎉 Purchase successful! Thank you for your order.");
    }
    cartUpdate();
}