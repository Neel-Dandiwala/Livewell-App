import React from 'react';
import {conn} from '../utils/db';

const fs = require('fs')

export const getDoctor = async (doctorId : number) => {
    const doctorRows = (await conn.query('SELECT * FROM doctors WHERE id = $1', [doctorId])).rows;
    return doctorRows;
};

export const getDoctors = async () => {
    const doctorsRows = (await conn.query('SELECT * FROM doctors')).rows;
    return doctorsRows;
};


