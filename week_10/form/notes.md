# Nintendo Form

## Description
I found this project on the nintendo website. I went to the login page and clicked on signup. This project interested me since I have not done any form projects yet. 

## Problems
**Problem:** An issue that occured was getting the height of the border for the label. 

**Solution:** I set a line-height for the text.

---   

**Problem:** Another issue that accured was with the check boxes, I was unaware that you could use a single class to select wheter it is checked or not. 

**Solution:** I added a class to checkBox call checked. This allowed me to use the parent selector to show and hide the child. 

``` css
    .checkBox .icon img.image2 {
        display: none;
    }

    .checkBox.checked .icon img.image2 {
        display: block;
    }
    .checkBox.checked .icon img.image1 {
        display: none;
    }
```