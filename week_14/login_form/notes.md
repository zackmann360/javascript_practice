# Adobe Tabs

## Description: 
This is a login form I found on the "EpicGames.com". It has some functions where you must enter the correct credentials to login. If the incorrect credentials are entered you will get an error message around both email and password. When you enter the correct email and password you will be directed to a successful login page. 

## Problem(s):

### 1.  Show and Hide different pages
- I was having issues setting a single class to hide the form and then show to successful login page when the correct credentials were entered.

**Solution**:

- I set the the page to display none by default

CSS:
```css
.wrapper .app {
    ...
    display: none;
}
```


- Then I added a class "show" with "display: block" to the app to show them.

HTML:
```html

<div class="app show"></div>

```
CSS:
```css

.wrapper .app.show {
    display: block;
}
```

### 2. I was having an issue with the if statments.
   - (=) means set, (==) is equal, and (===) is exactly equal
   - After figuring out the correct operator I realized I didnt have to set the value =, ==, or === to true

## Solution:
JAVASCRIPT:
```javascript
if(emailInput.value && passInput.value){}
``` 
