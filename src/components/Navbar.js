import { NavLink } from 'react-router-dom'

const style = {
  width: "50%",
  margin: "5% 0 1%",
  padding: "1em",
  textDecoratioon: "none",
  color: "green",
  backgroundColor: "lightgreen",
  fontWeight: "bold",
  verticalAlign: "center"
}



const Navbar = () => {
  return (
    <div>
      <NavLink
        activestyle={{
          fontWeight: "bolder",
          color: "red"
        }}
        exact
        style={style}
        to="/"
      >Home</NavLink>

      <NavLink
        activestyle={{
          fontWeight: "bolder",
          color: "red"
        }}
        exact
        style={style}
        to="/states"
      >States</NavLink>

      <NavLink
        activestyle={{
          fontWeight: "bolder",
          color: "red"
        }}
        exact
        style={style}
        to="/states/new"
      >New State</NavLink>

      <NavLink
        activestyle={{
          fontWeight: "bolder",
          color: "red"
        }}
        exact
        style={style}
        to="/hikes"
      >Hikes</NavLink>

      <NavLink
        activestyle={{
          fontWeight: "bolder",
          color: "red"
        }}
        exact
        style={style}
        to="/hikes/new"
      >New Hike</NavLink>
    </div>
  )
}

export default Navbar