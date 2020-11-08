import React from 'react';
import { Link } from 'react-router-dom';

class Switcher extends React.Component {
  render() {
  	return (
        <div id="style-switcher">
            <div>
                <h3>Select your color</h3>
                <ul className="pattern">
                    <li>
                    <a href="" className="color1" ></a>
                    </li>
                    <li>
                    <a href="" className="color1" ></a>
                    </li>
                    <li>
                    <a href="" className="color1" ></a>>
                    </li>
                    <li>
                    <a href="" className="color1" ></a>
                    </li>
                    <li>
                    <a href="" className="color1" ></a>
                    </li>
                    <li>
                    <a href="" className="color1" ></a>
                    </li> 
                    <li>
                    <a href="" className="color1" ></a>
                    </li>
                    <li>
                    <a href="" className="color1" ></a>
                    </li>                    
                </ul>
            </div>
            <div className="bottom">
            <a href="" className="settings"><i className="mdi mdi-settings mdi-spin"></i></a>
            </div>
        </div>
  	);
  }
}
export default Switcher;