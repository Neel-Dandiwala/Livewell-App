export interface Patient {
    id: number;
    firstname: string;
    lastname: string;
    dateofbirth: string;
    gender: string;
    email: string;
    phonenumber: string;
    address: string;
    medicalhistory: string;
    allergies?: string
    currentmedications?: string;
    lastseen?: string;
    lastseendatetime?: string
}