const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <h2 className="navbar-bred mx-4">
        <span className="text h2 mx-4">NavBar</span>
        <span className="badge bg-dark mx-2">{props.length}</span>
      </h2>
    </nav>
  );
};

export default Navbar;

// class componetaga junatilganda construktor keladi, functionalga uziga keladi
