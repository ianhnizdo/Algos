/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
};

/*
Step 1. Understand the Problem

Our input is two sorted arrays of nums1 and nums2 respectively. Our goal is to return the median of the two sorted arrays.

The overall run time complexity should be O(log(m+n))

The idea is they want us to merge the arrays and then find the median of that merged array

Are we assuming that the two arrays are perfectly sorted when concatenated together or do we have to sort them again?

Step 3. Method

Here is the question I'm wondering about. How do we deal with the arrays.

Brute force

Concat the arrays

Sort them to ensure order

Then from 0 to array.length-1

5 long
5/2=2.5 floor is 2, that is our index, so return that index

6 long
6/2=3
Take the index of 2 and 3, sum them and divide by 2 and return that answer.

This time complexity would be high. Approximately n for concat, nlogn for sorting, yeah it would be nlogn overall.

Another method could be used... We have our two arrays both sorted.

*/