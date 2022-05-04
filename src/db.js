import mysql from 'mysql2';
import credentials from './credentials.js';

const connection = mysql.createConnection({
    host : "localhost",
    database : "FosterPet",
    ...credentials

}).promise(); // if we add promise here we have to remove it from the pets.js

export default connection;

