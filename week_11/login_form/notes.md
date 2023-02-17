# login Form 3

## Description: 
This is a login form that I found to get some simple practice on building a login form.

There is one feature that displays an error message if you press the login button before there is anything typed into the input. 

The button changes colors when you hover it to indicate when you are over top of it with your mouse.

## Problems
This one was giving me issues with adding a single class to the inputs to show and hide the input errors


## Solution

HTML: 
```html
    <div class="inputGroup">
        <input type="text" placeholder="Email">
    </div>
    <div class="inputGroup password">
        <input type="text" placeholder="Password">
        <div class="icon">
            <img src="../../images/icons/icon_eye_filled.png" alt="">
        </div>
    </div>
    <div class="inputGroup error">
        <input type="text" placeholder="error">
        <div class="error show">Error text</div>
    </div>

```

CSS:
``` css
/* By defauly I hide the error message */

.inputGroup.error .error {
    display: block;
}

/* I selected the inputGroup in the error state to get the error to show */
.inputGroup .error {
    color: var(--color-error);
    padding-top: var(--space-0_25);
    display: none;
}
```