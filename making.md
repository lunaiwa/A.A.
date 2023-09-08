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

</head>
<body>
<h1>About</h1>
<h3>---</h3>

<h2>Code Blocks ?</h2>
<p>When making this website I wanted to display code just like how we display code on the Jupyter notebooks. I went into the notebooks .md and found the code <b><\pre></b> and <b><\code></b>. I ended up using that but the result looked way different compared to the notebook. I added a box around the code and looked up ways I could highlight the code to point out specific parts.</p>

<p>After looking around for simpler ways to highlight the code without using lots and lots of css, I found <b><a href="https://highlightjs.org/">highlight.js</a></b> this allowed for my code to be highlighted simply and after making the box a little beveled it finally ended up looking like the Jupyter notebook code block.</p>

<pre><code>
print('that is how i made this!')
</code></pre>

<h2>Icons and Fonts</h2>

<p>
The fonts chakra petch, palette mosaic, and slackside one is all from the google.fonts.com so are the icons used for the sorting charts.
</p>


</body>
