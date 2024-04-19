'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function useValidateToken() {
  const [entity, setEntity] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      router.replace('/login'); // If no token is found, redirect to login page
      return;
    }

    const validateToken = async () => {
      try {
        const res = await fetch('/api/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Token validation failed');
        }

        // If the token is valid, retrieve the entity from cookies
        const entityFromCookie = Cookies.get('entity');
        setEntity(entityFromCookie); // Assuming entity is a JSON string or a simple value

      } catch (error) {
        console.error(error);
        router.replace('/login'); // Redirect to login if token validation fails
      }
    };

    validateToken();
  }, [router]);

  return entity;
}

export default useValidateToken;
