+++
author = "Richard Martin"
bg_image = "/uploads/silvio-kundt-fixg8kipog8-unsplash.jpg"
category = "Programming"
date = 2019-07-06T09:27:17Z
description = "This lesson provides an overview of Sections, Divs, and Spans. We'll use these elements to group things on our web page."
image = "/uploads/undraw_building_websites_i78t.svg"
nextLessonName = "Next: CSS Classes and IDs"
nextLessonURL = "https://dropbyte.us/bytes/css-classes-and-ids"
tags = ["Web Development", "HTML"]
title = "Grouping Elements"
type = "research"
layout = "guide"
custom = true

icon = "logo-html5"

+++
### Getting Started

You'll need the code that we created in the last lesson, Basic CSS**.** We've copied that HTML and CSS for you here.

`index.html`:

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

`styles.css`:

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

We've got a few elements on the page with a little bit of styling. Now we're going to group our top section and add a few other sections.

### Adding Sections

Sections are large containers for HTML elements and are usually used to separate large parts of pages. We're going to add a top "profile" section, a "work" section, and an "education" section. Let's look at the following code in our `<body>`.

        <body>
        	<section id="profile">
            	<img src="images/finger-monkey.jpg" alt="a little finger monkey"/>
            	<h2>Hello, I'm Richard</h2>
            	<a href="https://richdmart.in">My Website</a>
            </section>
            <section id="work">
            	<h3>Work History</h3>
            </section>
            <section id="education">
            	<h3>Education</h3>
            </section>
        </body>

You'll see we've added three sections, each with a different `id`. The `id` attribute is useful for two reasons: they each get their own CSS selector (more on that later) and we can navigate directly to them. I've also added headings to each section.

### Grouping Like Elements

We're starting to see some more structure, but we've still got a long way to go. Let's add a `<div>` element to our profile to spiff things up:

        	<section id="profile">
            	<img src="images/finger-monkey.jpg" alt="a little finger monkey"/>
                <div>
            		<h2>Hello, I'm Richard</h2>
            		<a href="https://richdmart.in">My Website</a>
                <div>
            </section>

The `<div>` element is really just for grouping elements, but you can do some pretty powerful things to them with CSS. Here's some basic stuff to get things looking better:

    div {
    	width: 300px;
    }

Now, the div and everything inside it have a `width` of 300px.

### Fine Tuning

`<section>` and `<div>` are great for grouping elements, but what about changing small parts of text? That's where we use `<span>`. We're going to take our blue title, and make only our name grey.

`index.html`:

    <h2>Hello, <span>I'm Richard</span></h2>

`styles.css`:

    span {
    	color: grey;
    }

Now, you'll see that just your name is grey, and everything else looks the same.

### A Quick Recap

* Each of the three containers has a different purpose.


* The `<section>` element groups large parts of the page together, and can be navigated to with an `id`.
* The `<div>` groups elements together and is great for creating repeatable code.
* The `<span>` element can be used to make fine adjustments to text inside other tags.