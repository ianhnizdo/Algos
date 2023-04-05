/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const arr = [];

    for(const el of tokens){
        // console.log(el)
        if(!isNaN(Number(el))){
            arr.push(Number(el))
        }
        else{
            // console.log(el)
            const last = arr[arr.length-1];
            const secondLast = arr[arr.length-2];
            arr.pop()
            arr.pop()
            switch(el){
                case '+':
                    arr.push(secondLast+last)        
                    break;
                    case '-':
                        arr.push(secondLast-last)        
                        break;
                        case '*':
                            arr.push(secondLast*last)        
                            break;
                            case '/':
                                arr.push(Math.trunc(secondLast/last))
                                console.log((Math.trunc(6/-132)))
                                break;
                                default:
                                    break;
            }
        }
        // console.log(arr)
    }
    // console.log(arr)
    return arr[0];
};

// console.log(evalRPN(["2","1","+","3","*"]))
// console.log(evalRPN( ["4","13","5","/","+"]))
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))

/*

Step 1. Understand the Problem

Input, array of tokens that represents reverse polish notation

Reverse Polish Notation: Operators follow their operands, polish notation has operators preced theier operands. NNo parentheses as long as each operator has a fixed number of operands.
Apparently reverse polish notation is used in stack-oriented programming languages. Example 3 4 + rather than e_5
The conocept of stack a last=in/first-out construct can use RPN.  3 4 -, put 3 onto the stack, than the 4, then subtrraction operator removes the top two oitems from the stack, performs 3-4, and puts the result onto the stack.
It removes the need for order of operations and parentheses that are required by infix notation and can be evaluated linearly left-to-right.

ASSUMPTIONS

Each operandd may be an integer or another expression
The division truncates TOWARDS ZERO
No division by zero
Input is an aritmetic expression in reverse polish notationn
Answera can be represented in a 32-bit integer

Step 2. Examples

["2","1""+","3","*"], output is 9
((2+1)*3)=9

["4","13", "5" "/", "+"]

output is 6, (4+(13/5))

[10,6,9,3,+,-11,*,/,*,17,+,5,+]

[10*(((9+3)*-11)/6)+17+5]

[10*(6/(9+3*-11))+l7+5]

Okay I have become familiar with reverse polish notation lol.

Step 3. Method

So I need to wrap my head around this. We can just push numbers into an array as we loop through our input
The idea is to keep pushin in until we hit an operator. Once we do hit an operator we pop out the last two values and do the operation on them.
Throughout this we will need a result variable to keep track of what we have created. Actually the last entry in our array can be the result

Lets walk through the examples

[2,1,+,3,*]

loop through
initial array,
[]            

2, push in two 
[2]
1, push in 1
[2,1]
Okay +, so we grab the last two values and + them to our result and the result to our array, a switch statement can be useful here

[],3
3, push in 3
[3]

* so multiply the last entry in our array by 3
[9]

[10,6,9,3,+,11,*,/,*,17,+,5+]

10 [10]-> 6 [10,6] -> 9 [10,6,9] -> 3 [10,6,9,3] -> + [10,6,12] -> -11 [10,6,12,-11] -> * [10,6,-132]-> / [10,6/132=0] -> * [0] -> 17[0,17] -> + [17] -> 5 [17,5] -> + [22] 22 is our answer
If we do any operation we will need the last two numbers


Step 4. Actually put in the code

Just look at the problem to see my code lol

*/