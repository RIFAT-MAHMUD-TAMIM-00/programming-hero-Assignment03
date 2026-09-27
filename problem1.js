function newPrice(currentPrice , discount) {
    

    if(typeof(currentPrice)=="number" && typeof(discount)=="number"){
        if(discount>=0 && discount<=100){
            let discountPrice=parseFloat((currentPrice*discount)/100);
            let output=parseFloat(currentPrice-discountPrice).toFixed(3);
            return output;
            
        }
        else{
            let output="Invalid";
            return output;
        }


    }
    else{
        let output="Invalid";
        return output;

    }

}
let output= newPrice(1000,"10");
console.log(output);
