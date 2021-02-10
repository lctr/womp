/*
  Remove Duplicates from Sorted Array
  @ https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

*/

class Solution {
  public int removeDuplicates(int[] nums) {
    int len = nums.length; 
    if (len == 0) {
      return 0;
    } else if (len == 1) {
      return 1; 
    } else {
      int count = 1;
      int val = nums[0];
      for (int i = 1; i < len; i++) {
        if (val < nums[i]) {
          val = nums[i];
          nums[count] = val;
          count++; 
        } 
      }
      return count;
    }
  }
}