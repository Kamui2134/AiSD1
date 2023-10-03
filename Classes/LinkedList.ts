
export class LinkedListNode {
    value: number;
    next: LinkedListNode | null;
    prev: LinkedListNode | null;
    constructor(value: number, next: LinkedListNode | null  = null, prev: LinkedListNode | null = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

export class LinkedList {
    head: any = null;
    length: number = 0;

    constructor(length: number) {
        this.length = length;
        for(let i:number = 1; i <= this.length; i++) {
            this.prepend(i);
        }
    }
    prepend(value: number) {
        // Создаём новый узел, который будет новым head,
        // при создании передаем второй аргумент, который указывает
        // что его "next" будет текущий head,
        // так как новый узел будет стоять перед текущем head.
        const newNode = new LinkedListNode(value, this.head);

        // Переназначаем head на новый узел
        if (this.head) {
            this.head.prev = newNode;
        }

        this.head = newNode;
    }
    find(index: number) {

    }
    print() {
        let temp = this.head;
        for (let i: number = 0; i < this.length; i++) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
    insert(data: number, index: number) {
        let temp = this.head;
        for (let i: number = 1; i < index; i++) {
            temp = temp.next;
        }
        const newNode: LinkedListNode = new LinkedListNode(data, temp.next);
        temp.next = newNode;
        newNode.prev = temp;
        temp.next.prev = newNode;
    }
    remove(index: number) {

    }
}