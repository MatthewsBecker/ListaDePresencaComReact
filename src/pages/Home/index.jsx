import React, { useState } from 'react'
import './styles.css'

import {Card} from '../../components/Card'

function Home() {

  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])
  const [id, setId] = useState(1)

  const nome = studentName
  

  function handleValidacao(){
    if ( nome === undefined | nome === "" ){
      alert("Campo vazio, preenchar corretamente")
      console.log(nome)
    } else {
      handleAddStudent()
      setId(id + 1)
    }
  }

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      id: id,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    setStudents(prevState => [...prevState, newStudent])
  }

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>

      <div className='campoInput'>
        <input
          className='input' 
          type="text"
          required
          placeholder="Digite o nome"
          onChange={e => setStudentName(e.target.value)}
        />
        <button type="button" onClick={handleValidacao}>Adicionar</button>
      </div>

      {
        students.map(student => 
          <Card
            key={student.id}
            name={student.name} 
            time={student.time}
            id={student.id}
          />)
      }
      
    </div>
  )
}

export default Home
