---
title: Images and Links
date: 2019-07-06T15:27:17.000+06:00
bg_image: "/uploads/silvio-kundt-fixg8kipog8-unsplash.jpg"
description: This lesson provides a basic introduction to developing a web page. At
  the end, a simple page with a header and paragraph will be displayed.
image: "/uploads/image-upload.svg"
type: research
author: Richard Martin
category: Programming
tags:
- Web Development
- HTML
nextLessonURL: https://dropbyte.us/bytes/basic-css
nextLessonName: 'Next: Basic CSS'

icon: image

---
### Getting Started

You'll need the code that we created in the last lesson, [**Creating a Basic Web Page with HTML**](https://dropbyte.us/bytes/basic-html-page/)**.** If you don't have it ready, you can copy it here:

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="author" content="Your Name Here">
            <title>Your Name Here</title>
            <link rel="stylesheet" href="css/styles.css">
        </head>
    
        <body>
            <h2>Hello, World!</h2>
            <p>This is my first website, written in HTML!</p>
        </body>
    </html>

So, let's get started. Our goal here is to make a personal website, so go ahead and change the `Hello, World` text in our `<h2>` to `Hello, I'm` and your name. Then, delete our `<p>` element.

### Links

Links allow different web pages to be _linked_ together. You might use them to make a multiple page website, reference other websites, or connect your social media. Here, we'll do the latter. If you have a [Twitter](https://twitter.com), [Instagram](https://instagram.com) or [Facebook ](https://facebook.com)account, go ahead and copy the links to your profiles. Then, we'll put them in our code like this:

    <a href="https://richdmart.in">My Website</a>

You'll see here that `<a>` tags take an `href` attribute and hold some content. In this case, `href` is the URL for wherever you want your link to go. The content is the title of the link. So, we'll add that to our `<body>` tags, just after the `</h2>:`

        <body>
            <h2>Hello, I'm Richard</h2>
            <a href="https://richdmart.in">My Website</a>
        </body>

And that's all you need to do to add a link!

### Adding an image

In your project directory, in the same folder as your `index.html` file, create a new folder named `images`. Then, we'll need an image to use. We're going to use [this image of a finger monkey](https://i.pinimg.com/originals/7a/2d/e3/7a2de35af4e54c07541ef5fc9313db63.jpg), just because we like them. Since this is a personal website, you might want to use a photo of yourself, but we won't tell if you'd rather use the finger monkey. For the purposes of this tutorial, we've saved it as `finger-monkey.jpg`. Go ahead and add an `<img>` tag above your `<h2>` element:

        <body>
        	<img src="images/finger-monkey.jpg" alt="a little finger monkey"/>
            <h2>Hello, I'm Richard</h2>
            <a href="https://richdmart.in">My Website</a>
        </body>

The `<img>` tag works a little differently than some of the other tags we've seen before: it has no body! Instead, it has _attributes_: data that you have to pass into it. First, let's look at `src`: this is short for source, and it's the path to your image. Because we have the file, we are using `images/finger-monkey.jpg`, but we could just as easily use the link to the file on the internet (but I won't include it here because it's a pretty long link.)

### A Quick Recap

* Links are created with anchor tags `<a>` and have an `href` attribute that contains the URL for a website. The content of the tag is the title of the link.

* Images are kept in a subfolder of the project, in the same folder as our `index.html` file.

* Images (`<img>`) have special attributes, like the image path (`src`) and the accessibility caption (`alt`).

* **src** refers to the source of an image, or the location relative to our `index.html`.

* **alt** is the alternate description for an image, which is used when the web page can't find the image file or for accessibility reasons.