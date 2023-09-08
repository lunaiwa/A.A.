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
<h1>Bubble Sorting</h1>
<h3>---</h3>

<h2>What is Bubble Sort ?</h2>
<p>Bubble sort is an algorithm that repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed.</p>

<!--Example code for Bubble Sorting-->
<pre><code>
def bubble_sort(arr):
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n - 1):
        
    # Last i elements are already in place
    for j in range(0, n - i - 1):
            
    # Swap if the element found is greater than the next element
    if arr[j] > arr[j + 1]:
        arr[j], arr[j + 1] = arr[j + 1], arr[j]
</code></pre>

<h2>Complexity</h2>
<h3>O(1)</h3>

<h2>Examples</h2>
<p>Use the data set and run it on your notebook using the code above ! You should get the result below !</p>
<!--Example Codes-->
<pre><code>
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print("Sorted array:", arr)
</code></pre>
<!--Example Code Results-->
<pre><code>
Sorted array: [11, 12, 22, 25, 34, 64, 90]
</code></pre>

<h2>Advantages of Bubble Sort</h2>
<p>
<b>1. Simplicity:</b> Bubble sort is one of the simplest sorting algorithms to understand and implement. It involves basic operations like comparing and swapping adjacent elements.
<br>
<br>
<b>2. Easy to Implement:</b> Bubble sort has a straightforward implementation using nested loops. It requires minimal additional data structures, making it easy to code and debug.
<br>
<br>
<b>3. Space Efficiency:</b> Bubble sort operates in-place, meaning it does not require extra memory to perform the sorting. It only requires a constant amount of additional space for temporary variable storage.
<br>
<br>
<b>4. Adaptive:</b> Bubble sort can efficiently handle partially sorted or nearly sorted lists. If the input list is already sorted or nearly sorted, bubble sort's adaptive nature can make it perform better than other sorting algorithms.</p>

<h2>Disadvantages of Bubble Sort</h2>
<p>
<b>1. Inefficiency:</b> Bubble sort is known for its poor time complexity. It has an average and worst-case time complexity of O(n^2), where n is the number of elements to be sorted. This makes it highly inefficient for large data sets.
<br>
<br>
<b>2. Slow for Large Lists:</b> Bubble sort performs multiple passes through the list, repeatedly swapping adjacent elements until the entire list is sorted. For large lists, this can result in a significant number of unnecessary comparisons and swaps.
<br>
<br>
<b>3. Lack of Optimizations:</b> Bubble sort does not offer many optimization opportunities. It always compares adjacent elements, regardless of the previous comparisons or the state of the list. Other sorting algorithms, such as quicksort or mergesort, have better optimizations and can achieve faster sorting times.
<br>
<br>
<b>3. Lack of Stability:</b> Bubble sort is not a stable sorting algorithm. Stability refers to the preservation of the relative order of equal elements during the sorting process. Bubble sort may swap adjacent elements even if they are equal, potentially changing their original order.</p>

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
<script src="bubble.js"></script>

</body>