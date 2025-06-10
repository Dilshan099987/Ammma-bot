const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

const settingsPath = './settings.json';

let settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));

function saveSettings() {
  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "qFYm2RTQ#lzptWLsR0iMU3ubW8Z3MPXJWh2oU4qRGE8X6OYMnJRQ",
  MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",",
  settings,
  saveSettings
};
