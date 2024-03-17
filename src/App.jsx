import React, { useState } from 'react';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import { BaseColaboradores } from './BaseColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap está instalado

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtro, setFiltro] = useState("");

  const agregarColaborador = (nuevoColaborador) => {
    // Agregar lógica para agregar colaborador
    // setColaboradores([...colaboradores, nuevoColaborador]);
  };

  // Filtrar colaboradores según el término de búsqueda
  const colaboradoresFiltrados = colaboradores.filter(
    (col) => {
      return (
        col.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        col.correo.toLowerCase().includes(filtro.toLowerCase()) ||
        col.cargo.toLowerCase().includes(filtro.toLowerCase()) ||
        col.telefono.includes(filtro)
      );
    }
  );

  return (
    <div className="container mt-5">
      <Alert mensaje={""} tipo={""} />
      <Buscador setFiltro={setFiltro} />
      <Listado colaboradores={colaboradoresFiltrados} />
      <Formulario agregarColaborador={agregarColaborador} />
    </div>
  );
}

export default App;
