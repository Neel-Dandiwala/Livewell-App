import Image from 'next/image'
import React from 'react'
import Header from '../../components/Header.tsx'
import { getPatients } from '../../helpers/service-patient.tsx'
import { Patient } from '../../models/Patient.tsx'

export default async function Home () {
  const patients: Patient[] = await getPatients()
  console.log(patients)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />

      <div class='m-10 relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' class='px-6 py-3'>
                First Name
              </th>
              <th scope='col' class='px-6 py-3'>
                Last Name
              </th>
              <th scope='col' class='px-6 py-3'>
                Date of Birth
              </th>
              <th scope='col' class='px-6 py-3'>
                Gender
              </th>
              <th scope='col' class='px-6 py-3'>
                Medical History
              </th>
              <th scope='col' class='px-6 py-3'>
                Current Medications
              </th>
              <th scope='col' class='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <React.Fragment class='w-full' key={patient.id}>
                {patient.id % 2 === 0 ? (
                  <tr class='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                    <td class='px-6 py-4'>{patient.firstname}</td>
                    <td class='px-6 py-4'>{patient.lastname}</td>
                    <td class='px-6 py-4'>{patient.dateofbirth.toISOString()}</td>
                    <td class='px-6 py-4'>{patient.gender}</td>
                    <td class='px-6 py-4'>{patient.medicalhistory}</td>
                    <td class='px-6 py-4'>{patient.currentmedications}</td>
                    <td class='px-6 py-4'>
                      <a
                        href='#'
                        class='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                      >
                        View Profile
                      </a>
                    </td>
                  </tr>
                ) : (
                  <tr class='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                    <td class='px-6 py-4'>{patient.firstname}</td>
                    <td class='px-6 py-4'>{patient.lastname}</td>
                    <td class='px-6 py-4'>{patient.dateofbirth.toISOString()}</td>
                    <td class='px-6 py-4'>{patient.gender}</td>
                    <td class='px-6 py-4'>{patient.medicalhistory}</td>
                    <td class='px-6 py-4'>{patient.currentmedications}</td>
                    <td class='px-6 py-4'>
                      <a
                        href='#'
                        class='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                      >
                        View Profile
                      </a>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
