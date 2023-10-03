export class Stack {
    private items: number[] = [];

    push(item: number): void {
        this.items.push(item);
    }

    pop(): number | undefined {
        return this.items.pop();
    }

    peek(): number | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
    print() {
        let str: string = " ";
        for (let i: number = 0; i < this.items.length; i++) {
            str += "[" + this.items[i] + "]";
        }
        console.log(str);
    }
}