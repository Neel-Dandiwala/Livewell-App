import React from 'react';
import {conn} from '../lib/db';

const fs = require('fs')

export const getPatient = async (patientId : number) => {
    const patientRows = (await conn.query('SELECT * FROM patients WHERE id = $1', [patientId])).rows;
    return patientRows;
};

export const getPatients = async () => {
    const patientRows = (await conn.query('SELECT * FROM patients')).rows;
    return patientRows;
};


