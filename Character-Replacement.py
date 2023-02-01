class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        longest = 0
        obj = {}
        l,r=0, 0

        while(r<len(s)):
            obj[s[r]]=1+obj.get(s[r],0)
            freq = max(obj.values())
            r+=1
            check = r-l-freq
            if(check>k):
                obj[s[l]]=obj.get(s[l])-1
                l+=1
            longest = max(longest, r-l)
        return longest

