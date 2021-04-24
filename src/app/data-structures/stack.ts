export class Stack {
    stack : Array<String> = new Array();
    
    pop() {
        if(this.stack.length == 0) {
            return null;
        }
        
        let toReturn = this.stack.pop()
        return toReturn;
    }

    push(data:String) {
        this.stack.push(data)
    }

    top() {
        if(this.stack.length == 0) {
            return null;
        }
        
        return this.stack[this.stack.length-1]
    }

    getLength() {
        return this.stack.length
    }
 }

// let stack:Stack = new Stack();
// stack.push("A")
// stack.push("B")
// stack.push("C")
// console.log(stack.top())
// console.log(stack.pop())
// console.log(stack.top())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
