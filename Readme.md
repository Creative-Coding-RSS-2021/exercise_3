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

to apply a new input value we will need to define a `function` inside our object, that do it for us.

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


