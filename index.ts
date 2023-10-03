import {LinkedList} from "./Classes/LinkedList";
import {ArrayList} from "./Classes/ArrayList";
import {Stack} from "./Classes/Stack";
import {infixToPostfix} from "./Classes/SortStation";

let linkedList = new LinkedList(6);
let arrayList = new ArrayList(6);
let stack = new Stack();

linkedList.print();

linkedList.prepend(3);

linkedList.print();
console.log(" ");

linkedList.prepend(3);

linkedList.insert(20, 0);
linkedList.insert(20, 9);

linkedList.print();

linkedList.remove(9);
linkedList.remove(2);
linkedList.insert(8, 2);

linkedList.print();

linkedList.insert(8, 4);

linkedList.print();

arrayList.

const infixExpression = "3 + 4 * ( 2 - 1 ) / 5 + sin(30) * 2^3";
const postfixExpression = infixToPostfix(infixExpression);
console.log(postfixExpression); // Выводит "3 4 2 1 - * 5 / + 30 sin 2 3 ^ * +"