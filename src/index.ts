import { Numbers } from "./numbers";
import { Characters } from "./characters";
import { LinkList } from "./linklist";

const nCollection = new Numbers([10, 9, 11, 60, 99, 87]);
nCollection.sort();
console.log(nCollection.numbers);

const cCollection = new Characters("bcghda");
cCollection.sort();
console.log(cCollection.characters);

const linkedList = new LinkList();

linkedList.add(200);
linkedList.add(-10);
linkedList.add(1);
linkedList.add(4);
linkedList.add(8);
linkedList.add(99);
linkedList.sort();
linkedList.print();
