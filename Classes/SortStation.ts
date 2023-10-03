import {Stack} from "./Stack";

function isOperator(token: string): boolean {
    return ['+', '-', '*', '/', '^', 'sin', 'cos'].includes(token) || /^\d+$/.test(token);
}

function precedence(operator: string): number {
    switch (operator) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        case '^':
        case 'sin':
        case 'cos':
            return 3;
        default:
            return 0;
    }
}

export function infixToPostfix(infixExpression: string): string {
    const outputQueue: string[] = [];
    const operatorStack = new Stack<string>();

    const tokens = infixExpression.split(' ');

    for (const token of tokens) {
        if (!isNaN(parseFloat(token))) {
            // Если токен - число, добавляем его в выходную очередь
            outputQueue.push(token);
        } else if (token === '(') {
            // Если токен - открывающая скобка, помещаем ее в стек операторов
            operatorStack.push(token);
        } else if (token === ')') {
            // Если токен - закрывающая скобка, выталкиваем операторы из стека в выходную очередь
            while (!operatorStack.isEmpty() && operatorStack.peek() !== '(') {
                outputQueue.push(operatorStack.pop()!);
            }
            if (operatorStack.peek() === '(') {
                operatorStack.pop();
            }
        } else if (isOperator(token)) {
            // Если токен - оператор, выталкиваем операторы с большим или равным приоритетом из стека
            // и затем помещаем текущий оператор в стек
            while (
                !operatorStack.isEmpty() &&
                precedence(token) <= precedence(operatorStack.peek()!)
                ) {
                outputQueue.push(operatorStack.pop()!);
            }
            operatorStack.push(token);
        }
    }

    // Выталкиваем оставшиеся операторы из стека в выходную очередь
    while (!operatorStack.isEmpty()) {
        outputQueue.push(operatorStack.pop()!);
    }

    return outputQueue.join(' ');
}