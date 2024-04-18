import React from 'react';
import {conn} from '../utils/db';

const fs = require('fs')

export const getDoctor = async (doctorId : number) => {
    const doctorRows = (await conn.query('SELECT * FROM doctors WHERE doctor_id = $1', [doctorId])).rows;
    return doctorRows;
};
