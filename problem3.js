function finalScore (omr) {
    let sum=0;
    let countCorrect=0;
    console.log(typeof(omr))
    
    if(typeof(omr)=="object"){
        for(let key in omr){
            sum+=omr[key];
            // console.log(sum);
    
          
        }
        if(sum===100){
            for(let x in omr){
            
                if(x=="right"){
                    let value1= omr[x]*1;
                    countCorrect+=value1;
    
                }
                else if(x=="wrong"){
                    let value2= omr[x]*0.5;
                    countCorrect-=value2;
                }
                else if(x=="skip"){
                    countCorrect+=0;
                }
    
            }
            let output=Math.round(countCorrect);
            return output;
            // return countCorrect;
        }else{
            let output="Invalid";
            return output;
        }
    }
    else{
        let output="Invalid";
        return output;

    }
    
}
const output=finalScore({ right: 30, wrong: 30, skip: 40  });
console.log(output);
