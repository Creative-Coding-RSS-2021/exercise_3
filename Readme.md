# Exercise 3. Rendering Bitmap :pencil:

**Exercise Goal**: Develop a web app, that converts inputs into art.

## Lesson 1. Input

:dart: **Goal**: To know how to input text.

We will do it for the text first. For that we will use html `form` element like `input`([docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input))

````
<form id="fancy">
    <input type="text" name="fancytext" />
</form>
````

To obtain input values on the fly, we will start lisiting it with [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) EventListener.

```
document
    .querySelector('form#fancy')
    .elements['fancytext']
    .addEventListener(
        'input', 
        (event) => console.log(event.target.value)
    )
```

:point_right:  **Task**  try to add `button` element like [here](https://www.w3schools.com/tags/att_button_form.asp) and submit a form. what result would you get?




## Lesson 2. Object

:dart: **Goal**: To know how to use a javascript Object. 

It is not very practical to keep work with the value we've obtained in the same event listener function. We need to put it elsewhere. For that we can use a javascript [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects).

````
const Fancy = {
    fancytext: ''
}
````

now we will can define a `function` inside our object, so we can change a value of `fancytext` property. (*Actually we can also do it also without any function, just directly*)

````
const Fancy = {
    fancytext: '',
    setFancyText: function (fancytext){
        this.fancytext = fancytext
    }
}
````

so we can use it in our listener function:
```
document
    .querySelector('form#fancy')
    .elements['fancytext']
    .addEventListener(
        'input', 
        (event) => Fancy.setFancyText(event.target.value)
    )
```

:point_right:  **Task**  Change default value of `Fancy.fancytext` and provide it as a default value to form `input` element. 



## Lesson 3
:dart: **Goal: create image files out of text**

Now we are ready to get back to out `canvas` element.

Here we will put a text we store in `Fancy.fancytext` into `canvas` element with canvas `fillText` function. Please take a look at [docs](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text). To place a text properly you will most likely need a [TextMetrics](https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics) intance of your canvas text. To get it you will need to call `ctx.measureText(text)`

To download a resulting cavas as an image, you can convert it simply to URL with `canvas.toDataURL("image/png")` 

#### Addon: Change Parameter
You will probaly would like to play with a font-size or font itself before you download it as an image. For it you can use a [tweakpane](https://cocopon.github.io/tweakpane/) library.

```
$ yarn add tweakpane
```

:point_right:  **Task** checkout a `lesson3` branch and play with an implemented example by changing/hacking the values you want.




