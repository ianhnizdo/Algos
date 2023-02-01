class Solution:
    def maxProfit(self, prices: List[int])->int:
        l,r = 0,1
        maxP = 0
        
        while r<len(prices):
            if prices[l] <prices[r]:
                profit=prices[r]-prices[l]
                maxP = max(maxP, profit)
            else:
                l=r
            r += 1

        return maxP

class Solution:
    def maxProfit2(self, prices: List[int])->int:
        min = prices[0]
        max = prices[0]
        maxInd = 0
        minInd = 0
        maxProfit = 0
    
        for i in range(0,len(prices)-1,1):
            print(i)
            if prices[i]<min:
                minInd=i
                min = prices[minInd]
                maxInd=i
                max = prices[maxInd]
                continue
                print(maxInd, minInd)
            if prices[i]>max:
                maxInd=i
                max = prices[maxInd]
                maxProfit=max(maxProfit, max-min)
                continue

        return maxProfit



# Step 1. Understand the problem
# 
# We are given an array of prices where prices[i] is the price of a given stock on the ith day. We want to maximize profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
# 
# If you  cannot achieve a maximum profit then return 0
# 
# 
# 
# Step 2. Examples
# 
# [7,1,5,3,6,4], output is 5
# Buy stock on day 2 and sell on day '6' 6-1=5
# 
# Step 3. Method
# 
# Brute force
# 
# Loop through our array and for every index just find the max number after
# 
# Take max-current to find the profit
# 
# Now we do that for every element in the array so just check if profit is greater than our max and update that accordingly
# 
# That would be roughly O(n^2) time complexity which creates problems down the line
# 
# [7, 1, 5, 3, 6, 4]
# 
# It would be nice if there were a way to just check if there is a max value in the array after a given i and see if the profit is higher than max
# 
# 
# 
# Okay if day 2 is less than day one we move on to next. as the purchase
# Okay what if there is an increase in profits from day 1 to day 2
# Then we would still need to find the max profit
# You would still need to check the max profit in the rest rof the array entries, or the max value
# One idea is sort the array and every time you pass a max value you pop it out.
# Another idea is have two pointers
# One pointer for left and one for right
# If you go through and find a new min update min
# If you find a new max, update the max
# All we have to do is keep a max profit
# Every time we have a new max but the same min the max profit will grow
# If we have to update the min but max stays the same profit will also grow
# If min is past max then put max at new min. From here the maxprofit will have to be analyzed
#  We will essentially have to update the max again and see if any new margins are greater than the previous max and min