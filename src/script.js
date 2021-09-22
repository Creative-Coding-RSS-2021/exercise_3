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
    draw: function () {
        ctx.clearRect(0, 0, this.width, this.height)
        
        const {cols, rows, cell} = this
        
        //ctx.drawImage(canvasDraft, 0, 0)
        
        const draftData = ctxDraft.getImageData(0,0, cols, rows).data
        console.log('draftData', draftData)

        const numCells = cols * rows
        for(let i = 0; i < numCells; i++){
            
            const x = i % cols * cell
            const y = Math.floor(i / cols) * cell
            //console.log('i', i, x, y)

            let r = draftData[i * 4]
            let g = draftData[i * 4 + 1]
            const b = draftData[i * 4 + 2]
            
            //r = 255 * x/Fancy.width * Math.random() 
            //g = 255 * y/Fancy.height

            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
            ctx.beginPath()
            ctx.arc(x + cell * .5, y + cell * .5, cell * .5 , 0, Math.PI * 2)
            ctx.fill()


        }
        //ctx.drawImage(canvasDraft, 0, 0)


    }
}






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


document.querySelector('form').elements['fancyimage'].addEventListener('change', e => {
    const [file] = e.target.files
    
    const img = document.createElement('img')
    img.setAttribute('src', URL.createObjectURL(file))
    img.onload = function(){
        img.width = Fancy.width
        img.height = Fancy.height
        ctxDraft.drawImage(img,0,0, Fancy.cols, Fancy.rows); // Or at whatever offset you like
        Fancy.draw()
      };
    document.querySelector('form').appendChild(img)

})

const img = document.querySelector('#example')

img.width = Fancy.width
img.height = Fancy.height
Fancy.setColsRows()
    
ctxDraft.drawImage(img,0,0, Fancy.cols, Fancy.rows); // Or at whatever offset you like
Fancy.draw()



    