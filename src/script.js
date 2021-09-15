import {Pane} from 'tweakpane'


const Fancy = {
    width: 300,
    height: 300,
    cols: 0,
    rows: 0,
    cell: 10,
    setColsRows: function(){
        this.cols = Math.floor(this.width / this.cell)
        this.rows = Math.floor(this.height / this.cell)
    },
    fontSize: 20,
    fancytext: 'Y',
    font: 'sans',
    setFancyText: function (fancytext) {
        this.fancytext = fancytext
    },
    draw: function () {
        ctx.clearRect(0, 0, this.width, this.height)

        this.draft()
        const {cols, rows, cell} = this
        
        //ctx.drawImage(canvasDraft, 0, 0)
        const draftData = ctxDraft.getImageData(0,0, cols, rows).data

        const numCells = cols * rows
        for(let i = 0; i < numCells; i++){
            const x = i % cols * cell
            const y = Math.floor(i / cols) * cell

            const r = draftData[i * 4]
            const g = draftData[i * 4 + 1]
            const b = draftData[i * 4 + 2]
            

            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
            ctx.beginPath()
            ctx.arc(x + cell * .5 , y + cell * .5, cell * .5, 0, Math.PI * 2)
            ctx.fill()


        }

        //ctx.drawImage(canvasDraft, 0, 0)


    },
    draft: function(){
        
        this.setColsRows()
        const {cols, rows} = this
        ctxDraft.clearRect(0, 0, cols, rows)
        ctxDraft.fillStyle = 'white'
        ctxDraft.font = `${this.fontSize}px ${this.font}`
       

        const textMetrics = ctxDraft.measureText(this.fancytext)
        const {actualBoundingBoxAscent,
        actualBoundingBoxDescent,
        actualBoundingBoxLeft,
        actualBoundingBoxRight} = textMetrics

        const x = actualBoundingBoxLeft * -1
        const y = actualBoundingBoxAscent * -1
        const w = actualBoundingBoxLeft + actualBoundingBoxRight
        const h = actualBoundingBoxAscent + actualBoundingBoxDescent
        
        ctxDraft.save()
        ctxDraft.translate((cols - w) * .5 -x, (rows - h) * .5 - y)
        ctxDraft.fillText(this.fancytext, 0, 0)
        //ctx.strokeRect(x,y,w,h)
        ctxDraft.restore()
        
        

        
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

const canvasDraft = document.createElement('canvas')
const ctxDraft = canvasDraft.getContext('2d')

const pane = new Pane({container: document.getElementById('pane')})
pane.addInput(Fancy, 'fontSize', {min: 5, max: 40, step: 1});
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


    