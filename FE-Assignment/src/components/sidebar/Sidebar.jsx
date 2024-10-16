import { FaUser, FaCog, FaChartBar } from 'react-icons/fa';
import { FaFacebook, FaShoppingCart } from 'react-icons/fa'; // Import Meta (Facebook) and Shopping Cart icons
import "../../styles/sideBar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icon-wrapper" style={{ marginTop: '100px' }}>
        <img src='images/retainiqlogo.png' alt="RetainIQ Logo" style={{ width: '100%', height: '90%' }} />
      </div>
      <div className="icon-wrapper">
        <FaUser className="sidebar-icon" />
      </div>
      <div className="icon-wrapper">
        <FaFacebook className="sidebar-icon" /> {/* Meta icon */}
      </div>
      <div className="icon-wrapper">
        <FaShoppingCart className="sidebar-icon" /> {/* Shopping cart icon */}
      </div>
      <div className="icon-wrapper">
        <FaCog className="sidebar-icon" />
      </div>
      <div className="icon-wrapper">
        <FaChartBar className="sidebar-icon" />
      </div>
    </div>
  );
};

export default Sidebar;
