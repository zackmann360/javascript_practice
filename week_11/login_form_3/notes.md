# login Form 3

## Description: 
This is a login form I found on dribbble.com. This form has a few nice features, when you do no type anything in the input fields you will get an error. 

When you start typing in the input fields the error will be removed from that input field. 

If you do not type the correct values into the input fields you will get a error for incorrect credentials and it will tell you what the email and password should be. 

Once you type in the correct credentials you will be directed to a successfull login page where you will see a cool cat gif. 

## learned 
This project helped me learn how to set a class on the main container to show and hide the error messages. 


Example: I can show and hide this error message by adding the class error to inputGroup.

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
.inputgroup .error{
    display: none;
}

/* I can select the inputGroup in the error state to get the error to show */
.inputGroup.error .error{
    dispay: block;
}
```


