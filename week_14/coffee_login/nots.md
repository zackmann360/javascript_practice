# Coffee Login

## Description: 
This is a project from google images. It has some cool functions. You are able to create your own username and password. The username and password that you create can then be used to sign into your account. 


## Problem(s):

1. I was having a problem getting the input lables to stay up when focused and when the placeholder is not shown (placeholder is not shown when you type into the input).


## Solution:
I added a second sudo selector one for focus and one for place holder not shown

CSS:
```css
.inputGroup input:focus ~ .label,
.inputGroup input:not(:placeholder-shown) ~ .label {
    top: 0;
    font-size: 0.8rem;
}
```

2. I was having a problem with selecting the correct page to show an hide.

- first I was trying to select the currently active page and removing show from that one and then addind show to the page I wanted to show.

JAVASCRIPT BEFORE:
```javascript
var current = document.querySelector('.show')
current.classList.remove('show')
```

   
## Solution 
   
- Then I realized I can remove show from the page I am on and add show to the page I want to select 

JAVASCRIPT AFTER:
```javascript
pageLogin.classList.remove('show')
pageSuccess.classList.add('show')
```