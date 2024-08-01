let input = document.getElementById('display');
let display = document.getElementById('result');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        
      if(e.target.innerHTML == 'AC'){
        string = "";
        input.value = string;
        display.innerHTML = '';
      }
      else  if(e.target.innerHTML == 'DE'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == '='){
            let tempString = string.replace(/\^/g, '**');
            string = string.replace(/√/g, 'Math.sqrt(');
            const matches = string.match(/Math.sqrt\(/g);
            if (matches) {
                tempString += ')'.repeat(matches.length);
            }
            try {
                let result = eval(tempString);
                display.innerHTML = result;
            } catch (error) {
                display.innerHTML = "Error";
            }
            input.value = string;
        } else if (e.target.innerHTML == '√') {
            string += '√';
            input.value = string;  
      }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})