function convertedValue(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseInt(textValue);
    return textNumber; 
}

const seatLfet = convertedValue("seat-left");
console.log(seatLfet);

const selectSeat  = convertedValue("select-seat");
console.log(selectSeat);

const totalPrice = convertedValue('total-price');
console.log(totalPrice);

const grandTotalPrice = convertedValue('grand-total-price');
console.log(grandTotalPrice);

const allSeatBtn=document.getElementsByClassName('all-seat-btn');
console.log(allSeatBtn);

for(let seatBtn of allSeatBtn){
    // console.log(seatBtn);
    // console.log(seatBtn.innerText);
    seatBtn.addEventListener('click',function(event){
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.innerText);
        event.target.classList.add('bg-lime-300')
        const seatName = event.target.innerText;
        console.log(seatName);

        const seatDetails = document.getElementById('seat-details');
        const div = document.createElement('div');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const span = document.createElement('span');
        p1.innerText = seatName;
        p2.innerText = 'Economy';
        span.innerText = 550;
        // seatDetails.appendChild(p1);
        // seatDetails.appendChild(p2);
        // seatDetails.appendChild(p3);
        // seatDetails.classList.add('flex-col');

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(span);

        div.classList.add('flex');
        div.classList.add('space-x-10');
        // div.classList.add('flex-col');
        seatDetails.appendChild(div);
        seatDetails.classList.add('flex-col');
        const childNodeeePriceText = seatDetails.childNodes[3].childNodes[2].innerText;
        // console.log(childNodeee);
        const childNodeeePriceNmbr = parseInt(childNodeeePriceText );
        // console.log(childNodeeePriceNmbr,typeof childNodeeePriceNmbr);

        let updateTotalCostNmbr =  updateTotalCost('total-price');

        let sum = updateTotalCostNmbr + childNodeeePriceNmbr;
        document.getElementById('total-price').innerText = sum;
        document.getElementById('grand-total-price').innerText = sum;
    })
}

function updateTotalCost(id){
    const totalPrice = convertedValue(id);
    return totalPrice
    // console.log(totalPrice);
    // const totalPrice = document.getElementById('total-price').innerText;
    // const totalPriceNmbr = parseInt(totalPrice);
    // return totalPriceNmbr;
    // // let sum = totalPriceNmbr + childNodeeePriceNmbr;
    // document.getElementById('total-price').innerText = sum;
    // // console.log(totalPrice);
}

function updateGrandTotal(){
    const grandTotalPrice = convertedValue('grand-total-price');
    const disCountPrice = updateTotalCost() - 100* 0.2;
    const sum =updateTotalCost() - disCountPrice;
    document.getElementById('grand-total-price').innerText = sum;
}
updateGrandTotal();

