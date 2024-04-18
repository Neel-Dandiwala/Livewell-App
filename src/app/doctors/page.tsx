import Image from 'next/image'
import Header from '../../components/Header.tsx'
import { getDoctors } from '../../helpers/service-doctor.tsx'
import { Doctor } from '../../models/Doctor.tsx'

export default async function Home () {
  const doctors: Doctor[] = await getDoctors()
//   console.log(doctors)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />

      <ul
        role='list'
        class='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
      >
        {doctors.map(doctor => (
          <li
            key={doctor.id}
            class='m-10 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow'
          >
            <div class='flex w-full items-center justify-between space-x-6 p-6'>
              <div class='flex-1 truncate'>
                <div class='flex items-center space-x-3'>
                  <h3 class='truncate text-sm font-medium text-gray-900'>
                    {doctor.name}
                  </h3>
                  <span class='inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-gray-900 ring-1 ring-inset ring-green-600/20'>
                    {doctor.lastseen ? doctor.lastseen : 'Online'}
                  </span>
                </div>
                <p class='mt-1 truncate text-sm text-gray-500'>
                  {doctor.expertise}
                </p>
              </div>
              <Image
                class='h-10 w-10 flex-shrink-0 rounded-full bg-gray-300'
                src={doctor.imageurl}
                alt=''
                width={256}
                height={256}
              />
            </div>
            <div>
              <div class='-mt-px flex divide-x divide-gray-200'>
                <div class='flex w-0 flex-1'>
                  <a
                    href='#'
                    class='relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900'
                  >
                    <svg
                      class='h-5 w-5 text-gray-400'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path d='M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z' />
                      <path d='M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z' />
                    </svg>
                    Message
                  </a>
                </div>
                <div class='-ml-px flex w-0 flex-1'>
                  <a
                    href='#'
                    class='relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900'
                  >
                    <svg
                      class='h-5 w-5 text-gray-400'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 0114 0H5z'
                        clip-rule='evenodd'
                      />
                    </svg>
                    View
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
