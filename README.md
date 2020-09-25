# Convert-website-to-Dark-Mode-using-single-line-of-CSS

Simple using One line of CSS line to convert your website into Dark-Mode.
# Dark mode can be implemented with a single line of code. Let’s see how it's done and the benefits and drawbacks of this simple approach.

filter: invert(100%)
invert() function as the value of the filter property will take the number from 0 to 1 or percentages from 0% to 100% to invert the colors of the element and its children. Applying filter: invert(1) or filter: invert(100%) results in fully inverted colors.

You can use this single line of CSS to switch the color scheme from light to dark (or the other way around).

To invert the colors of the entire website, you need to apply filter: invert(100%) on the highest-level element of the DOM:
Here is one line of CSS:

# /* CSS File*/
# :root {
# filter: invert(100%);
# }

It Inverts all color of your website.

Now using some javascript we can make perfect Dark-Mode.
We must employ some basic JavaScript by targeting the document.documentElement inside the listener function. Then we can toggle the .dark-mode class on the top of the DOM hierarchy to apply the filter: invert(100%) sitewide.
/* this class will be toggled */
.dark-mode {
  filter: invert(100%)
}

# Javscript Add to the end of your code.

let button = document.querySelector('.btn')

 // press the button to toggle the .dark-mode class
button.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode')
})

The pros and cons of inverting all the pixels
The benefits of making your entire site switch from the light to the dark mode with filter: invert(100%) are obvious: it's a quick and dirty solution. And, like every quick solution, it also has some significant downfalls.

filter applied on the top of the DOM tree is going to cascade down and affect all the child elements. It’s going to invert all the colors. It results with the following list of problems (and let’s pretend that every bullet point ends with: “Additional code is necessary to fix this”):

Media like images and videos gets inverted, and it never looks good (but you probably still want to have the SVGs inverted).


This is to solve all that above problems with a little modification. Like you suggested, inverting the whole page would also be inverting the images which are not a complete solution. We can apply two steps to make it a nearly silver bullet.

# Step #1: invert all elements
html {
  filter: invert(1) hue-rotate(180deg)
}
# Step #2: invert-back and restore image color

Invert and rotate the hue color to 180 degrees to revert and restore the image original color with this below.
img, picture, video {
  filter: invert(1) hue-rotate(180deg)
}
Optional compensation for element that is stubborn.
[class="invert"] {
  filter: invert(1) hue-rotate(180deg)
}
<div class="invert">
  ...
</div>

I made one simple project with Amazing Switch Button and include Dark-Mode function.

![light](https://user-images.githubusercontent.com/47736398/94258629-beaea200-ff4a-11ea-82f7-5f96b4c7cbb9.JPG)

![Dark-Mode](https://user-images.githubusercontent.com/47736398/94258649-c5d5b000-ff4a-11ea-907e-bc9112573f66.JPG)


![Switch](https://user-images.githubusercontent.com/47736398/94258737-f0c00400-ff4a-11ea-87f0-edea3664af9b.JPG)
![switch2](https://user-images.githubusercontent.com/47736398/94258739-f1f13100-ff4a-11ea-8f89-e6de9614ba6d.JPG)
