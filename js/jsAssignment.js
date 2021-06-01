// Create html for product info
function getFields(){
var div = document.createElement('DIV');
    div.innerHTML = '<label>Product Name :</label><input id="productName' + cnt + '" name="productName' + '' + '" type="text" class="productName" placeholder="Enter product title" />' +
                    '<label>Product Unit price :</label><input id="unitPrice'  + cnt + '" name="unitPrice' + '' + '" type="number" class="unitPrice" placeholder="Enter unit price" />' +
                    '<label>Product Quantity :</label><input id="quantity' + cnt + '" name="quantity' + '' + '" type="number" class="quantity" placeholder="Enter the product quantity" />' +
                    '<input style="float: right; margin: 10px;" id="' + cnt + '" type="button" ' + 'value="Remove" onclick="deleteFile(this)" />';
    div.style.paddingTop = "50px";
    document.getElementById("uploadControls").appendChild(div);
    cnt++;
    buttonText();
}

var cnt = 0;

// Remove product info
function deleteFile(div) {
    let unitRemove = document.getElementById("unitPrice"+div.id).value;
    let quantityRemove = document.getElementById("quantity"+div.id).value;
    let totalRemove =  unitRemove * quantityRemove;
    // remove from the grand amount
    var n = document.getElementById("totalSum").innerText ;
    // console.log(n - totalRemove);
    document.getElementById("totalSum").innerHTML = n - totalRemove;
    document.getElementById("uploadControls").removeChild(div.parentNode);
    cnt--;
    buttonText();
}

// Change Text & Calculate Total Button
function buttonText() {
    if (cnt > 0) {
      document.getElementById("action").style.display = "block";
      document.getElementById("updateText").textContent = 'Add Another Prodcut';
    } else {
      document.getElementById("action").style.display = "none";
      document.getElementById("updateText").textContent = 'Add a new Product';
      document.getElementById("totalSum").innerHTML = "0";
    }
}
// clear the html
function clearAll(){
  document.getElementById("uploadControls").innerHTML = "";
  document.getElementById("updateText").textContent = 'Add a new Product';
  document.getElementById("action").style.display = "none";
  document.getElementById("totalSum").innerHTML = "0";
}
// get per unit & price of product
document.getElementById('action').addEventListener('click', function(){
  var unit = [];
  var price = [];
  var unitPrice = [];
  document.querySelectorAll('.unitPrice').forEach(function(el){
    unit.push(el.value);
  });
  document.querySelectorAll('.quantity').forEach(function(a){
    price.push(a.value);
  });
  // sum of units
  for (let index = 0; index < unit.length; index++) {
    unitPrice.push(unit[index] * price[index]);
  }
  // grand = unit * price
  var grandTotal = unitPrice.reduce((a, b) => a + b, 0);
  document.getElementById("totalSum").innerHTML = grandTotal;
});
