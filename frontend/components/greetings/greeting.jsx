import React from  'react'; 
import { cartIcon} from '../../../app/assets/images/icons'
import { Link} from 'react-router-dom';
import Search from '../searchs/search_container'
class Greeting extends React.Component {
   constructor(props){
       super()
   }

    render(){
          const {currentUser, logout, openModal} = this.props
            const navigation = ()=> (
                <nav className="login-signup">
                   
                    <Link to='/' className="Virtual-logo">
                     
                    </Link>
                    
                   <Search/>

                    <div  className="ls-inline-container">
                        <br className="offset" />
                        <div className="ls-inline" onClick={() => openModal('login')} > Sign in</div>
                    </div>
                
                </nav>
            );

            const personalGreeting = ()=> (
                <div>
                <div className="login-signup">
                        <Link to='/' className="Virtual-logo">

                        </Link>
                        <br/>
                            <Search />
                        
                        

                      <h2 className="greeting">Hello !! {currentUser.username}</h2>
                      
                        <div className="ls-inline-container" >
                          
                                <div className="ls-inlineCT">
                                    <Link to='/cart'  > 
                                        <div className="Cart-Icon">
                                            {cartIcon}
                                        </div>
                                           
                                     </Link>
                                
                                </div>
                            <div className="divider"></div>
                            <Link to='/'>
                                    <div className="ls-inline" onClick={logout}> Logout</div>
                            </Link>
                      </div>
                      
                </div>
                   
                </div>
            )
            return (
                currentUser ? personalGreeting() : navigation()
            )
       
    }
}
export default Greeting;