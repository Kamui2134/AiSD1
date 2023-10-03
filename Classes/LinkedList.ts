export class LinkedListNode {
    value: number;
    next: LinkedListNode | null;
    prev: LinkedListNode | null;

    constructor(value: number, next: LinkedListNode | null = null, prev: LinkedListNode | null = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

export class LinkedList {
    head: any = null;
    length: number = 0;

    constructor(length: number) {
        for (let i: number = 1; i <= length; i++) {
            this.prepend(i);
        }
    }

    prepend(value: number) {
        this.length++;
        // Создаём новый узел, который будет новым head,
        // при создании передаём второй аргумент, который указывает
        // что его "next" будет текущий head,
        // так как новый узел будет стоять перед текущем head.
        const newNode = new LinkedListNode(value, this.head);

        // Если есть head, то он больше не будет head.
        // Поэтому, его ссылку на предыдущий узел (previous) меняем на новый узел.
        if (this.head) {
            this.head.prev = newNode;
        }

        // Переназначаем head на новый узел
        this.head = newNode;

    }

    find(value: number) {
        // Если нет head - список пуст.
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        // Перебираем все узлы в поиске значения.
        while (currentNode) {
            // Если указано значение, пробуем сравнить его по значению.
            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }

            // Перематываем на один узел вперед.
            currentNode = currentNode.next;
        }

        return null;
    }

    print() {
        if (this.head == null) {
            console.log(" ");
            return 0;
        }
        let temp = this.head;
        let str: string = temp.value;
        for (let i: number = 0; i < this.length - 1; i++) {
            temp = temp.next;
            str += "->" + temp.value;
        }
        console.log(str);
    }

    insert(data: number, index: number) {
        if (index > this.length) {
            return 0;
        }
        this.length++;
        let temp = this.head;
        for (let i: number = 0; i < index; i++) {
            if (temp.next === null) {
                break;
            }
            temp = temp.next;
        }
        const newNode: LinkedListNode = new LinkedListNode(data, temp);

        if (this.head === null) {
            this.head = newNode;
        } else if (temp === this.head) {
            this.head = newNode;
            temp.prev = newNode;
        } else if (index === this.length - 1) {
            newNode.next = null;
            newNode.prev = temp.prev.next;
            temp.next = newNode;
        } else {
            newNode.prev = temp.prev;
            temp.prev.next = newNode;
        }
    }

    remove(index: number) {
        if (index >= this.length || this.length === 0) {
            return 0;
        }
        this.length--;
        let temp = this.head;
        for (let i: number = 0; i < index; i++) {
            temp = temp.next;
        }
        if (this.length === 0) {
            this.head = null;
        } else if (temp === this.head) {
            temp.next.prev = temp.prev;
            this.head = temp.next;
            delete temp.next;
        } else if (index != this.length && temp != this.head) {
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
        } else if (index === this.length) {
            temp.prev.next = null;
            delete temp.prev;
        }
        delete temp.value;
    }
}