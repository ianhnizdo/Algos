class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(t)>len(s) or t == "": return ""

        sobj,tobj = {}, {}

        for i in range(len(t)):
            sobj[t[i]]=0
            tobj[t[i]]=1+tobj.get(t[i],0)
        

        res, resLen= [-1,-1], float("infinity")
        
        matches, total = 0, len(t)

        # Make a left window
        l = 0

        # Now we loop over s
        for r in range(len(s)):
            
            # Get the current letter
            cur = s[r]
            sobj[cur] = 1+sobj.get(cur,0)
            
            if cur in tobj and sobj[cur]==tobj[cur]:
                    matches+=1
            
            if matches == total:
                print(l,r, s[l:r+1])
                if r-l+1<resLen:
                    resLen=r-l+1
                    res = [l,r]
                
                sobj[s[l]]=sobj.get(s[l])-1
                if tobj.get(s[l],0)>0 and sobj[s[l]]<tobj[s[l]]: matches-=1
                l+=1
                while(l<r):
                    print(l,r)
                    # Match
                    if(tobj.get(s[l],0)>0): break
                    sobj[s[l]]=sobj.get(s[l])-1
                    l+=1
                if matches == total and r-l+1<resLen:
                    resLen=r-l+1
                    res = [l,r]
            # print(sobj, matches, resLen, res)
        print(res, resLen, s[9:12])
        if resLen==float('infinity'):
            return ""
        return s[l-1:r+1]

class Solution:
    def minwindow(self, s : str, t: str)-> str:
        if t=="": return ""
        
        countT, countS = {}, {}

        for c in t:
            countT=1+countT.get(c,0)
        
        matches, total = 0, len(countT)

        res, resLen = [-1,-1], float("infinity")
        l=0
        for r in range(len(s)):
            c=s[r]
            countS=1+countS.get(c,0)

            if c in countT and countS[c]==countT[c]:
                matches+=1
            
            while matches==total:
                # update
                if(r-l+1)<resLen:
                    res=[l,r]
                    resLen=(r-l+1)
                countS[s[l]]=countS.get(s[l])-1
                if s[l] in countT and countS[s[l]]<countT[s[l]]:
                    matches-=1
                l+=1
        l,r=res
        return s[l:r+1] if resLen != float("infinity") else ""
