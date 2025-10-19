import React from 'react';
import { useFetch } from '@/hooks/useFetch';
import usersAPI from '@/api/users';
import type { IUser } from '@/api/userType';
import { Header } from '@/components/Header'
 
export function Dashboard() {
  // const { data, loading, error } = useFetch<IUser[]>({
  //   queryFn: () => usersAPI.getUsers(),
  // });

  

  return (
    <>
      <Header />
    </>
  )

}