const seats = document.querySelectorAll('.seat');
const maxClicks = 4;
let titleCount = 1;
let totalPrice = 0;
for( let index = 0; index < seats.length; index++ ){
    const seat = seats[index];
     //console.log(seat);
    seat.addEventListener("click", function(){
    if (!seat.classList.contains('disabled')) {
        if (titleCount <= maxClicks) {
            seat.style.backgroundColor = '#1DD100';
        //// for get the name of the seat
        const title = seat.querySelector('h5').innerText;
        //console.log(title);
        const seatName = document.getElementById('seat-name');
        const p = document.createElement('p');
        p.innerText = title;
        seatName.appendChild(p);
        titleCount++;
          if( titleCount > 5){
            seat.classList.add('disabled');
            alert('You have selected the maximum number of seats.');
        }

        ///for get seat type
        const seatType = document.getElementById('seat-type');
        const seatValue= document.createElement('p');
        seatValue.innerText = "Economy";
        seatType.appendChild(seatValue);
        
        /// for get seat price
        const seatPrice = document.getElementById('seat-price');
        const seatPriceValue = document.createElement('p');
        seatPriceValue.innerText = 550;
        const price = parseFloat(seatPrice.appendChild(seatPriceValue).innerText);

        /// calculate price
        totalPrice += price;
        // console.log(totalPrice);

        document.getElementById('total-price').innerText = totalPrice.toFixed(2);
        
        

        /// calculate Grand total
       

        document.getElementById('grandTotal-price').innerText = totalPrice.toFixed(2);


        /// Total Seat select
         const seatCountElement = document.getElementById('seat-count');
        const seatCount = seatCountElement.innerText;
        const totalSeatSelect = parseInt(seatCount);

        //2. increase the score by 1
        const sumOfSeat = totalSeatSelect + 1;

        console.log("seat count",sumOfSeat)
         //3.show the updated score
        seatCountElement.innerText = sumOfSeat;

        /// left seat number
        
        const seatLeftElement = document.getElementById('seat-left');
        const seatLeft = seatLeftElement.innerText;
        const totalSeatLeft = parseInt(seatLeft);

        //2. minus the selected seat 
        const totalLeftSeat = totalSeatLeft - 1;

        console.log("seat count", totalLeftSeat)
         //3.show the updated score
         seatLeftElement.innerText = totalLeftSeat;
    }else {
        alert('You have already selected the maximum number of seats.');
    }
    }else {
        alert('Seat already selected!');
    }

    // Prevent double-clicking on the same seat
    seat.removeEventListener('click', arguments.callee); 
    });
}
const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function(){
    const couponElementBody = document.getElementById('input-field');
    const couponElements = document.getElementById('input-field').value;
    // console.log(couponElements);
   
    if(totalPrice >= 550){
        if(couponElements == "NEW15"  ){
            document.getElementById('apply-btn').classList.add("hidden");
            couponElementBody.classList.add("hidden");
            //discount calculation
            const discountElement = document.getElementById('discount-price');
            const discountAmount = totalPrice * 0.15;
            // discountElement.innerText ="Bdt:" + discountAmount.toFixed(2);

            // rest total calculation

            const restTotal = document.getElementById('total');
            restTotal.innerText ="Bdt" +" : " + (totalPrice - discountAmount).toFixed(2);
            document.getElementById('input-field').value = "";
        } else if(couponElements == "Couple 20"){
            document.getElementById('apply-btn').classList.add("hidden");
            couponElementBody.classList.add("hidden");
            //discount calculation
            const discountElement = document.getElementById('discount-price');
            const discountAmount = totalPrice * 0.20;
            // discountElement.innerText ="Bdt:" + discountAmount.toFixed(2);

            // rest total calculation

            const restTotal = document.getElementById('total');
            restTotal.innerText ="Bdt" +" : " + (totalPrice - discountAmount).toFixed(2);

            document.getElementById('input-field').value = "";
        }
        else{
            console.log("Invalid Coupon")
        }

    }else{
        alert('Please Buy 1 Tickets!')
    }
   
})
const modalBtn = document.getElementById('next-btn');
    modalBtn.addEventListener('click', function(event){
        
    if(totalPrice >= 550){

    }
        else{
           document.getElementById('modal-body').innerHTML = '';
           document.getElementById('modal-body').innerHTML = `
            <span >Please Buy At Least 1 Tickets!!</span>
            <span class="close-btn" onclick="this.parentElement.remove();">&times;</span>

            `;
                
        }
        
})  
