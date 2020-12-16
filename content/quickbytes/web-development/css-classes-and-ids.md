+++
author = "Richard Martin"
bg_image = "/uploads/silvio-kundt-fixg8kipog8-unsplash.jpg"
category = "Programming"
date = 2019-07-06T09:27:17Z
description = "This lesson provides an overview of Sections, Divs, and Spans. We'll use these elements to group things on our web page."
image = "/uploads/undraw_online_connection_6778.svg"
nextLessonName = "Next: Layouts with FlexBox"
nextLessonURL = "https://dropbyte.us/bytes/layouts-with-flexbox"
tags = ["Web Development", "HTML"]
title = "CSS Classes and IDs"
type = "research"
layout = "guide"
custom = true

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

Remember how we added the `id`s to our `<section>` elements? Now, we're going to use those and their partners, `class`es, to select specific elements.

### Adding Classes

Eventually, we're going to want our profile and navigation on the left, and our content on the right. So, we're going to wrap our sections in `<div>` elements and give them classes. Here is our profile:

    <div class="sideBar">
    	<section id="profile">
    		<img src="images/finger-monkey.jpg" alt="a little finger monkey"/>
               <div>
                  <h2>Hello, <span>I'm Richard</span></h2>
                  <a href="https://richdmart.in">My Website</a>
                <div>
            </section>
     </div>

And here is our content:

    <div class="content">
    	<section id="work">
            <h3>Work History</h3>
        </section>
        <section id="education">
            <h3>Education</h3>
        </section>
    </div>

What we've done here is made a "sideBar" class for our profile and a "content" class for our content. They can be selected like so in CSS:

    .sideBar {
    	[properties]
    }
    
    .content {
    	[properties]
    }

So, the `.` followed by the `class` name is used to select a `class` in CSS.

### So, What are IDs?

An `id` is much like a class, but where classes can be shared by multiple elements, an `id` can only be used once. The benefit is navigation and precise styling. Here's how you select an `id` in CSS:

    #profile {
    	[properties]
    }
    
    #work {
    	[properties]
    }
    
    #education {
    	[properties]
    }

As you can see, an `id` is selected using the `#` symbol before the `id`.

Next, we'll take a look at layouts.

### A Quick Recap

* A `class` can be shared by multiple elements and is selected in CSS with a `.`.
* An `id` can only be used once, but in turn provides navigation and precise customization. It is selected with `#`.