---
title: LeetCode刷题（C++练习）
date: 2025-08-02
layout: post
categories: [CS]
mermaid: true 
mathjax: true

---

>  参考指南：[代码随想录刷题指南](https://programmercarl.com/)

一想到大二上的4门专业课+残余数理基础课一起开的天崩开局就吓得决定赶紧丢掉C转投C++的怀抱，无奈被CTF拉去写了1个月Python，现在连基础语法都搞混了（哭，考虑到FDS崩盘，还是得努努力刷点数据结构和算法题的.



## 数组

### 二分查找

704. 复健，本身极水，但没想到被位运算暗算了（注意运算优先级，`>>`优先级低于`+`）。

```c++
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        while (left <= right){
            int mid = left + ((right - left) >> 1);  // 需要加括号
            if (nums[mid] > target){
                right = mid - 1;
            }else if(nums [mid] < target){
                left = mid + 1;
            }else{
                return mid;
            }
        }
        return -1;
    }
};
```

35 34 



<br/>

## 链表































<br/>

## Hash表

























