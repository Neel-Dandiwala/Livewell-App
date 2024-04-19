import React from 'react';
import EntityMessageType from '../types/EntityMessageType'; 
import Image from 'next/image';

const UserChatbox: React.FC<EntityMessageType> = ({ name, type, text }) => {
  console.log(type)
    return (
        <div class='col-start-6 col-end-13 p-3 rounded-lg'>
                    <div class='flex items-center justify-start flex-row-reverse'>
                      <div class='flex items-center justify-center h-10 w-10 rounded-full bg-primary flex-shrink-0'>
                        {name[0]}
                      </div>
                      <div class='relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl'>
                        {type === 'image' ? (<Image src={text} alt="Uploaded content" className="w-full h-auto" width={100}
                  height={100} />) : ( <div>{text}</div> ) }
                       
                      </div>
            </div>
        </div>
    );
};

export default UserChatbox;