import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/firebaseConfig/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

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
      <div className="loading-spinner">
        <div className="spinner"></div>
        <style>
          {`
            .spinner {
              border: 8px solid rgba(0, 0, 0, 0.1);
              border-left-color: #000;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              animation: spin 1s linear infinite;
            }
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </div>
    );
  }

  if (!user || (roleRequired && role !== roleRequired)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
