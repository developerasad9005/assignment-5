const ticketlength = document.getElementsByClassName('ticket').length;
let ablTicket = document.getElementById('leftTicket');
ablTicket.innerText = ticketlength;

function clickButton(idname){
    const ticketContainer = document.getElementById('ticketlistContainer');
    let ticketContainerLenth = document.getElementById('ticketlistContainer').childElementCount;
    if(ticketContainerLenth < 4){
        const idName = idname;
        const Button = document.getElementById(idName);
        Button.style.backgroundColor = "#1DD100";
        Button.style.color = "white";
        const childHTML = (`<div class="flex justify-between mt-4">
        <h1 class="text-xl">${idName}</h1>
        <h1 class="text-xl">Economoy</h1>
        <h1 class="text-xl">550</h1>
    </div>`)
    ticketContainer.innerHTML += childHTML;
    const buyTicketCount = document.getElementById('buyTicketCount');
    ticketContainerLenth+=1;
    buyTicketCount.innerText = ticketContainerLenth;
    let leftTicket = document.getElementById('leftTicket').innerText;
    let leftTicketCount = Number(leftTicket)
    leftTicketCount = leftTicketCount-1;
    ablTicket.innerText = leftTicketCount;
    const prizeUpdate = document.getElementById('totalPrizeUpdate');
    const grandtotalUpdate = document.getElementById('grandTotalUpdate');
    const totalPrizeSum = ticketContainerLenth * 550;
    const grandtotalsum = ticketContainerLenth * 550; 
    prizeUpdate.innerText = totalPrizeSum;
    grandtotalUpdate.innerText = grandtotalsum;

    }
    else{
        alert("You have already selected maximum number of Seats");
    }
}


