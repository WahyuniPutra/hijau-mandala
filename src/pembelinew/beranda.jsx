import React, { useCallback } from 'react';
import Navbar from '../navfot/navbar.jsx';

const Beranda = () => {
  const handleNavigation = useCallback(() => {
    
  }, []);

  return (
    <div>
      <Navbar onNavigate={handleNavigation} />
      {/* Other components and content */}
    </div>
  );
};

export default Beranda;