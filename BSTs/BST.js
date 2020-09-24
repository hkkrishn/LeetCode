class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value
    }
}

class BST{
    constructor(){
        this.root = null
    }

    insert(value){
        //Code
        //create a new Node
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode;
        }
        else{
            let currentNode = this.root;
            while(true){
                if(value< currentNode.value){
                    //Left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this; //points to the BST
                    }
                    currentNode = currentNode.left
                } else if(value >= currentNode.value){
                    //Right
                    if(!currentNode.right){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

    lookup(value){

    }
}


//function to traverse through the tree
const traverse = (node)=>{
    const tree = {value:node.value};
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null: traverse(node.right)
    console.log(tree)
    return tree
}

const tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root))



