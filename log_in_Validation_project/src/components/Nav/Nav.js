import React, {Fragment,useContext}  from 'react';
import styles from './Nav.module.css'
import Button from '../Form/Button'
import AuthContext from '../../Context/AuthContext'

const Nav=()=> {

 const ctx=useContext(AuthContext)

 

return (

     
    

     <Fragment>

<nav className={styles.nav}>

<ul >

     {ctx.isLoggedIn && <li> User</li>}

     <li>Admin</li>
     <li>
<Button onClick={ctx.onLogOut} >Log Out </Button>
     </li>
     
</ul>
<h2 > Welcome to Our Website</h2>



</nav>


     </Fragment>



)

}

export default Nav