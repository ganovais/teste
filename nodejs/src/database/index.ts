import mysql from "mysql";

const connection = mysql.createConnection({
    host: "localhost",
    database: "apollo",
    user: "root",
    password: "root",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
});

connection.connect(function (err) {
    if (err) {
        return;
    }
});

export default connection;
