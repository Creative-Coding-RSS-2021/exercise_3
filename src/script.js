import {Pane} from 'tweakpane'


const Fancy = {
    width: 300,
    height: 300,
    fontSize: 200,
    fancytext: 'foo',
    font: 'sans',
    setFancyText: function (fancytext) {
        this.fancytext = fancytext
    },
    draw: function(){
        ctx.clearRect(0, 0, this.width, this.height)

        ctx.font = `${this.fontSize}px ${this.font}`
       

        const textMetrics = ctx.measureText(this.fancytext)
        const {actualBoundingBoxAscent,
        actualBoundingBoxDescent,
        actualBoundingBoxLeft,
        actualBoundingBoxRight} = textMetrics

        const x = actualBoundingBoxLeft * -1
        const y = actualBoundingBoxAscent * -1
        const w = actualBoundingBoxLeft + actualBoundingBoxRight
        const h = actualBoundingBoxAscent + actualBoundingBoxDescent
        
        ctx.save()
        ctx.translate((this.width - w) * .5 -x, (this.height - h) * .5 - y)
        ctx.fillText(this.fancytext, 0, 0)
        //ctx.strokeRect(x,y,w,h)
        ctx.restore()
        
        

        
    }
}


document
    .querySelector('form#fancy')
    .elements['fancytext']
    .addEventListener(
        'input', 
        (e) => {
            Fancy.setFancyText(e.target.value)
            Fancy.draw()
        }
        
    )


/** provide default value */
document
    .querySelector('form#fancy')
    .elements['fancytext']
    .value = Fancy.fancytext

/** download snaphot link */
document
    .getElementById('link')
    .addEventListener(
        'click',
        (e) => e.target.setAttribute('href', canvas.toDataURL("image/png")))


const canvas = document.getElementById('exercise_3')
canvas.width = Fancy.width
canvas.height = Fancy.height
const ctx = canvas.getContext('2d')

const pane = new Pane({container: document.getElementById('pane')})
pane.addInput(Fancy, 'fontSize', {min: 40, max: 400, step: 5});
pane.addInput(Fancy, 'font', {
    options: [
      {text: 'sans', value: 'sans'},
      {text: 'sans-serif', value: 'sans-serif'},
      {text: 'Bangers', value: 'Bangers'},
      {text: 'Dancing Script', value: 'Dancing Script'},
      {text: 'Indie Flower', value: 'Indie Flower'},
      {text: 'Permanent Marker', value: 'Permanent Marker'}
    ],
  });
pane.on('change', (e) => {
    Fancy.draw()
})



Fancy.draw()


    