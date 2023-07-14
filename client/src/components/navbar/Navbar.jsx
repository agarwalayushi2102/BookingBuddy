import "./navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navContainer">
        <span className="logo">Booking Buddy</span>
        <div className="navItems">
            <button className="navButton" > Register</button>
            <button className="navButton" > Login</button>
            
        </div>
    </div>
</div>
  )
}
