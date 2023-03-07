# Adobe Tabs

## Description: 
This project was found on the adobe website. This project is a tab selector that changes the content on the page to the content in the tab you select. 

## Problem(s):
I was having issues getting to show the correct tab content. 

## Solution:
Added a unique identifier to the tab content pages.
HTML:
```html
<div class="tabContent show" id="tab1">
</div>
```

Added a unique attribute to the tab containers to use the attribute as the selector.
HTML:
```html
<div tabNum="tab1" class="tab border">Overview</div>
```

Used the attribute tabNum as the selector to add the class show to the selected tab.

```js
function onclickTab(){
    ...

    // removing
    var currentTab = app.querySelector('.show')
    currentTab.classList.remove('show')
    // showing
    var tabNum = this.getAttribute('tabNum')
    document.querySelector("#" + tabNum).classList.add('show')
}
```