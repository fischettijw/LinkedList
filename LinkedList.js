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
        console.log("--------------------------------------------------------\n");
    }

    append(data) {
        if (!this.head) {
            this.prepend(data);
        } else {
            const node = new Node(data);
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
    }

    insert(index, data) {
        if (index < 0 || index > this.length) {
            console.log(data);
            return -1;
        } else if (index == 0) {
            this.prepend(data);
        } else if (index == this.length) {
            this.append(data);
        } else {
            const newNode = new Node(data);
            let current = this.head;
            let counter = 0;
            while (counter < index - 1) {
                counter++;
                current = current.next;
            }
            let tempNode = current.next
            current.next = newNode;
            newNode.next = tempNode;
            this.length++;
        }


    }



}