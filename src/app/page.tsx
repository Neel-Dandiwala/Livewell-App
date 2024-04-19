// import Image from "next/image";
// import Header from "../components/Header.tsx"
// import Menu from "../components/Menu.tsx"
// import Doctors from "../components/Doctors.tsx"
// import Chat from "../components/Chat.tsx"
// export default function Home() {
//   return (
//     <>
//     <Header />
//     {/* <Menu  /> */}
//     <Doctors />
//     <Chat />
//     </>
//   );
// }
// import Image from "next/image";
// import Header from "../components/Header.tsx"
// import Menu from "../components/Menu.tsx"
// import Contacts from "../components/Contacts"
// import Chat from "../components/Chat.tsx"
// import { useRouter } from 'next/router';

// export default function Home() {
//   const router = useRouter();

//   useEffect(() => {
//     router.replace('/login');
//   }, [router]);

//   return (
//     <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
//       <Header />
      
//     </div>
//   );
// }
'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import EntityType from '../../types/EntityType';

type ResponseData = {
    token: string;
    entity: EntityType; 
  };

export default function Home () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const handleLogin = async (error) => {
        error.preventDefault() 
    
        try {
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            }),
          })
    
          if (!response.ok) throw new Error('Login failed')
            // console.log(response)
          const { token, entity } = await response.json() as ResponseData;
          console.log(entity)
          document.cookie = `token=${token}; path=/`

          document.cookie = `entity=${(entity.role[0] + entity.foreignid)}; path=/`
          router.push('/chatbox/1')
        } catch (error) {
          console.error(error)
        }
      }

  return (

<div class="bg-gradient-flow animated-background h-screen w-full flex flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <Image class="mx-auto h-10 w-auto" 
                src="/livewell-logo-black.svg"
              alt=""
              width={100}
              height={24}
              priority />
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" onSubmit={handleLogin} method="POST">
      <div>
        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
        <div class="mt-2">
          <input id="username" name="username" type="username" autocomplete="username" value={username} onChange={(e) => setUsername(e.target.value)} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bg-primary sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          {/* <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div> */}
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bg-primary sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-dark px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Sign in</button>
      </div>
    </form>

    
  </div>
</div>

  )
}