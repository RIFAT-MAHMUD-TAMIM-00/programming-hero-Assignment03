function gonoVote(array) {
    let countHa=0;
    let countNa=0;
    if(Array.isArray(array)){
        for(let val of array){
            if(val==="ha" || val==="na"){
                if(val==="ha"){
                    countHa+=1;
    
                }else{
                    countNa+=1;
                }
            }
            else{
                let output="Invalid";
                return output;
            }
                
            
        }
        if(countHa>countNa){
            return true;
        }
        else if(countNa==countHa){
            let output="equal";
            return output;

        }else{
            return false;

        }

    }else{
        let output="Invalid";
        return output;
    }

    
}
const output=gonoVote(["ha", "na", "ha", "na"]);
console.log(output);
