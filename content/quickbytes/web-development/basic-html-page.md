---
title: Creating a Basic Web Page with HTML
date: 2019-07-06T15:27:17.000+06:00
bg_image: "/uploads/silvio-kundt-fixg8kipog8-unsplash.jpg"
description: This lesson provides a basic introduction to developing a web page. At
  the end, a simple page with a header and paragraph will be displayed.
image: images/courses/programming.svg
type: research
author: Richard Martin
category: Programming
tags:
- Web Development
- HTML
nextLessonURL: https://dropbyte.us/bytes/images-links
nextLessonName: 'Next: Images and Links'
layout: guide
custom: true

icon: logo-html5

---
### Getting Started

This lesson will walk you through creating a basic web page. At the end, you'll have a web page that says "Hello, World!" in large, bold letters, and a short introduction for yourself in small letters under it. 

Note: This lesson assumes that you have a text editor (Text Editor, Notepad, Notepad++, Visual Studio Code, etc.) installed. If you do not have one, please install one first.

#### Document Setup

The beginning of every HTML document needs to identify itself as an HTML document first:
```
<!DOCTYPE html>
```

Next, we add the `<html>` tags, the `<head>` element, and the `<body>` element:
```
<!DOCTYPE html>
<html>
    <head>

    </head>

    <body>

    </body>
</html>
```

The `<html>` tag is like the covers of the book: everything that is in the web page needs to be inside these tags. 
The `<head>` tag holds important information about the website - think of it as the publisher page. 
The `<body>` tag is what holds everything that the website shows, the pages of the book. The good stuff.

### Building a Web Page

#### The `<head>` tag
In our `<head>` tag, we'll need to add some information about the webpage:
```
<head>
    <meta charset="utf-8">
    <meta name="author" content="Your Name Here">
    <title>Your Name Here</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
```

There are four lines of code here that each do distinctive things:
* `<meta charset="utf-8">` defines how computers read your website. This is very important.
* `<meta name="author" content="Your Name Here">` writes your name as the author of the website.
* `<title>Your Name Here</title>` titles the website. It's what you see in the tab and in Google.
* `<link rel="stylesheet" href="css/styles.css">` adds styling to your website. We'll get back to this later.  

<br></br>

At this point, you can actually save it as `index.html` and open it in a web browser, but if you open it, you won't see anything yet. Let's add some content!

#### Adding Content
Here's where the fun starts. As you may have noticed, every tag has an opening tag `<html>` and a closing tag `</html>`. This is true for most tags, unless they do not hold content. Here are a few tags you might encounter:

| Tag 	| Purpose 	| Example 	|
|-	|-	|-	|
| `<h1>` 	| A Header. Headers are usually used to convey important information or group information. Headers are available as `<h1>` through `<h6>`, with `<h6>` being the smallest variant. 	| `<h1>Welcome</h1>` 	|
| `<p>` 	| A Paragraph. While text can be written anywhere in an HTML document, it's a best practice to keep most information in `<p>` elements. 	| `<p>Lorem ipsum dolor sit amet</p>` 	|
| `<img>` 	| An Image. They're a little more complicated as they require some extra info, but they sure are nice! 	| `<img src="img/cat-pic.png alt='A photo of my cat"/>` 	|

So, let's add a Header and some text to our website. Check out the following code:
```
<body>
    <h2>Hello, World!</h2>
    <p>This is my first website, written in HTML!</p>
</body>
```

When you add this code to your `<body>` tag and save the file, you'll be able to see some progress! As you see from above, the `<h2>` tag is a header tag, making it large and bold. The text below is a `<p>` tag, which is great for more information. All together, your code should look like this:
```
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
```

We'll cover styling and images in the next lesson.

### A Quick Recap
1. All documents start with `<!DOCTYPE html>`, and have both a `<head>` and a `<body>`.

2. Tags open and close when they hold text and tags, like our `<h2>Hello, World!</h2>`.

3. Every `<head>` needs to establish a character set `<meta charset="utf-8">` and needs a `<title>`.

4. Headers can be big (`<h1>`) or small (`<h6>`), or anything in between.

5. Paragraphs and other text is displayed with `<p>`.