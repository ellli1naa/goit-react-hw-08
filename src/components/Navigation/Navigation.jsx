import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import "./Navigation.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className="link" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="link" to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};