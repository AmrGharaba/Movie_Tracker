import React from 'react';
import './mainForm.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const MainForms = props => {

    return(
        <div className='test-form'>
             <div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-3">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<h4 className="mb-0 pb-3 text-header"><span>Log In </span><span>Sign Up</span></h4>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label htmlFor="reg-log"></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
                                <LoginForm />
                                <RegisterForm />
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
        </div>
    );
}

export default MainForms;