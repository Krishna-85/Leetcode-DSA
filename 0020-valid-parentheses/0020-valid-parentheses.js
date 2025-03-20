/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    for(let i=0; i<s.length; i++){
        let ch = s.charAt(i);
        if(ch == '(' || ch == '[' || ch == '{'){
            stack.push(ch);
            continue;
        }
        if(stack.length ===0) return false
         if(ch == ')'){
            if(stack[stack.length-1]==='(') stack.pop()
            else return false
        }
        if(ch == ']'){
            if(stack[stack.length-1]==='[') stack.pop()
            else return false
        }
         if(ch == '}'){
            if(stack[stack.length-1]==='{') stack.pop()
            else return false
        }
       
    }
if(stack.length !==0) return false;
return true

};