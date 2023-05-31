
export const AllEmployees =()=> {
  return (
    
    <>
      <h1 className="titulo">All employees</h1>
      <div className="container-tEmpleados">
        <table>
          <tr>
            <th>Complete name</th>
            <th>Username</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>Brayan José Hernández Gómez</td>
            <td>BrayanHG</td>
            <td>Leader</td>
            <td className="actions"><i className="bi bi-pencil-square editar"></i><i className="bi bi-trash-fill eliminar"></i></td>
          </tr>
        </table>
      </div>
    </>
  )
}
