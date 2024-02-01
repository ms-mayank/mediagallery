import React from 'react'; 
import {auth , provider} from '../firebase/config'; 

const Logout = () => { 

	// Signout function 
	const logout = () => { 
		auth.signOut(); 
	} 
	
	return ( 
		<div> 
      <center>
			<button className='btn'
			onClick={logout}> 
				Logout 
			</button> 
      </center>
		</div> 
	); 
} 

export default Logout;
