import React ,{Fragment} from 'react';
import styles from './Button.module.css'

const Button=(props)=> {

return (
     <Fragment>
<button type={ props.type} className={styles.button} disabled={props.disabled} onClick={props.onClick}>
{props.children}
     
</button>


     </Fragment>
)

}

export default Button