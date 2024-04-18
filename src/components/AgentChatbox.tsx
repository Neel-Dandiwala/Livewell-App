import React from 'react';
import EntityMessageType from '../types/EntityMessageType'; 

const AgentChatbox: React.FC<EntityMessageType> = ({ name, text }) => {
    return (
            <div class='col-start-1 col-end-8 p-3 rounded-lg'>
                    <div class='flex flex-row items-center'>
                      <div class='flex items-center justify-center h-10 w-10 rounded-full bg-secondary flex-shrink-0'>
                        {name[0]}
                      </div>
                      <div class='relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl'>
                        <div>{text}</div>
                      </div>
                    </div>
                  </div>
    );
};

export default AgentChatbox;