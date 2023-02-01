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
            while(have==need):

                
                if matches==total:
                    print('hit')
                    arr.append([l,r])
                    

                    # Now we need to move the left pointer up
                    sobj[s[l]]=sobj.get(s[l])-1
                    l+=1
                    
                    while(l<r):
                        if s[l] in tobj: break
                        sobj[s[l]]=sobj.get(s[l])-1
                        l+=1
                smallest = min(len(smallest), len(modern))
                # Now we need to move the left pointer up
                sobj[s[l]]=sobj.get(s[l])-1
                l+=1
                while(l<r):
                    if s[l] in sobj: break
                    l+=1
                # Some logic to make smallest equal to the string of l to r
                modern=s[l:r]
        return

# Step 1. Understand the problem
# 
# input is two strings.
# 
# Return the minimum window substring such that every character in t is included in the window otherwise return the empty strinig
# Basically my interpretation is we have to go through the string and find substrings of s that include all the letters of t.
# The big kicker is we can include letters not in 't' to find the substring
# We  have to find the smallest substring
# 
# 
# Step 2. Examples
# 
# s=xeabasddfxce t=dxe->answer should be dfxce. That is the substring that includes all the letters of t. It is the shortest.
# 
# adblaockchatbro abo
# 
# Step 3. Method to solve
# 
# Problem is how do you take into consideration how to find the minimum substring
# 