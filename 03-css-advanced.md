1. Critical Render Path - Browser Requests in sequence
    a. request html
    b. request css
    c. request fonts google

CSS is a render blocking file. The page will not render untill the CSS file is loaded.

Faster Loaading:
- have local font files
- smaller css file (minifying removes all whitespace so number of bytes sent over netowrk is less).


2. Flexbox Layout

3. CSS 3
   transition: all 1s;
   transform: scale(1.1);
   animation
   
4. Browser Compatibility
   box-shadow: 4px 4px 5px red;

   -moz-box-shadow: 4px 4px 5px red
   
    -moz-     /* Firefox and other browsers using Mozilla's browser engine */
    -webkit-  /* Safari, Chrome and browsers using the Webkit engine */
    -o-       /* Opera */
    -ms-      /* Internet Explorer (but not always) */ 

5. Responsive UI
websites render correctly on all screen sizes.

6. 