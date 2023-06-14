import { NavLink } from 'react-router-dom'

const style = {
  width: "50%",
  margin: "5% 0 1%",
  padding: "1em",
  textDecoratioon: "none",
  color: "green",
  backgroundColor: "rgb(2555, 120, 44)",
  fontWeight: "bold",
  verticalAlign: "center"
}


const Navbar = () => {
  return (
    <div>
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: "red"
        }}
        exact
        style={style}
        to="/"
      >Home</NavLink>

      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: "red"
        }}
        exact
        style={style}
        to="/hikes"
      >Hikes</NavLink>

      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: "red"
        }}
        exact
        style={style}
        to="/hikes/new"
      >NewHike</NavLink>
    </div>
  )
}

export default Navbar