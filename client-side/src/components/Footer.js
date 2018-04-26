import React, { Component } from 'react';

class Footer extends Component {

  render(){
    return(
      <div id="footer">
        <ul>
          <a className= "footLink" href="#"><li>World Rankings</li></a>
          <a className= "footLink" href="#"><li>Duel a Friend</li></a>
          <a className= "footLink" href="#"><li>Invite a Friend</li></a>
          <a className= "footLink" href="#"><li>Find us on Facebook</li></a>
        </ul>
      </div>
    )
  }
}


export default Footer;
