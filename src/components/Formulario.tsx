import { useState } from 'react'

function Formulario() {
  const [nombre, setNombre] = useState('')

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Hola ${nombre}`)
  }

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario