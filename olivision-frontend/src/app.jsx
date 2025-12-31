/** @format */
import { useState, useEffect } from 'react';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

export default function App({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // splash duration

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <SplashScreen />;
  }
  return <>{children} </>;
}

// ----------------------------------------------------------------------
