<html>
<head>
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="index.css">

<!--Google Fonts Sheets-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch&family=Palette+Mosaic&family=Slackside+One&display=swap" rel="stylesheet">

<!--Code Block Using Highlight.js-->
<!--Loading the Script-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js"></script>
<!--CDN Template-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/atom-one-light.min.css" integrity="sha512-o5v54Kh5PH0dgnf9ei0L+vMRsbm5fvIvnR/XkrZZjN4mqdaeH7PW66tumBoQVIaKNVrLCZiBEfHzRY4JJSMK/Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<!--To Start the Highlight.js-->
<script>hljs.initHighlightingOnLoad();</script>

<!--Icon Buttons-->
<!--Icons can be found at fonts.google.com/icons, they have a large selection of icons which you can choose from and select to add into your project-->
<!--Play Button-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<!--Pause Button-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<!--Reset Button-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

</head>
<body>
<h1>Merge Sorting</h1>
<h3>---</h3>

<h2>What is Merge Sort</h2>
<p>Merge sort is an efficient, general-purpose, and comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.</p>

<pre><code>
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    # Divide the array into two halves
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]
    
    # Recursively sort the two halves
    left_half = merge_sort(left_half)
    right_half = merge_sort(right_half)
    
    # Merge the sorted halves
    return merge(left_half, right_half)

def merge(left, right):
    merged = []
    left_index, right_index = 0, 0
    
    # Merge the two sorted arrays into a single sorted array
    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            merged.append(left[left_index])
            left_index += 1
        else:
            merged.append(right[right_index])
            right_index += 1
    
    # Append the remaining elements (if any) of the left array
    while left_index < len(left):
        merged.append(left[left_index])
        left_index += 1
    
    # Append the remaining elements (if any) of the right array
    while right_index < len(right):
        merged.append(right[right_index])
        right_index += 1
    
    return merged
</code></pre>

<h2>Complexity</h2>
<h3>T(n) = 2T(n/2) + O(n) or O(nLogn)</h3>

<h2>Examples</h2>
<p>Use the data set and run it on your notebook using the code above ! You should get the result below !</p>
<!--Example Codes-->
<pre><code>
arr = [64, 25, 12, 22, 11]
sorted_arr = merge_sort(arr)
print("Sorted array:", sorted_arr)
</code></pre>
<!--Example Code Results-->
<pre><code>
Sorted array: [11, 12, 22, 25, 64]
</code></pre>

<h2>Advantages of Merge Sort</h2>

<p>
<b>1. Efficiency:</b> Merge sort has a time complexity of O(n log n) in all cases, making it one of the most efficient comparison-based sorting algorithms. It performs well even for large data sets, making it suitable for handling a significant number of elements.
<br>
<br>
<b>2. Stability:</b> Merge sort is a stable sorting algorithm, meaning it preserves the relative order of equal elements. This makes it useful in scenarios where maintaining the original order of equal elements is important.
<br>
<br>
<b>3. Guaranteed Worst-Case Performance:</b> Merge sort guarantees a worst-case time complexity of O(n log n), regardless of the initial order of the input array. This reliability makes it a preferable choice when a consistent and predictable performance is required.
<br>
<br>
<b>4. Parallelization Potential:</b> Merge sort lends itself well to parallelization. The divide-and-conquer approach allows for easy distribution of the sorting process across multiple processors or threads, potentially leading to faster sorting times in parallel computing environments.
</p>

<h2>Disadvantages of Merge Sort</h2>
<p>
<b>1. Space Complexity:</b> Merge sort requires additional memory space to store the temporary subarrays during the sorting and merging process. This additional space requirement can be a disadvantage for sorting large arrays with limited memory availability.
<br>
<br>
<b>2. Non-In-Place Sorting:</b> Merge sort is not an in-place sorting algorithm. It requires additional space proportional to the size of the input array to perform the merging process. As a result, the memory requirement of merge sort can be a limiting factor in memory-constrained environments.
<br>
<br>
<b>3. Recursive Nature:</b> Merge sort relies on recursion, which may lead to function call overhead and potentially cause performance issues for very large input arrays. Iterative sorting algorithms like quicksort might be more efficient in terms of memory usage and function call overhead.
<br>
<br>
<b>4. Complexity in Linked Lists:</b> While merge sort performs efficiently on arrays, it can be less efficient when sorting linked lists due to the additional overhead of merging the linked lists. Traversing and merging linked lists require extra operations and memory accesses, making it less desirable for sorting linked list data structures.
</p>

<div class="chart">
<div id="chart-container"></div>
</div>
<div class="button-container">
<button id="start-btn" onclick="startSorting()"><span class="material-symbols-outlined">play_arrow</span></button>
<button id="pause-btn" onclick="pauseSorting()"><span class="material-symbols-outlined">pause</span></button>
<button id="reset-btn" onclick="resetSorting()"><span class="material-symbols-outlined">replay</span></button>
</div>
<!--Script for the Chart JS-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js"></script>
<script src="merge.js"></script>


</body>