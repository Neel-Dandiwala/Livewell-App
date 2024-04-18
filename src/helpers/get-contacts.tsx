import React from 'react';
import {conn} from '../utils/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import ContactType from '../types/ContactType';
import Contacts from "../components/Contacts";

const fs = require('fs')

export const getContacts = async () => {
    const { rows } = await conn.query('SELECT id, name, email, expertise, imageUrl, lastSeen, lastSeenDateTime FROM doctors');
    return rows;
};