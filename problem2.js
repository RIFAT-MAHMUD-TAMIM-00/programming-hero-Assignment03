function validOtp(otp) {
    
    let x=otp.length;
    
    if (typeof otp === "string"){
        if(otp.startsWith("ph-")==true){
            if(x===8){
                return true;
              
            }
            else{
                return false;
            }
    
        }
        else{
            return false;
        }

    }
    else{
        let output="Invalid";
        return output;
    }
    

    
}
const output=validOtp("ph-10985");
console.log(output);
