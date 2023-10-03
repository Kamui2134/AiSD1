export class ArrayList {
    length: number = 1;
    size: number = 0;
    items: number[];

    constructor(length: number = 1) {
        this.length = length;
        this.items = new Array(this.length);
    }

    print() {
        let str: string = " ";
        for (let i: number = 0; i < this.size; i++) {
            str += "[" + this.items[i] + "]";
        }
        console.log(str);
    }

    insert(index: number, val: number) {
        if (index > this.size) {
            return 0;
        }
        this.size++;
        if (this.size === this.length) {
            this.extension();
        }
       for (let i: number = this.size - 1; i > index; i--) {
            this.items[i] = this.items[i - 1];
       }
       this.items[index] = val;
    }

    remove(index: number) {
        if (index >= this.size) {
            return 0;
        }
        for (let i: number = index; i < this.size; i++) {
            this.items[index] = this.items[index + 1];
        }
        this.size--;
    }

    push(val: number) {
        this.insert(this.size, val);
    }

    pop() {
        this.remove(this.size - 1);
    }

    push_front(val: number) {
        this.insert(0, val);
    }

    pop_front() {
        this.remove(0);
    }
    private extension() {
        let newItems: number[] = new Array(this.length * 2);
        for (let i: number = 0; i < this.length; i++) {
            newItems[i] = this.items[i];
        }
        this.items = newItems;
        this.length *= 2;
    }
    input(index: number, val: number) {
        if (index >= this.size) {
            return 0;
        }
        this.items[index] = val;
    }
}