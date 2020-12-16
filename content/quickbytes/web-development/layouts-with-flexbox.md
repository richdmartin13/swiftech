+++
author = "Richard Martin"
bg_image = "/uploads/silvio-kundt-fixg8kipog8-unsplash.jpg"
category = "Programming"
date = 2019-07-06T09:27:17Z
description = "This lesson provides an overview of Sections, Divs, and Spans. We'll use these elements to group things on our web page."
draft = true
image = "/uploads/undraw_building_websites_i78t.svg"
nextLessonName = "Next: CSS Classes and IDs"
nextLessonURL = "https://dropbyte.us/bytes/css-classes-and-ids"
tags = ["Web Development", "HTML"]
title = "Layouts with FlexBox"
type = "research"
layout = "guide"
icon = "logo-css3"

+++
### Getting Started

You'll need the code that we created in the last lesson, [**Grouping Elements**](https://dropbyte.us/bytes/grouping-elements/). We've copied that HTML and CSS for you here.

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
            <section id="profile">
    			<img src="images/finger-monkey.jpg" alt="a little finger monkey"/>
                <div>
                    <h2>Hello, <span>I'm Richard</span></h2>
                    <a href="https://richdmart.in">My Website</a>
                <div>
            </section>
            <section id="work">
                <h3>Work History</h3>
            </section>
            <section id="education">
                <h3>Education</h3>
            </section>
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
    
    div {
        width: 300px;
    }
    
    span {
        color: grey;
    }

We're starting to get some content, but we have yet to lay it out. Let's get started.

### FlexBox

FlexBox is a built-in CSS framework that makes responsive layouts incredibly simple. A responsive layout considers the screen size when displaying elements, so things don't get cut off the screen.

What we want is our Profile to be on the left, and our content to be on the right. 

### A Quick Recap

* Each of the three containers has a different purpose.
* The `<section>` element groups large parts of the page together, and can be navigated to with an `id`.
* The `<div>` groups elements together and is great for creating repeatable code.
* The `<span>` element can be used to make fine adjustments to text inside other tags.