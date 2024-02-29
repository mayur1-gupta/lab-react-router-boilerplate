import {Link} from "react-router-dom"

function Heading() {
  return (
    <div className="navbar">
     <h3> <Link to="/"> Kalvium ❤️</Link> </h3>
     <ul>
      <Link to="/CONTACTS">Contacts</Link>
      <Link to="/ABOUT">About</Link>
    </ul>
    </div>
  )
}

export default Heading
