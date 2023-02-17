/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const arr = []
  
    //lets make an array
    let node = head;
    let i =0;
  
    while(node){
        arr.push(node)
        node=node.next
        arr[i].next=null;
        i+=1
    } 
    console.log(arr);
  
    let l1=1
    let l2=arr.length-1;
  //   let dummy = head;
  
      while(l1<l2){
      //     console.log(head);
          head.next=arr[l2]
          // console.log(head)
          l2-=1;
          head=head.next;
          head.next=arr[l1];
          l1+=1;
          head=head.next;
      }
  
      if(l1===l2){
          // console.log('l1 is equal to l2');
          // console.log(head.next, arr[l1]);
          head.next=arr[l1]
          console.log(arr[0]);
      }
  
      // console.log('jead and l1,', arr[0], l1);
  
  
    return
  };

  var reorderList2 = function(head){
    let s = head;
    let f = head.next;
    while(f!==null && f.next!==null){
        s=head.next
        f=head.next.next;
    }

    //Now s is at the beginning at the second half of the list
    let second=s.next;
    //Splitting it into two different linked lists
    s.next=null;

    let prev = null;

    while(second!==null){
        let copy = second.next;
        second.next=prev;
        prev=second;
        second=copy;
    }
    
    // Nowwe merge the two lists.
    let first = head;
    let second2 = prev;

    let bool = false;
    let tmp = first.next;
    // We use the now modified second
    while(tmp!== null && second2!==null){
        if(!bool){
            first.next=second2;
            second2=second2.next;
            first=first.next;
            bool=true;
        }else if(bool){
            first.next=tmp;
            tmp=tmp.next;
            first=first.next;
            bool=false;
        }

    }

    if(tmp!==null){
        first.next=tmp
    }
    return;
  }

  var reorderList3 = function(head){
    let s = head;
    let f = head.next;
    while(f!==null && f.next!==null){
        s=s.next
        f=f.next.next;
        // console.log('firstloop', f.next===null)
    }

    //Now s is at the beginning at the second half of the list
    let second=s.next;

    //Splitting it into two different linked lists
    s.next=null;

    let prev = null;

    while(second!==null){
        // console.log('test');
        let copy = second.next;
        second.next=prev;
        prev=second;
        second=copy;
    }
    
    // Nowwe merge the two lists.
    let first = head;
    let second2 = prev;
    while(second2){
        // console.log('final loop,', second2)
        let tmp1 = first.next
        let tmp2 = second2.next;
        first.next=second2;
        second2.next=tmp1;
        first=tmp1;
        second2=tmp2;
    }
  }