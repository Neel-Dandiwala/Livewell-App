import React from 'react';
import {conn} from './db';
import type { NextApiRequest, NextApiResponse } from 'next';
import ContactType from '../types/ContactType';
import Contacts from "../components/Contacts";

const fs = require('fs')

async function getContacts(req: NextApiRequest, res: NextApiResponse<User[] | { error: string }>) {
    
  try {
    const { rows } = await conn.query<ContactType>('SELECT * FROM doctors');
    // res.status(200).json(rows);
    // console.log(rows)
    return rows;
  } catch (error) {
    res.json({ error: error.message });
    // return [];
  }
};

const DisplayContacts = async ({params}) => {
    const people = await getContacts();
    return (
        <Contacts people={people} />
    )
}

export default DisplayContacts;