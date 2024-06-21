
// Operations

function addo(a,b){
    return a+b;
}

function subo(a,b){
    return a-b;
}

function multiplyo(a,b){
    return a*b;
}

function divideo(a,b){
    if(b===0){
        return "Error"
    } else {
        return a/b;
    }
}



function operate(a,c,b){
    if(c === "+"){
        return addo(a,b);
    } else if (c==="-"){
        return subo(a,b);
    } else if(c==="*"){
        return multiplyo(a,b);
    } else if (c==="/"){
        return divideo(a,b);
    }
}

const screen = document.querySelector(".screen");
let val;



let operations = ["/","+","-","*"];
let a = "";
let b = "";

let arr = new Array(3);
let result;

 const buttons = document.querySelectorAll(".num, .num1");
 buttons.forEach(button=>{
     button.addEventListener("click",function(){
        value = this.innerText;


        if(!operations.includes(value) && arr[1]===undefined){
                a+=value;
                screen.textContent = a;
        }

        arr[0] = a;

        if(operations.includes(value) && a !== undefined){
            arr[1] = value;
        }


        

         if(value === "AC"){
             arr = new Array(3);
             screen.textContent = "";
             a = "";
             b = "";

         }

         if (arr[1]!==undefined && !operations.includes(value) && value !== "="){
                b+=value;
                screen.textContent = b;
         }

        arr[2] = b;



         if (value === "="){
             if(arr[1] === "+"){
                 result = addo(parseInt(arr[0]),parseInt(arr[2]));
             } else if (arr[1] === "-"){
                 result =subo(parseInt(arr[0]),parseInt(arr[2]));
             } else if (arr[1] === "/"){
                 result = divido(parseInt(arr[0]),parseInt(arr[2]));
             } else {
                 result = multiplyo(parseInt(arr[0]),parseInt(arr[2]));
             }

            screen.textContent = result;
            arr = new Array(3);
            a = result;
            arr[0] = a;
            b = "";

            } 
        // } else if (operations.includes(value) && arr.length===3){
        //     if(arr[1] === "+"){
        //         result =addo(arr[0],arr[2]);
        //     } else if (arr[1] === "-"){
        //         result = subo(arr[0],arr[2]);
        //     } else if (arr[1] === "/"){
        //         result = divido(arr[0],arr[2]);
        //     } else {
        //         result =  multiplyo(arr[0],arr[2]);
        //     } 

        //     arr = new Array(3);
        //     arr[0] = result;
        // }

        screen.textContent = result;

        console.log(arr);

        
       

        
    
    
     
    });
    
 });







