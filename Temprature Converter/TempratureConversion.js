const Temp=document.getElementById("Temperature");

function convertTemperature(){
    let li=document.getElementById("para")

    let cel=Number(Temp.value)
    if(!isNaN(cel) )
    {
    li.textContent=`Temperature in Farhenhiet is- ${(cel*9/5)+32}`;
        li.style.color="green"
    }
    else 
    {
        li.textContent="Enter a valid Temprature"
        li.style.color="red"
    }
    

}