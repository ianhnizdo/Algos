class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        ans=[]

        l,r= 0,0

        q = collections.deque()

        while(r<len(nums)):
            while q and nums[r]>nums[q[-1]]:
                q.pop()
            q.append(r)
            if(r-l+1>=k):
                # print(r,l,q, ans)
                ans.append(nums[q[0]])
                l+=1
                if q[0]<l:
                    q.popleft()
            r+=1
        
        return ans