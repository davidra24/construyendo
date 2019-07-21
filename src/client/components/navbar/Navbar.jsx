import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      session: {}
    };
  }
  componentDidMount() {
    this.verifyLogin();
  }
  verifyLogin = () => {
    const session = JSON.parse(localStorage.getItem('session'));
    this.setState({
      session
    });
  };
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';
    return (
      <Fragment>
        <h1>Construyendo sueños</h1>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Link className='navbar-brand' to='/'>
            Construyendo sueños
          </Link>
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className={`${classOne}`} id='navbarSupportedContent'>
            <ul className='navbar-nav'>
              <li className='nav-item' onClick={this.toggleNavbar}>
                <Link className='nav-link' to='/'>
                  Imuebles <span className='sr-only'>(current)</span>
                </Link>
              </li>
              {this.state.session.inicied ? (
                <li className='nav-item' onClick={this.toggleNavbar}>
                  <Link className='nav-link' to='/empleados'>
                    Empleados <span className='sr-only'>(current)</span>
                  </Link>
                </li>
              ) : (
                ''
              )}
              <li className='nav-item' onClick={this.toggleNavbar}>
                <Link className='nav-link' to='/empresa'>
                  Empresa
                </Link>
              </li>
              <li className='nav-item' onClick={this.toggleNavbar}>
                <Link className='nav-link' to='/servicios'>
                  Servicios
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </Fragment>
    );
  }
}

export default Navbar;
