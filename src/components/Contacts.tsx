// "use client";
import React, { useState, useEffect }  from 'react';
import {getContacts} from '../helpers/get-contacts';
// import getContacts from '../app/api/get-contacts/route.jsx';
import ContactType from '../types/ContactType';
import Image from "next/image";

const Contacts: React.FC = async ({ }) => {

        let people : ContactType[] = await getContacts();
        
        return (
        <div className="p-10 h-full bg-white">
          <ul role="list" className="divide-y divide-gray-100">
            {people.map((person) => (
              <li key={person.email} className="flex justify-between gap-x-6 py-5">
                <a href={`/chatbox/${person.id}`}>
                <div className="flex min-w-0 gap-x-4">
                  <Image className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageurl} alt=""  width={256}
              height={256}/>
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  {person.lastseen ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Last seen <time dateTime={person.lastseendatetime}>{person.lastseen}</time>
                    </p>
                  ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <div className="flex-none rounded-full bg-primary p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </div>
                      <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                  )}
                </div>
                </a>
              </li>
              
            ))}
          </ul>
          </div>
        )
};

export default Contacts;