
//create prompt top line is question seperate with,
//  and write text inside box
let Input = prompt (
    "Enter your Froyo order list",
    "grape, grape, kumquat, tangerine, tangerine, tangerine"
);
//turn input into an array
const ListInput = Input.split(",")

//create object to fill order count
const order = {};
parseInt
//create loop to scan input
for (i = 0; i < ListInput.length; i++) {
    const list = ListInput[i].trim();

    //.trim removes stuff like spaces so "grape" and ", grape" 
    //both come out the same

    //check if key exist in my object

    if (list in order){

//add item to order

        order[list]++;
    }

    //if doesnt exist already in order (object)

    else {
        order[list] = 1;
    }
}

console.log(order)