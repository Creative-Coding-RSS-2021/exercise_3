# Exercise 3. Rendering Bitmap :pencil:

**Exercise Goal**: Develop a web app, that converts inputs into art.

## Lesson 1. Input

**Goal**: To know how to input text.

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
        (e) => console.log(e.target.value)
    )
```

:point_right:  **Task**  try to add `button` element like [here](https://www.w3schools.com/tags/att_button_form.asp) and submit a form. what result would you get?




