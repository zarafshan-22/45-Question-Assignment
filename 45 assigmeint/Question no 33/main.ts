let Ordinal_Number : number[]=[1,2,3,4,5,6,7,8,9];

//for loop
Ordinal_Number.forEach(Numbers => 
    {
    if(Numbers===1){
        console.log(`${Numbers}st`)}
    else if( Numbers===2){
console.log(`${Numbers}nd`)
    }
    else if( Numbers===3){
        console.log(`${Numbers}rd`)
            }
            else if( Numbers>=4 && Numbers<=9){
                console.log(`${Numbers}th`)
                    }

    }
)