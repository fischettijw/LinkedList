class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    prepend(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;
        } else {
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }

    display() {
        console.log(`Length: ${this.length} || Head: ${this.head.data} || Tail: ${this.tail.data}`);
        let counter = 0;
        let current = this.head
        while (counter < this.length) {
            console.log(`   ${counter}  ${current.data}`)
            current = current.next;
            counter++;
        }
    }

}