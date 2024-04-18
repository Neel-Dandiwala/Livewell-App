import React from 'react';

interface AgentChatboxProps {
    // Define the props for the AgentChatbox component here
}

const AgentChatbox: React.FC<AgentChatboxProps> = (props) => {
    // Implement the logic for the AgentChatbox component here

    return (
  
            <div class='col-start-1 col-end-8 p-3 rounded-lg'>
                    <div class='flex flex-row items-center'>
                      <div class='flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0'>
                        A
                      </div>
                      <div class='relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl'>
                        <div>Hey How are you today?</div>
                      </div>
                    </div>
                  </div>

    );
};

export default AgentChatbox;