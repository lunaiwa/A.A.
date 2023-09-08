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
<h1>Selection Sorting</h1>
<h3>---</h3>

<h2>What is Selection Sort</h2>
<p>Selection sort is an in-place comparison sorting algorithm. It has an O(n²) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort.</p>

<!--Example Coding for Selection Sorting-->
<pre><code>
def selection_sort(arr):
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n):
        
    # Find the minimum element in the remaining unsorted array
    min_idx = i
    for j in range(i + 1, n):
        if arr[j] < arr[min_idx]:
            min_idx = j
        
    # Swap the found minimum element with the first element
    arr[i], arr[min_idx] = arr[min_idx], arr[i]
</code></pre>

<h2>Complexity</h2>
<h3>O(n^2)</h3>

<h2>Examples</h2>
<p>Use the data set and run it on your notebook using the code above ! You should get the result below !</p>
<!--Example Codes-->
<pre><code>
arr = [64, 25, 12, 22, 11]
selection_sort(arr)
print("Sorted array:", arr)
</code></pre>
<!--Example Code Results-->
<pre><code>
Sorted array: [11, 12, 22, 25, 64]
</code></pre>

<h2>Advantages of Selection Sort</h2>
<p>
<b>1. Simplicity:</b> Similar to bubble sort, selection sort is relatively easy to understand and implement. It involves basic operations like finding the minimum element and swapping elements.
<br>
<br>
<b>2. Space Efficiency:</b> Selection sort operates in-place, meaning it does not require extra memory beyond the original list to perform the sorting. It only requires a constant amount of additional space for temporary variable storage.
<br>
<br>
<b>3. Best Case Performance:</b> Selection sort performs well in terms of best case time complexity. Regardless of the input order, it always performs the same number of comparisons and swaps. The best case time complexity is O(n^2), where n is the number of elements, but it may be more efficient than other algorithms with the same time complexity, such as bubble sort.
</p>





<h2>Disadvantages of Selection Sort</h2>
<p>
<b>1. Inefficiency:</b> Selection sort has an average and worst-case time complexity of O(n^2), where n is the number of elements. This makes it inefficient for large data sets. It performs a significant number of comparisons and swaps, even if the list is partially sorted.
<br>
<br>
<b>2. Lack of Adaptiveness:</b> Selection sort does not adapt to the input list's initial order. It always performs the same number of comparisons and swaps, regardless of the list's pre-existing order. This lack of adaptiveness makes it less efficient compared to adaptive sorting algorithms for partially sorted or nearly sorted lists.
<br>
<br>
<b>3. Lack of Stability:</b> Selection sort is not a stable sorting algorithm. Stability refers to the preservation of the relative order of equal elements during the sorting process. Selection sort may swap adjacent elements, potentially changing their original order.
<br>
<br>
<b>4. Limited Optimizations:</b> Selection sort does not offer many opportunities for optimization. It always scans the entire unsorted portion of the list to find the minimum element and performs a swap. Other sorting algorithms, such as quicksort or mergesort, have better optimizations and can achieve faster sorting times.
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
<script src="selection.js"></script>

</body>