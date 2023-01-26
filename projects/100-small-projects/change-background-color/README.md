# Generate random color

I will be using the rgb (red, green, blue) color model to paint my html body element :) simple. Each color channel is expressed from 0 (least saturated) to 255 (most saturated). [Learn more about rgb (Wikipedia)][1]

Of course, you have freedom to use any color model out there like hex or hsl. But here I will use rbg which is much easier than any of them :)

## Explanation

This will generate random number between 0 - 255

```js
const randomNumber = () => {
    return Math.floor(Math.random() * 256); 
}
```

But we need for all three colors, simple.
The generateColor will create three individual color code for red, green and blue, then it will return the rgb color code as a string.

Example of a rgb color:

```css
body {
    background-color: rgb(100, 50, 200);
}
```

```js
const generateColor = () => {
    const red = randomNumber(),
        green = randomNumber(),
        blue = randomNumber();

    return `rgb(${red}, ${green}, ${blue})`;
}
```

[1]: https://en.wikipedia.org/wiki/RGB_color_model