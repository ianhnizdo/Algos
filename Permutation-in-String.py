class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s2)<len(s1): return False

        s1Count, s2Count = [0]*26, [0]*26
        
        for i in range(len(s1)):
            # s1Count[ord(s1[i])-97]+=1
            s1Count[ord(s1[i])-ord('a')]+=1
            s2Count[ord(s2[i])-ord('a')]+=1

        matches = 0
        for i in range(26):
            matches += (1 if s1Count[i] == s2Count[i] else 0)

        l = 0
        for r in range(len(s1), len(s2)):
            if matches == 26: return True
            index = ord(s2[r]) - ord('a')
            s2Count[index]+=1
            if s1Count[index]==s2Count[index]:
                matches+=1
            elif s1Count[index]+1==s2Count[index]: matches-=1 
            
            lindex = ord(s2[l]) - ord('a')
            s2Count[lindex]-=1
            if s1Count[lindex]==s2Count[lindex]:
                matches+=1
            elif s1Count[lindex]==s2Count[lindex]+1: matches-=1
            l+=1


        return matches==26

class Solution:
    def checkInclusion2(self, s1: str, s2: str) -> bool:
        if len(s2)<len(s1): return False

        s1Count, s2Count = [0]*26, [0]*26
        
        for i in range(len(s1)):
            # s1Count[ord(s1[i])-97]+=1
            s1Count[ord(s1[i])-ord('a')]+=1
            s2Count[ord(s2[i])-ord('a')]+=1

        matches = 0
        for i in range(26):
            matches += (1 if s1Count[i] == s2Count[i] else 0)

        l,r = 0, len(s1)-1
        while r<len(s2)-1:
            if matches==26: return True
            
            li = ord(s2[l])-ord('a')
            s2Count[li]-=1
            if s2Count[li]==s1Count[li]: matches +=1
            else: matches -=1
            l+=1

            r+=1
            ri = ord(s2[r])-ord('a')
            s2Count[ri]+=1
            if s2Count[ri]==s1Count[ri]: matches+=1
            else: matches-=1

        print(s2Count, 's1Count now,', s1Count, matches)

        if matches ==26: return True

        return False

