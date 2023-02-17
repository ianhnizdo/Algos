var addTwoNumbers = function(l1, l2) {
    const arr = [];

    let node1=l1;
    let node2=l2;
    let bool=false;
    while(node1!==null || node2 !== null || bool){
        
        let sum=0;
        if(node1 && node2){
            sum=node1.val+node2.val
            node1=node1.next;
            node2=node2.next;
        }else if(node1 || node2){
            sum= node1===null ? node2.val : node1.val
            if(node1===null && node2!==null) node2=node2.next;
            if(node2===null && node1!==null) node1=node1.next;
        }
        if(bool){
            sum+=1;
            // console.log('bool,', sum)
            bool=false;
        }

        if(sum>9){
            bool=true;
            sum=Math.floor(sum%10);
        }
        // console.log(bool, sum)
        const node = new ListNode(sum);
        // console.log('test');
        arr.push(node);
    }


    for(let i=0;i<arr.length; i++){
        if(arr[i+1]===undefined){
            arr[i].next=null;
            break;
        }
        arr[i].next=arr[i+1]
    }

    return arr[0];
};

var addTwoNumbers2=function(l1,l2,carry=0){
    let sentinel=tail=new ListNode();

    while(l1 || l2 || carry){
        let sum = (l1?.val || 0) +(l2?.val || 0) + carry;
        carry=Math.floor(sum/10);
        sum=(sum%10);
        const node = new ListNodoe(sum);

        tail.next=node;
        tail=tail.next;

        l1=l1?.next || null;
        l2=l2?.next || null;
    }
    
return sentinel.next;
}