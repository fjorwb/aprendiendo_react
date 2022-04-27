import React, { Component } from 'react'

class Contador extends Component {
  constructor(props){
    super(props)
    this.state = {contador: 0}
  }

  incrementar (cantidad){
    this.setState((estadoAnterior) => {
      return {
        contador : estadoAnterior.contador + cantidad
      }
    })
  }

  decrementar (cantidad){
    this.setState((estadoAnterior) => {
      return {
        contador : estadoAnterior.contador - cantidad
      }
    })
  }

  render(){
    return(
      <div className='contador'>
        <h2>Contador</h2>
        <h1>{this.state.contador}</h1>
        <button className='btn azul'   onClick={() => this.incrementar(this.props.cantidadIncrementar)}>Incrementar</button>
        <button className='btn rojo'  onClick={() => this.decrementar(this.props.cantidadDecrementar)}>Decrementar</button>
      </div> 
    )
  }
}

export default Contador
