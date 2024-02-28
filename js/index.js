// alert('hi');

function getConvertedValue(id){
    const textValue = document.getElementById(id).innerText;
    const convertedTextValue = parseInt(textValue);
    return convertedTextValue;
}
const convertedSeatLeft =  getConvertedValue('seat-left');
// console.log(convertedSeatLeft);

const convertSelectSeatCount =  getConvertedValue('select-seat');
// console.log(convertSelectSeatCount);

const convertedTicketUnitPrice =  getConvertedValue('ticket-unit-price');
// console.log(convertedTicketUnitPrice);


const allSeatBtn = document.getElementsByClassName('all-seat-btn');
// console.log(allSeatBtn)

for(const btn of allSeatBtn){
    // console.log(btn);
    btn.addEventListener('click',function(event){
        // console.log(event)
        // console.log(event.target)
        const seatName = event.target.innerText;

        // console.log(seatName)
        // console.log(event.target.parentNode)
        // console.log(event.target.parentNode.parentNode)
        // console.log(event.target.parentNode.parentNode.parentNode)
        // console.log(event.target.parentNode.parentNode.parentNode.childNodes)
        // console.log(event.target.parentNode.parentNode.parentNode.childNodes[1].innerText)
        // console.log(event.target.parentNode.parentNode.parentNode.childNodes[3].innerText)
        // const convertedTicketUnitPrice =  getConvertedValue('ticket-unit-price');
        // console.log(convertedTicketUnitPrice);
        // console.log(seat,convertedTicketUnitPrice);
        
        const seatDetails = document.getElementById('seat-details');

        const div = document.createElement('div');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const span = document.createElement('span');

        p1.innerText = seatName;
        p2.innerText = 'Economy';
        span.innerText = convertedTicketUnitPrice;
        // console.log(typeof convertedTicketUnitPrice)

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(span);

        div.classList.add('flex');
        div.classList.add('space-x-10');

        seatDetails.appendChild(div);
        seatDetails.classList.add('flex-col');
        updateTotalCost(convertedTicketUnitPrice);
        updateGrandTotal();

        // event.target.classList.add('bg-red-600');
        event.target.classList.add('btn-disabled');

        let seatLeft = getConvertedValue('seat-left');
        document.getElementById('seat-left').innerText = seatLeft-1

        let selectSeat = getConvertedValue('select-seat');
        document.getElementById('select-seat').innerText = selectSeat+1;

        let y = selectSeat + 1;
        if(y>=1 && y<4){
            console.log(event.target)
            event.target.classList.remove('btn-success');
            event.target.classList.add('btn-primary');
            event.target.classList.add('btn-disabled');
        }
        else if(y>=4){
            alert('limit shesh r select korien na');
            // event.target.classList.add("cursor-not-allowed");
            event.target.parentNode.parentNode.parentNode.classList.add('btn-disabled');
            const nextBtn = document.getElementById('next-btn');
            console.log(nextBtn);
            nextBtn.classList.add('btn-disabled')
            nextBtn.classList.remove('bg-green-400');
            nextBtn.classList.add('bg-gray-400');
            return;
        }
       
    })
}

function updateTotalCost(ticketValue){
    let totalPrice = getConvertedValue('total-price');
    // console.log(typeof totalPrice,totalPrice)
    let sum = totalPrice + ticketValue;
    // console.log(sum);
    document.getElementById('total-price').innerText = sum;
}

function updateGrandTotal(callFromAplyBTn){
    // console.log(fromAplyBTn);
    /*
    if(callFromAplyBTn){
        console.log('call from apply-btn')
    }else{
        console.log('call from seat-btn')
    }
    */

    if(callFromAplyBTn){
        const couponCode = document.getElementById('coupon-code').value;
        // console.log(couponCode);
        if(couponCode==='NEW50'){
            let totalPrice = getConvertedValue('total-price')*0.8; //20%discount
            document.getElementById('grand-total-price').innerText = totalPrice;
            const couponCode = document.getElementById('coupon-code');
            console.log(couponCode.parentNode);
            couponCode.parentNode.classList.add('invisible');
        }else{
            alert('Pls enter valid coupon code')
            couponCode.parentNode.classList.remove('invisible');
        }
    }
    else{
        let totalPrice = getConvertedValue('total-price');
        document.getElementById('grand-total-price').innerText = totalPrice;
    }

}