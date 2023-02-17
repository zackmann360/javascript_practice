# login Form 3

## Description: 
This is a login form that I found to get practice with building them. 

This form has some cool ui, if you don't enter anything into the input field you will get an error that tells you that you need to enter something.

When you type both user name and password incorrectly you will recieve a hint that tells you what the correct username and password are.

Once the user name and password are correct you will be directed to a successful login page. 

## Problems
I was having issues with making a single class to show and hide the errors for the inputs. 


## Solution

HTML: 
```diff
-   <div class="inputGroup">
+   <div class="inputGroup error">
        <input type="text" placeholder="placeholder">
        <div class="icon">
            <span class="material-symbols-outlined">
                mail
            </span>
        </div>
        <div class="error">error</div>
    </div>

```

CSS:
``` css
/* By defauly I hide the error message */

.inputGroup.error .error{
    display: block;
}

/* I selected the inputGroup in the error state to get the error to show */
.inputGroup.error .error{
    display: block;
}
```