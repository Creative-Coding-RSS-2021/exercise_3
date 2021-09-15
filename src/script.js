const Fancy = {
    fancytext: 'foo',
    setFancyText: function (fancytext) {
        this.fancytext = fancytext
    }
}

document
    .querySelector('form#fancy')
    .elements['fancytext']
    .addEventListener(
        'input', 
        (e) => Fancy.setFancyText(e.target.value)
        
    )


/** provide default value */
document
    .querySelector('form#fancy')
    .elements['fancytext']
    .value = Fancy.fancytext
