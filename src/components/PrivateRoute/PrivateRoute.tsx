import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/firebaseConfig/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Box, Spinner } from 'theme-ui';

interface PrivateRouteProps {
  children: React.ReactElement;
  roleRequired?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, roleRequired }) => {
  const [user, loading] = useAuthState(auth);
  const [role, setRole] = useState<string | null>(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setRole(userDoc.data().role);
          } else {
            setRole(null); // User document doesn't exist, set role to null
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
          setRole(null);
        }
      }
      setRoleLoading(false);
    };

    fetchUserRole();
  }, [user]);

  if (loading || roleLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Spinner color="#192A41" size={94} />
      </Box>
    );
  }

  if (!user || (roleRequired && role !== roleRequired)) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default PrivateRoute;
