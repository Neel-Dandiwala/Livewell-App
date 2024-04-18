import React from 'react';
import {conn} from '../utils/db';

const fs = require('fs')

export const getChat = async (doctorId : number, patientId: number) => {
    
    const chatRows = (await conn.query('SELECT id FROM chats WHERE doctor_id = $1 AND patient_id = $2', [doctorId, patientId])).rows;
    // console.log(chatRows);
    const chatId = chatRows[0].id;
    const messages = (await conn.query('SELECT id, sentbydoctor, text FROM messages WHERE chat_id = $1', [chatId])).rows;
    
    return messages;
};
