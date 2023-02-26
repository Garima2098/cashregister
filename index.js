const billAmount=document.querySelector('#bill');
const cashGiven=document.querySelector('#cash');
const clickButton=document.querySelector('#btn');
const message=document.querySelector('#error');

const notee=document.querySelectorAll('.col');


const avaliableNotes=[2000,500,100,20,10,5,1];

clickButton.addEventListener('click',function Amount(){
   // message.style.display="none";
    if(billAmount.value>0)
    {
            if(cashGiven.value>=billAmount.value)
            {
                const amountReturned=cashGiven.value-billAmount.value;
                calculatedChange(amountReturned);
            }
            else{
                    showmessage('The cash provided should be greater then the bill')
            }
    }
    else{
        showmessage('Invalid Amount');
    }
})


function calculatedChange(amountReturned)
{
for(let i=0;i<avaliableNotes.length;i++)
{
    const notes=Math.trunc(amountReturned/avaliableNotes[i]);
    amountReturned%=avaliableNotes[i];
    notee[i].innerHTML=notes;
}
}
function showmessage(msg)
{
    message.style.display="block";
    message.innerHTML=msg;
}