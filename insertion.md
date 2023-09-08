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
<h1>Insertion Sorting</h1>
<h3>---</h3>

<h2>What is Insertion Sort</h2>
<p>Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time by comparisons. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.</p>

<pre><code>
def insertion_sort(arr):
    n = len(arr)
    
    # Traverse through 1 to n-1
    for i in range(1, n):
        key = arr[i]
        
    # Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
    j = i - 1
    while j >= 0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j -= 1
        
        arr[j + 1] = key
</code></pre>


<h2>Complexity</h2>
<h3>O(n^2)</h3>

<h2>Examples</h2>
<p>Use the data set and run it on your notebook using the code above ! You should get the result below !</p>
<!--Example Codes-->
<pre><code>
arr = [64, 25, 12, 22, 11]
insertion_sort(arr)
print("Sorted array:", arr)
</code></pre>

<!--Example Code Results-->
<pre><code>
Sorted array: [11, 12, 22, 25, 64]
</code></pre>


<h2>Advantages of Insertion Sort</h2>

<p>
<b>1. Simplicity:</b> Insertion sort is one of the simplest sorting algorithms to understand and implement. It involves basic operations like comparing and shifting elements.
<br>
<br>
<b>2. Efficient for Small Lists or Partially Sorted Lists:</b> Insertion sort performs well on small lists or lists that are already partially sorted. It has an average-case time complexity of O(n^2), but it can have a best-case time complexity of O(n) for lists that are already sorted or nearly sorted.
<br>
<br>
<b>3. Adaptive:</b> Insertion sort is an adaptive algorithm, meaning it efficiently handles data sets that are partially sorted. It minimizes the number of comparisons and shifts needed to insert elements in the correct position.
<br>
<br>
<b>4. Space Efficiency:</b> Insertion sort operates in-place, meaning it does not require extra memory beyond the original list to perform the sorting. It only requires a constant amount of additional space for temporary variable storage.
</p>

<h2>Disadvantages of Insertion Sort</h2>

<p>
<b>1. Inefficiency for Large Lists:</b> Insertion sort has an average and worst-case time complexity of O(n^2), where n is the number of elements. This makes it inefficient for large data sets. It performs a significant number of comparisons and shifts, leading to slower performance compared to more advanced sorting algorithms like quicksort or mergesort.
<br>
<br>
<b>2. Lack of Stability:</b> Insertion sort is not inherently stable, but it can be modified to maintain stability. Stability refers to the preservation of the relative order of equal elements during the sorting process. By default, insertion sort may shift equal elements, potentially changing their original order.
<br>
<br>
<b>3. Limited Optimizations:</b> Insertion sort does not offer as many opportunities for optimization as some other sorting algorithms. It has a relatively fixed structure where each element is compared and inserted into its correct position sequentially. Although some variations can improve performance, it is not as versatile in terms of optimization as more complex algorithms.
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
<script src="insertion.js"></script>

</body>