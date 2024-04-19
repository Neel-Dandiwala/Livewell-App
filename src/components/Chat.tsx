'use client';

import React from 'react'
import AgentChatbox from "./AgentChatbox.tsx"
import UserChatbox from "./UserChatbox.tsx"
import {getChat} from '../helpers/get-chat.tsx'
import MessageType from '../types/MessageType';
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'
import {useValidateToken} from '../lib/validation.tsx'
import { useState, useEffect } from 'react';
import Image from "next/image";

interface Chatprops {
  doctorId: number
}

const Chat: React.FC<Chatprops> = ({ doctorId }) => {
  console.log(doctorId);
  // let messages : MessageType[] = await getChat(doctorId, 1);
  const [messages, setMessages] = useState<MessageType[]>([{
    id: 0,
    sentbydoctor: true,
    text: 'Hello, how can I help you today?'
  },
{
    id: 1,
    sentbydoctor: false,
    text: 'Hi, I am feeling unwell'
  },
{
    id: 2,
    sentbydoctor: false,
    text: 'Can you help me?'
}]);
  const [newMessage, setNewMessage] = useState('');
  const [newUrl, setNewUrl] = useState('https://i.imgur.com/13thmg6.jpg');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const fetchedMessages = await getChat(doctorId, 1);
        setMessages(fetchedMessages);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();
  }, [doctorId]);

  const handleSendMessage = () => {
    let updatedMessages = [...messages]; // Clone the current messages
     // Otherwise, send the text message
    updatedMessages.push({
      id: messages.length + 1, 
      type: 'text',
      text: newMessage,
      sentbydoctor: false, // This should be dynamically set based on the sender
    });
  
 
    setMessages(updatedMessages);
    setNewMessage(''); 
  };

  const handleImageMessage = () => {
    let updatedMessages = [...messages];
    updatedMessages.push({
      id: messages.length + 1, 
      type: 'image',
      text: newUrl,
      sentbydoctor: false, // This should be dynamically set based on the sender
    });

    setMessages(updatedMessages);
    setNewUrl('https://i.imgur.com/13thmg6.jpg'); 
  
  }

  const handleImageSelect = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
  
      try {
        const response = await fetch('https://api.imgur.com/3/image', {
          method: 'POST',
          headers: {
            Authorization: 'Client-ID 2eadeec4f0227cf',
          },
          body: formData,
        });
        const data = await response.json();
        console.log(data)
        if (data.success) {
          console.log(data.data.link)
          setNewUrl(data.data.link); 
        } else {
          throw new Error('Failed to upload image');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
        
        <div class='w-full left-0 h-full p-6' style={{ backgroundImage: 'linear-gradient(to bottom, #e9ece4, #ffffff)'}}>
          <div class='right-0 flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4'>
            <div class='flex flex-col h-full overflow-x-auto mb-4'>
              <div class='flex flex-col h-full'>
                <div class='grid grid-cols-12 gap-y-2'>
                  {messages.map((message) => (
                    <React.Fragment class='w-full' key={message.id}>
                    { message.sentbydoctor ? (
                      <AgentChatbox name="Doctor" type={message.type} text={message.text} />
                    ) : (
                      <UserChatbox name="Patient" type={message.type} text={message.text}/>
                    )}
                    </React.Fragment>
                  )) }
                </div>
              </div>
            </div>
            <div class='flex flex-row items-center h-16 rounded-xl bg-white w-full px-4'>
              <div>
                <button onClick={handleImageMessage} class='flex items-center justify-center text-gray-400 hover:text-gray-600'>
                  <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" accept="image/*" onChange={handleImageSelect} />
                  <svg
                    class='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
                    ></path>
                  </svg>
                </button>
              </div>
              <div class='flex-grow ml-4'>
                <div class='relative w-full'>
                  <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    type='text'
                    class='flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10'
                  />
                  <button onClick={handleSendMessage} class='absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600'>
                    <svg
                      class='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class='ml-4'>
                <button onClick={handleSendMessage} class='flex items-center justify-center bg-gray-500 hover:bg-primary rounded-xl text-white px-4 py-1 flex-shrink-0'>
                  <span>Send</span>
                  <span class='ml-2'>
                    <svg
                      class='w-4 h-4 transform rotate-45 -mt-px'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Chat
