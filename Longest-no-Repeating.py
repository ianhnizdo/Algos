class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s)==0:
            return 0
        charSet = set()
        l=0
        Max = 0

        for r in range(len(s)):
            while s[r] in charSet:
                charSet.remove(s[l])
                l+=1
                Max = max(Max,len(charSet))
            charSet.add(s[r])

        return max(Max+1, len(charSet))

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        thisset = {}
        Max=0
        l,r=0,1

        
        while(r<len(s)):
            print(s[r], obj)
            # if object has entry
            if obj[s[r]]:
                del obj[s[r]]
                l+=1
                Max=max(max, r-1)
                continue
            else:
                obj[s[r]]=True
                r+=1


        return max(Max, r-1)

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        
        Max = 0
        obj = {}
        string = ''

        c = 0

        while(c<len(s)):
            print(s[c], obj)
            if hasattr(obj,'a'):
                print('caught')
                c = obj[s[c]]+1
                obj = {}
                Max = max(Max, len(string))
                string=s[c]
                continue
            else:
                print('nothing')
                obj[s[c]]=1
                string+=s[c]
                c+=1
        return max(Max, len(string))
