const tempData = document.querySelector('input');
const tempUnit = document.querySelector('#temp-units');
const btn = document.getElementById('btn');
const showData = document.getElementById('showData');

btn.addEventListener('click',() =>{
    const num = tempData.valueAsNumber;
    const unit = tempUnit.value;
    let result;

    console.log(num);
    console.log(unit);

    if(!isNaN(num)){
        switch(unit){
            case "celsius":
                result = ((num * 9) / 5 + 32).toFixed(2) + "&deg;F";
                break;
            case "fahrenheit":
                result = ((num - 32) * 5 / 9).toFixed(2) + "&deg;C";
                break;
            default:
                result = "Please select the Unit";
        }    

    showData.innerHTML = result;

    }
    else{
        showData.innerHTML = "Please enter the Temp..."
    }
    
})