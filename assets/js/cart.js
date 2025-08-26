console.log("Pasindu");


let dataArrayObj = JSON.parse(localStorage.getItem("dataArray"));
console.log(dataArrayObj.length);
document.getElementById("countItem").innerText = dataArrayObj.length + " Items";
let lastPrice = 0;
cartUpdate();


function cartUpdate() {
    for (let i = 0; i < dataArrayObj.length; i++) {
        let cartItem = document.createElement("div")
        cartItem.innerHTML = `
    <hr class="my-4">
    <div class="row mb-4 d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
            <img src="${dataArrayObj[i].image}" class="img-fluid rounded-3" alt="Cotton T-shirt">
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
            <h6 class="mb-0">${dataArrayObj[i].name}</h6>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                <i class="fas fa-minus"></i>
            </button>

            <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control form-control-sm" />

            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                <i class="fas fa-plus"></i>
            </button>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h6 class="mb-0" id="packgePrice${i}" >Rs.${dataArrayObj[i].price}.00</h6>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#!" class="text-danger"><img src="assets/image/trash.svg" alt="" width="25"></a>
        </div>
    </div>
`
        let newOne = document.getElementById("cartLoad")

        newOne.appendChild(cartItem);
        document.getElementById("totalPrice").innerText = "Rs." + lastPrice + ".00";
        lastPrice = lastPrice + parseInt(document.getElementById("packgePrice" + i).innerText.substring(3));
        console.log(parseInt(document.getElementById("form1").value));
        

    }

}