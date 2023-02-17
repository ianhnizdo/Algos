var removeNthFromEnd = function(head, n) {
    //First I want to set the previous values of the node and find the tail
    
    let copy = head;
    let prev = null;
    
    while(copy !== null){
        console.log(copy, copy.prev);
        copy[prev]=prev
        prev=copy;
        copy=copy.next;
    };
    
    console.log(head, n)

    let tail = prev;
    let index= 1;
    let current = tail;

    while(index<=n){
        // console.log('top cur,', current, current.prev);
        if(index===n){
            console.log(current);
            //To make tail node ignore the current and go to the head node
            current.next.prev=current.prev;

            //To make head node go past current to tail node.
            current.prev.next=current.next;
            break;
        }else{
            current=current.prev;
            index++;
        }
    }
    return head;
};

var removeNthFromEnd2 = function(head, n) {
    let right = head;
    let i = 0;
    while(i<n){
        right=right.next;
        i+=1;
    }
    
    let left = head;
    let dummy=null;
    while(right!==null){
        dummy=left;
        left=left.next;
        right=right.next;
    }
    dummy.next=left.next;
    return head;
};

var removeNthFromEnd3 = function(head, n) {
    
    // console.log(head);

    let length=1;
    let cur = head;
    while(cur.next!=null){
        cur=cur.next;
        length+=1;
    }
    if(length===1){
        head=null;
        return head;
    }
    //calculate the positon we need to remove
    let pos=length-n;
    if(pos===0){
        head=head.next;
        return head;
    }

    //n=2 and we have 5 nodes, 5-2=3, that actually tells us what node should be adjusted so it can work
    let node = head;

    for(let i =0; i<=pos-1;i++){
        if(i===pos-1){
            console.log(node.next)
            node.next=node.next.next
        }else {
            node=node.next;
            }
    }
    return head;
};