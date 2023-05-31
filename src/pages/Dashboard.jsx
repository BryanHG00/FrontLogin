import { Link } from "react-router-dom";
import all from '../imgs/allemp.gif'
import add from '../imgs/mas.png'
export const Dashboard = () => {
  return (
    <>
      <h1 className="titulo">Home menu</h1>
      <div className="container-empleados">
        <div className="container-menu">
          <Link to='/employees' className="btnM" title="See all the employees"><img src={all}></img>All Employees</Link>
          <Link to='/newEmployee' className="btnM" title="Add a new employee"><img src={add}></img>New Employee</Link>
        </div>
        
      </div>
    </>
  );
}