
## Description: 
This login form was one that I found intersting, its not just a form but it has a form and an image next to it.

I wanted to test out my html and css skills and this was a great form to practice with.

I got to use display: grid to set the form and the image next to each other. 

I also learned more about sizing my images to fit its container rather than size the image manually with a static width and height.

## Problems
I ran into an issue when I went to size the image to the container. The image wasn't taking up the full height of the container. 

## Solution
 
CSS:
``` css
.app .rightSide {
    background-color: green;
    position: relative;
    flex: 1;
    
}
.app .rightSide .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;

}
```