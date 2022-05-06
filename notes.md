
| Array Type            | doubleAppend Time     | doubleInsert Time   |
| --------------------- |:--------------------: | ------------------: |
| tinyArray             | 97.159 μs             | 39.633 μs           |
| smallArray            | 111.723 μs            | 50.401 μs           |
| mediumArray           | 178.138 μs            | 179.741 μs          |
| largeArray            | 6.356393 ms           | 637.117 μs          |
| extralargeArray       | 3.810053 ms           | 976.264827 ms       |


...The append function will scale better given the time complexities of the method .push it uses. Since .push is O(1) and .unshift is O(n) the .push method has a better time complexity. 

...The append function has a time complexity of O(n). The .push method it uses has a time complexity of O(1). The append function itself loops over the nums array and the .push focues on the new_nums array. Each focus on two different arrays.

...The insert function has a time complexity of O(n). The .unshift method has a linear time complexity of O(n) as well. In the case of .unshift, using this method entails needing to change the indexes if adding a new element at the beginning of an array as every index of the other elements in the array mush be incremented by 1.
