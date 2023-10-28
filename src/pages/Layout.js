import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/AuthReducer';

function Layout({ children }) {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="layout">
      <Header user={user} logout={() => dispatch(logout())} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
