var billAmount = 100.58;
function gratuity(){
    var value = billAmount*0.2;
    return value;
}

function totalWithGrat(amount){
  var totalbill = amount + gratuity();
  return totalbill;
}


console.log("Your total including gratuity is $ " + totalWithGrat(billAmount).toFixed(3));
