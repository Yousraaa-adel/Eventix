import { Link } from 'react-router-dom';
import './PrimaryButton.css';

function PrimaryButton({ children, route }) {
  return (
    <Link to={route} className="primary-button">
      {children}
    </Link>
  );
}

export default PrimaryButton;
