document
    .querySelector('form#fancy')
    .elements['fancytext']
    .addEventListener(
        'input', 
        (e) => console.log(e.target.value)
    )