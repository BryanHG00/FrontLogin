
export const NewEmployee =()=> {

  return (
    <>
      <h1 className="titulo">Add new employee</h1>
      <div className="nEmployee">
        <label htmlFor="nombreCompleto">Complete name</label>
        <input type="text" id="nombreCompleto"/>
        <label htmlFor="nombreUsuario">Username</label>
        <input type="text" id="nombreUsuario"/>
        <label htmlFor="pass">Password</label>
        <input type="password" name="pass" id="pass" />
        <label htmlFor="puesto">Position</label>
        <select name="puesto" id="puesto">
          <option className="opt" value="1">Leader</option>
          <option className="opt" value="2">Manager</option>
          <option className="opt" value="3">Assistant Manager</option>
          <option className="opt" value="4">Assistant</option>
        </select>

        <button>Save</button>
      </div>
    </>
  )
}
