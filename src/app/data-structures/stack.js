var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = new Array();
    }
    Stack.prototype.pop = function () {
        if (this.stack.length == 0) {
            return null;
        }
        var toReturn = this.stack.pop();
        return toReturn;
    };
    Stack.prototype.push = function (data) {
        this.stack.push(data);
    };
    Stack.prototype.top = function () {
        if (this.stack.length == 0) {
            return null;
        }
        return this.stack[this.stack.length - 1];
    };
    return Stack;
}());
var stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
console.log(stack.top());
console.log(stack.pop());
console.log(stack.top());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
