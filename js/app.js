const dosDigitos=(numero)=> numero<10? '0'+numero:numero

const btnIniciar = document.querySelectorAll('button')[0]
const btnReset = document.querySelectorAll('button')[1]
const btnPausa = document.querySelectorAll('button')[2]

let id=''


const reloj= {
    hora: 0,
    minuto: 0,
    segundo:0,
    mostrar(){
        return `<span>${dosDigitos(this.hora)}</span>
        :
        <span>${dosDigitos(this.minuto)}</span>
        :
        <span>${dosDigitos(this.segundo)}</span>`  
    },
    actualizarHora(){
        this.hora++
    },
    actualizarMinuto(){
        this.minuto++
    },
    actualizarSegundo(){
        this.segundo++
    }
    ,
    resetHora(){
        this.hora = 0
    },
    resetMinuto(){
        this.minuto= 0
    },
    resetSegundo(){
        this.segundo = 0
    }
}

const relojHtml= document.querySelectorAll('.transparente')[0]
relojHtml.innerHTML = reloj.mostrar()


btnIniciar.addEventListener('click',()=>{
    console.log('inicio el cronometro')
    btnIniciar.disabled = true
    id = setInterval(()=>{
        relojHtml.innerHTML=reloj.mostrar()
        reloj.actualizarSegundo()
        if(reloj.segundo===60 ){
            reloj.actualizarMinuto()
            reloj.resetSegundo()
        }
        if(reloj.minuto===60 ){
            reloj.actualizarHora()
            reloj.resetMinuto()
        }
        
    },1000)
})

btnPausa.addEventListener('click',()=>{
    btnIniciar.disabled = false
    clearInterval(id)
})

btnReset.addEventListener('click',()=>{
    btnIniciar.disabled = false
    clearInterval(id)
    reloj.resetHora()
    reloj.resetMinuto()
    reloj.resetSegundo()
    relojHtml.innerHTML=reloj.mostrar()
})