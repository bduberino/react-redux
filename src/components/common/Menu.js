import React from 'react';
import { Route, Link } from 'react-router-dom';

const NavBarLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
            <li className={match ? 'active' : ''}>
                <Link to={to}>{label}</Link>
            </li>
        )}
    />
);

const Menu = () => {
    return (
        <div>
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Track Your Tasks</a>
                    </div>
                    <div id="navbar" class="collapse navbar-collapse">
                        <ul class="nav navbar-nav">
                            <NavBarLink activeOnlyWhenExact={true} to='/' label='Home' />
                            <NavBarLink to='/tasks' label='Tasks' />
                            <NavBarLink to='/about' label='About' />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Menu;