var hasCycle = function(head) {
    let node = head;

    const map = new Map()

    while(node){
        if(map.has(node)) return true
        map.set(node, true)
        node=node.next;
    }
    return false;
};

var hasCycle2 = function(head) {
    let node1 = head;
    let node2=head?.next?.next||null;

    while(node1 && node2){
         if(node2===node1 || node2.next===node1) return true;

        node1=node1.next;
        node2=node2?.next?.next || null;
    }
    return false;
};