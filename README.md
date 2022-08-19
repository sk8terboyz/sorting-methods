# Sorting Methods

I created this repository to try converting sorting methods I've done previously in C++ to JavaScript. These sorting methods are listed below with basic information about each.

## Insertion Sort

This sorting algorithm is one of the simplest, but intensive methods that works best with partially sorted arrays. Insertion Sort virtually splits the given array into sorted and unsorted parts. Values from the unsorted part are placed at the correct position in the sorted part. By the end the sorted part will be the final array.

Time Complexity
  - Best	O(n)
  - Worst	O(n^2)
  - Average	O(n^2)

Space Complexity
  - O(1)
  - Stability	Yes

## Merge Sort

Time Complexity
  - Best	O(nlog(n))
  - Worst	O(nlog(n))
  - Average	O(nlog(n))

Space Complexity
  - O(n)
  - Stability	Yes
  
## Shell Sort

By making use of the insertion sort method, shell sort adds the idea of gapping the values to be sorted and sorting the values at each gap. Ideally this provides the exchange of items far apart to be sorted and the rest will follow suit as the gap gets smaller until eventually it does a final sort through the entire array/list.

Time Complexity
  - Best	O(nlog(n))
  - Worst	O(n^2)
  - Average	O(nlog(n))

Space Complexity
  - O(1)
  - Stability	No
