---
category: 'basics'
title: 'Merge Sort Revisited and Optimized'
note: 'buffer4faster'
---

Due to the change in my life, I get to prepare for code interviews again, hope it would be a good opportunity to work on my partially finished algorithms courses(namely: dsa, cg, algs4, i2cp, algorithms, pku, zju, pc, intro2ga) and share what I learned to help peers.

In this post, I'll do a quick recap of merge sort algorithm and introduce the method to improve it's efficiency and show the case of using merge sort to count reverse pairs.

Merge sort is a stable and efficient sorting algorithm of O(nlog(n)) time complexity.

The general idea is:

    + array with <= 1 element is sorted by nature.
    + for >1 elements, split it into two sub-array of similar size, recursively call mergesort.
    + merge the separately sorted parts by linearly compare and place their next elements;

using the half-closed interval to represent sub-array and preparing a buffer of same size compare with to-be-sorted array could make your life easier and our merge sort faster.

(Because memory allocation(malloc/calloc etc.) takes hundreds of clocks(it may take even more time on GPU due to more complex memory hierarchy) which could be a BIG overhead. Too much malloc/new would make your program slow. Allocating necessary memory space at the very beginning of the program execution seems trivial but would definitely make your programs run faster :) )

Moreover, merge sort is sometimes used for counting reverse pairs for solve programming problems(i.e. counting lighthouse pairs which can/cannot illuminate each other in a 2D plane when all of them only illuminate 1st, 3rd quadrant in reference to their own position).

The code as below serves as an reference implementation of merge sort(with count), same +buff trick could also be used for accelerating merge sort in parallel computing setting.

```cpp
int merge_and_count(long long *arr, int lo, int mi, int hi, long long *buff)
{
    int res = 0;
    for (int i = lo; i < mi; i++) buff[i] = arr[i];
    
    int i = lo, j = mi, curr = lo;
    
    while (i < mi && j < hi) {
        if (buff[i] <= arr[j])
        {
            arr[curr] = buff[i];
            i++;
        } else {
            arr[curr] = arr[j];
            res += (mi - i);
            j++;
        }
        curr++;
    }
    
    while (i < mi) {
        arr[curr++] = buff[i++];
    }
    
    while (j < hi) {
        res += (mi - i);
        j++;
    }

    return res;
}


int count_by_mergesort(long long *arr, int lo, int hi, long long *buff)
{
    if (hi - lo < 2) return 0;
    int mi = (lo + hi) >> 1;
    int res1 = count_by_mergesort(arr, lo, mi, buff);
    int res2 = count_by_mergesort(arr, mi, hi, buff);
    int res3 = merge_and_count(arr, lo, mi, hi, buff);
    return res1+res2+res3;
}
```

Have a great Monday :)
