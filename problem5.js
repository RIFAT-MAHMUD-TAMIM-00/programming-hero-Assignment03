function analyzeText(str) {

    if (typeof str !== "string") {
        return "Invalid";
    }

    let x = str.split(" ");
    let y = str.split(" ").join("");
    let longwords = "";
    let token = y.length;
    let maxlength = 0;

    if (token > 0) {

        for (let z of x) {

            if (z.length > maxlength) {
                maxlength = z.length;
                longwords = z;
            }

        }

    } else {
        return "Invalid";
    }

    return {
        longwords,
        token,
    };
}

const output = analyzeText(1234);
console.log(output);