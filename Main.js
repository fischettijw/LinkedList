console.clear();

// const node = new Node(1);
// console.log(node);
//--------------------------------------------------------

const linkedList = new LinkedList();
// linkedList.prepend("1st Prepend");
// // console.log(linkedList);

// linkedList.prepend("2nd Prepend");
// linkedList.prepend("3rd Prepend");
// linkedList.prepend("4th Prepend");
// // console.log(linkedList);
// // linkedList.append("Test for append without head");
// // linkedList.display();

// linkedList.append("1st append");
// linkedList.append("2nd append");
// linkedList.append("3rd append");
// linkedList.display();


// linkedList.append("1st append");
// linkedList.append("2nd append");
// linkedList.append("3rd append");
// linkedList.display();


// linkedList.insert(-1, "*** Cannot insert - Index < 0 ***");
// linkedList.insert(linkedList.length + 1, "*** Cannot insert - Index > linkList length ***");
// linkedList.insert(0, "Insert at beginning");
// linkedList.insert(linkedList.length, "Insert at end");
// linkedList.insert(3, "Insert at 3");
// linkedList.display();

for (let i = 0; i < 8; i++) {
    linkedList.append(`${i} appended`);
}
// linkedList.display();
// linkedList.delete(0);
// linkedList.display();
// linkedList.delete(linkedList.length - 1);
linkedList.display();
linkedList.delete(3);
linkedList.display();