function dice() {
    let resultElement = document.getElementById("ResultMessage");
    let DiceResult = Math.floor(Math.random()*6)+1;

    resultElement.innerHTML = dicejudge(DiceResult);
    
}

function dicejudge(DiceResult){
    let symbol ="";
    switch(DiceResult){
        case 1:
            symbol = "⚀";
            break;

        case 2:
            symbol = "⚁";
            break;
        
        case 3:
            symbol = "⚂";
            break;

        case 4:
            symbol = "⚃";
            break;

        case 5:
            symbol = "⚄";
            break;

        default:
            symbol = "⚅";
            break;
    }

    return symbol;

}