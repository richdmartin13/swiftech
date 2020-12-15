+++
author = "Richard Martin"
bg_image = "/uploads/silvio-kundt-fixg8kipog8-unsplash.jpg"
category = "Programming"
date = 2019-07-06T09:27:17Z
description = "This lesson shows you how to add CSS styling to a web page."
image = "/uploads/undraw_wall_post_83ul.svg"
nextLessonName = "Next: Grouping Elements"
nextLessonURL = "https://dropbyte.us/bytes/grouping-elements"
tags = ["Web Development", "HTML"]
title = "Basic CSS"
type = "research"

icon = "logo-css3"
+++
### Getting Started

You'll need the code that we created in the last lesson, [https://dropbyte.us/bytes/images-links/](https://dropbyte.us/bytes/images-links/ "Images and Links")**.** We have it copied below, but we strongly suggest checking out the last lesson if you haven't already.

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="author" content="Your Name Here">
            <title>Your Name Here</title>
            <link rel="stylesheet" href="css/styles.css">
        </head>
    
        <body>
            <img src="images/finger-monkey.jpg" alt="a little finger monkey"/>
            <h2>Hello, I'm Richard</h2>
            <a href="https://richdmart.in">My Website</a>
        </body>
    </html>

Here, we have an image, a header, and a link, but they're all kind of just thrown onto our web page. Remember our line of code in our `<head>`, the `<link rel="stylesheet" href="css/styles.css">`? Now it's time to use it.

### Adding Some Styling

Make a new folder in your project directory (the same folder as `index.html`) named `css`. Like our `images` folder does with images, this folder will hold only CSS files.

Create a new file named `styles.css`. You'll notice that we now have a file in the same location that we referenced in our `<link>` element. Then, in your `styles.css`:

    html, body {
    	background-color: #fefefe;
    }
    
    h2 {
    	color: blue;
        text-align: center;
        text-transform: uppercase;
    }
    
    img {
    	width: 200px;
        margin: 20px;
    }
    
    a {
    	text-align: center;
        color: #212121
        text-decoration: none;
    }

This is CSS, or Cascading Style Sheets. This means that information that comes later in the document is prioritized over information that is presented earlier. Let's dive into the code:

`html`, `body`, `h2`, `img` and `a` in this document are _selectors_. They pick specific elements on an HTML page and edit their _properties_. A few of the properties I've changed are:

* `background-color`: Just like it sounds, this is the background color. I've applied it to `html` and `body` here, so the background color of the website will be an off-white.
* `color`: This is the color of text, and it won't change the color of anything else. I've made the header blue here.
* `text-align`: This controls the alignment of the text, with either `start` (the left side in English pages), `end` (the right side), or `center`.
* `text-transform`: I used this here to make all the text uppercase. It's just because I didn't want to use Caps Lock.
* `width`: This controls the width of the element. Pretty plain and simple.
* `margin`: The margin is an area _outside_ of an element in which there should be spacing. On the other hand, `padding` is the area inside which is used for spacing.
* `text-decoration`: I don't like the underline that comes on links, so I got rid of it.

You can now save this file and open your web page by clicking on `index.html`. You should see the changes we made! Things are starting to look up, but now we should start grouping things.

A more complete list of CSS Properties can be found at [**W3Schools**](https://www.w3schools.com/cssref/default.asp). Next, we'll get into the `<section>`, `<div>` and `<span>` elements.

### A Quick Recap

* CSS uses the _selectors_ the with the same names as HTML _elements_.
* CSS can modify certain _properties_ of HTML elements
* Style Sheets are linked to HTML documents by including `<link rel="stylesheet" href="sheet.css">` in the `<head>` of the document.