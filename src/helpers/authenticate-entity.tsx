import React from 'react';
import {conn} from '../lib/db';

const fs = require('fs')

export const authenticateEntity = async ( username : string, password : string) => {
    try {
        const entity = (await conn.query('SELECT username, role, foreignid FROM entity WHERE username = $1 AND password = $2', [username, password])).rows;
        // console.log(entity);
        return entity;
    } catch (error) {
        throw new Error(error);
    }
};
