class PhotoBatch {
  constructor(quantity, photoSize, finish) {
    this.quantity = quantity;
    this.photoSize = photoSize;
    this.finish = finish;
    this.cost = 0;
  }

  calculateCost(orderIsHomogeneous, totalQuantity) {
    if (this.photoSize == "4x6" && this.finish == "glossy" && totalQuantity > 75 && totalQuantity <= 100 && orderIsHomogeneous) {
        this.cost = (0.10 * this.quantity).toFixed(2);
    } else if (this.photoSize == "4x6" && this.finish == "glossy" && totalQuantity > 50 && totalQuantity <= 75 && orderIsHomogeneous) {
        this.cost = (0.12 * this.quantity).toFixed(2);
    } else if (this.photoSize == "4x6" && this.finish == "glossy" && totalQuantity > 0 && totalQuantity <= 50 && orderIsHomogeneous) {
        this.cost = (0.14 * this.quantity).toFixed(2);
    } else if (this.photoSize == "4x6" && this.finish == "glossy" && !orderIsHomogeneous) {
        this.cost = (0.19 * this.quantity).toFixed(2);
    } else if (this.photoSize == "4x6" && this.finish == "matte" && totalQuantity > 75 && totalQuantity <= 100 && orderIsHomogeneous) {
        this.cost = (0.12 * this.quantity).toFixed(2);
    } else if (this.photoSize == "4x6" && this.finish == "matte" && totalQuantity > 50 && totalQuantity <= 75 && orderIsHomogeneous) {
        this.cost = (0.14 * this.quantity).toFixed(2);
    } else if (this.photoSize == "4x6" && this.finish == "matte" && totalQuantity > 0 && totalQuantity <= 50 && orderIsHomogeneous) {
        this.cost = (0.16 * this.quantity).toFixed(2);
    } else if (this.photoSize == "4x6" && this.finish == "matte" && !orderIsHomogeneous) {
        this.cost = (0.23 * this.quantity).toFixed(2);
    } else if (this.photoSize == "5x7" && this.finish == "glossy" && totalQuantity > 75 && totalQuantity <= 100 && orderIsHomogeneous) {
        this.cost = (0.28 * this.quantity).toFixed(2);
    } else if (this.photoSize == "5x7" && this.finish == "glossy" && totalQuantity > 50 && totalQuantity <= 75 && orderIsHomogeneous) {
        this.cost = (0.31 * this.quantity).toFixed(2);
    } else if (this.photoSize == "5x7" && this.finish == "glossy" && totalQuantity > 0 && totalQuantity <= 50 && orderIsHomogeneous) {
        this.cost = (0.34 * this.quantity).toFixed(2);
    } else if (this.photoSize == "5x7" && this.finish == "glossy" && !orderIsHomogeneous) {
        this.cost = (0.39 * this.quantity).toFixed(2);
    } else if (this.photoSize == "5x7" && this.finish == "matte" && totalQuantity > 75 && totalQuantity <= 100 && orderIsHomogeneous) {
        this.cost = (0.31 * this.quantity).toFixed(2);
    } else if (this.photoSize == "5x7" && this.finish == "matte" && totalQuantity > 50 && totalQuantity <= 75 && orderIsHomogeneous) {
        this.cost = (0.34 * this.quantity).toFixed(2);
    } else if (this.photoSize == "5x7" && this.finish == "matte" && totalQuantity > 0 && totalQuantity <= 50 && orderIsHomogeneous) {
        this.cost = (0.37 * this.quantity).toFixed(2);
    } else if (this.photoSize == "5x7" && this.finish == "matte" && !orderIsHomogeneous) {
        this.cost = (0.45 * this.quantity).toFixed(2);
    } else if (this.photoSize == "8x10" && this.finish == "glossy" && totalQuantity > 75 && totalQuantity <= 100 && orderIsHomogeneous) {
        this.cost = (0.60 * this.quantity).toFixed(2);
    } else if (this.photoSize == "8x10" && this.finish == "glossy" && totalQuantity > 50 && totalQuantity <= 75 && orderIsHomogeneous) {
        this.cost = (0.64 * this.quantity).toFixed(2);
    } else if (this.photoSize == "8x10" && this.finish == "glossy" && totalQuantity > 0 && totalQuantity <= 50 && orderIsHomogeneous) {
        this.cost = (0.68 * this.quantity).toFixed(2);
    } else if (this.photoSize == "8x10" && this.finish == "glossy" && !orderIsHomogeneous) {
        this.cost = (0.79 * this.quantity).toFixed(2);
    } else if (this.photoSize == "8x10" && this.finish == "matte" && totalQuantity > 75 && totalQuantity <= 100 && orderIsHomogeneous) {
        this.cost = (0.64 * this.quantity).toFixed(2);
    } else if (this.photoSize == "8x10" && this.finish == "matte" && totalQuantity > 50 && totalQuantity <= 75 && orderIsHomogeneous) {
        this.cost = (0.68 * this.quantity).toFixed(2);
    } else if (this.photoSize == "8x10" && this.finish == "matte" && totalQuantity > 0 && totalQuantity <= 50 && orderIsHomogeneous) {
        this.cost = (0.72 * this.quantity).toFixed(2);
    } else if (this.photoSize == "8x10" && this.finish == "matte" && !orderIsHomogeneous) {
        this.cost = (0.87 * this.quantity).toFixed(2);
    } else {
        alert("Invalid batch combination " + this.photoSize + ", " + this.finish + ", " + totalQuantity + ", " + orderIsHomogeneous);
    }    
  }
}

class Order {   
    constructor() {
        this.batches = new Array();
        this.processingTime = "next_day";
        this.processingTimeCost = 0.00;
        this.coupon = "";
        this.couponDiscount = 0.00;
        this.totalCost = 0.00;
        this.orderIsHomogeneous = true;
        this.totalQuantity = 0.00;
    }

    calculateCost() {
        var batchTotal = 0.00;        
        if (this.batches.length != 0) {
            this.orderIsHomogeneous = this.batches.every(b => b.photoSize == this.batches[0].photoSize && b.finish == this.batches[0].finish);
            this.totalQuantity = this.batches.map(b => Number(b.quantity)).reduce((a, b) => a + b);
            this.batches.forEach(b => { 
                b.calculateCost(this.orderIsHomogeneous, this.totalQuantity);
                batchTotal += Number(b.cost);
            });      
        }

        if (this.processingTime == "one_hour" && this.totalQuantity > 0 && this.totalQuantity <= 60 && this.orderIsHomogeneous) {
            this.processingTimeCost = 1.00;
        } else if (this.processingTime == "one_hour" && this.totalQuantity > 60 && this.totalQuantity <= 100 && this.orderIsHomogeneous) {
            this.processingTimeCost = 1.50;
        } else if (this.processingTime == "one_hour" && this.totalQuantity > 0 && this.totalQuantity <= 60 && !this.orderIsHomogeneous) {
            this.processingTimeCost = 2.00;
        } else if (this.processingTime == "one_hour" && this.totalQuantity > 60 && this.totalQuantity <= 100 && !this.orderIsHomogeneous) {
            this.processingTimeCost = 2.50;
        } else {            
            // next day
            this.processingTimeCost = 0.00; 
        }

        // Will have been validated upon entry in applyCoupon().
        if (this.coupon == "N56M2") { 
            this.couponDiscount = 2.00;
        }

        var subTotal = Number(batchTotal) + Number(this.processingTimeCost);
        if ((this.coupon == "" || this.coupon == "5% Off") && subTotal > 35.00) {
            this.couponDiscount = (subTotal * 0.05).toFixed(2);
            this.coupon = "5% Off";
        }

        if (this.coupon == "5% Off" && subTotal <= 35.00) {
            this.couponDiscount = 0.00;
            this.coupon = "";
        }

        this.processingTimeCost = this.processingTimeCost.toFixed(2);
        this.totalCost = (subTotal - Number(this.couponDiscount)).toFixed(2);
    }
} 

var order = new Order();

function addBatch() {
    var quantity = document.getElementById("quantity").value;
    var photoSizes = document.getElementById("photoSize");
    var selectedphotoSize = photoSizes.options[photoSizes.selectedIndex].text;
    var finishes = document.getElementById("finish");
    var selectedFinish = finishes.options[finishes.selectedIndex].text;

    var quantityLeft = (100 - this.order.totalQuantity);
    if (quantityLeft == 0) {
        alert("No more photos can be added to this order");
    } else if ((Number(quantity) > quantityLeft)) {
        alert("Total order quantity cannot exceed 100.  New batch must be " + quantityLeft + " or fewer.");
    } else {
        var batch = new PhotoBatch(quantity, selectedphotoSize, selectedFinish);
        this.order.batches.push(batch);
        
        recalculateAndDrawOrder();
    }
}

function setProcessingTime() {
    var times = document.getElementById("time");
    var selectedTime = times.options[times.selectedIndex].value;

    this.order.processingTime = selectedTime;
    
    recalculateAndDrawOrder();
}

function applyCoupon() {
    var coupon = document.getElementById("coupon").value;

    if (coupon != "N56M2") {
        alert("Invalid coupon entered.");
    } else if (this.order.coupon) {
        alert("Coupon already applied, clear order to reapply");
    } else if (coupon == "N56M2" && (!this.order.orderIsHomogeneous || this.order.totalQuantity != 100)) {
        alert("Order must contain 100 of the same type of photo before being applied");
    } else {
        this.order.coupon = coupon;
        
        recalculateAndDrawOrder();
    }
}

function clearOrder() {
    this.order = new Order();

    recalculateAndDrawOrder();
}

function recalculateAndDrawOrder() {
    this.order.calculateCost();

    var innerHTML = 
    "<table class ='table table-striped'>"+  
		 " <thead style='color:white; background-color:#563d7c'><tr> "+
              "<th scope='col'>Quantity</th> "+
              "<th scope='col'>Size</th>  "+
              "<th scope='col'>Finish</th> "+
              "<th scope='col'>Cost</th> "+
            "</tr> "+
			"</thead>"+
			"<tbody>"

    this.order.batches.forEach(b => innerHTML += 
        "<tr>" + 
            "<td scope='row'>" + b.quantity + "</td>" + 
            "<td scope='row'>" + b.photoSize + "</td>" + 
            "<td scope='row'>" + b.finish + "</td>" + 
            "<td scope='row'>$" + b.cost + "</td>" + 
        "</tr>");

    innerHTML += "</tbody></table>" + 
    "</br></br>Processing Cost: $" + this.order.processingTimeCost;

    if (this.order.couponDiscount > 0) { 
        innerHTML += "</br>Discount from coupon (" + this.order.coupon + "): -$" + this.order.couponDiscount;
    }

    innerHTML += "</br></br><h4>Total Cost: $" + this.order.totalCost + "</h4>";

    document.getElementById("order_preview").innerHTML = innerHTML;
}