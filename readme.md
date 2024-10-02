## Jquery include HTML

A better way to include documents when using HTML. (Actually a dumber idea but who cares? It's Jquery) :D

This script brings the "PHP include" function to HTML by doing the same thing as "PHP include" (kinda). Since Github is not providing PHP or any server-side code to us I decided to find other solutions to my problems.
This is basically HTML include HTML by W3Schools but with Jquery. <a href="https://www.w3schools.com/howto/howto_html_include.asp" target="blank">Click here</a> to visit W3Schools documentation.

## Requirements

- Brain
- Latest Jquery library

## How to use?

1. Download or link the latest Jquery library via CDN into your &lt;head&gt; like this: &lt;script src="/path/to/jquery.js"></script&gt;.

2. Download the script.js file and include it in your &lt;head&gt; like this: &lt;script type="text/javascript" src="/path/to/script.js"></script&gt;.

3. Create a document that you want to include into your main index.html and write the stuff you need to write into it.

4. In your main index.html create an element like: &lt;header&gt; and add the "include-html=" argument into the tag. It should look like this: &lt;header include-html="/path/to/included/index.html" class="header"&gt;.
   
IT'S IMPORTANT TO LOAD THE JQUERY LIBRARY BEFORE THE SCRIPT.JS OR IT WILL NOT WORK.

## Difference from W3Schools script

- Built on top of Jquery
- Does NOT require the &lt;script> includeHTML(); </script&gt; argument at the bottom of the page

## Known issues

- Scripts inside the included document(s) are working with workarounds but by default it ends up breaking with no error in the console. It's some DOM releated stuff I can't figure out. I hate JavaScript.

<img src="/fasz.jpg" alt="fasz" width="75px" height="75px" align="center">

## Live demo

Check out the repository or the source code in dev tools of my personal website where I use this technology to test, debug and update if needed. (I'm also a consumer of this product.)

<a href="https://szeccsa.github.io/" target="blank">Click here to visit my website</a>

<a href="https://github.com/Szeccsa/szeccsa.github.io" target="blank">Click here to visit the repository of my website</a>

Markdown is not supporting the target="_blank" argument in the anchor tag but it's there, basszam meg a száját. (Some angry Hungarian swearing)
