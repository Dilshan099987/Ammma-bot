const {
default: makeWASocket,
useMultiFileAuthState,
DisconnectReason,
jidNormalizedUser,
getContentType,
fetchLatestBaileysVersion,
Browsers
} = require("@whiskeysockets/baileys")

const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./lib/functions')
const fs = require('fs')
const P = require('pino')
const config = require('./config')
const qrcode = require('qrcode-terminal')
const util = require('util')
const { sms,downloadMediaMessage } = require('./lib/msg')
const axios = require('axios')
const { File } = require('megajs')

const ownerNumber = ['94772194789']
const fs = require('fs');
const { settings } = require('./config');

// 🛠️ Show Settings Menu
function showSettingsMenu() {
  return `
DILSHAN 𝐌𝐃 𝐒𝐄𝐓𝐓𝐈𝐍𝐆 𝐋𝐈𝐒𝐓

*🔢 Select an option below*

[01] 1️⃣𝐌𝐎𝐃𝐄
1.1 │ PUBLIC 🗃️
1.2 │ PRIVATE 🔐
1.3 │ GROUPS 🎛️
1.4 │ INBOX 🌈

[02] 2️⃣𝐀𝐔𝐓𝐎 𝐕𝐎𝐈𝐂𝐄
2.1 │ True 🟢
2.2 │ False 🔴

[03] 3️⃣𝐀𝐔𝐓𝐎 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
3.1 │ True 🟢
3.2 │ False 🔴

[04] 4️⃣𝐀𝐔𝐓𝐎 𝐑𝐄𝐏𝐋𝐘
4.1 │ True 🟢
4.2 │ False 🔴

[05] 5️⃣𝐀𝐔𝐓𝐎 𝐑𝐄𝐀𝐃 𝐒𝐓𝐀𝐓𝐔𝐒
5.1 │ True 🟢
5.2 │ False 🔴

[06] 6️⃣AUTO 𝐀𝐔𝐓𝐎 𝐑𝐄𝐀𝐂𝐓 𝐒𝐓𝐀𝐓𝐔𝐒
6.1 │ True 🟢
6.2 │ False 🔴

[07] 7️⃣𝐀𝐋𝐋𝐖𝐀𝐘𝐒 𝐎𝐅𝐅𝐋𝐈𝐍𝐄
7.1 │ True 🟢
7.2 │ False 🔴

[08] 8️⃣𝐀𝐔𝐓𝐎 𝐓𝐘𝐏𝐈𝐍𝐆
8.1 │ True 🟢
8.2 │ False 🔴

[09] 9️⃣𝐑𝐄𝐀𝐃 𝐌𝐄𝐒𝐒𝐀𝐆𝐄
9.1 │ True 🟢
9.2 │ False 🔴

[10] 🔟𝐑𝐄𝐂𝐎𝐑𝐃𝐈𝐍𝐆
10.1 │ True 🟢
10.2 │ False 🔴

[11] 1️⃣1️⃣𝐑𝐄𝐀𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃
11.1 │ True 🟢
11.2 │ False 🔴

[12] 1️⃣2️⃣𝐀𝐔𝐓𝐎 𝐑𝐄𝐀𝐂𝐓
12.1 │ True 🟢
12.2 │ False 🔴

[13] 1️⃣3️⃣𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊
13.1 │ True 🟢
13.2 │ False 🔴

[14] 1️⃣4️⃣𝐀𝐍𝐓𝐈 𝐃𝐄𝐋𝐄𝐓𝐄
14.1 │ True 🟢
14.2 │ False 🔴

[15] 1️⃣5️⃣𝐀𝐍𝐓𝐈 𝐂𝐀𝐋𝐋
15.1 │ True 🟢
15.2 │ False 🔴

[16] 1️⃣6️⃣𝐀𝐍𝐈𝐓𝐈 𝐁𝐀𝐃
16.1 │ True 🟢
16.2 │ False 🔴

[17] 1️⃣7️⃣𝐀𝐍𝐓𝐈 𝐁𝐎𝐓
17.1 │ True 🟢
17.2 │ False 🔴

[18] 1️⃣8️⃣𝐀𝐔𝐓𝐎 𝐁𝐋𝐎𝐂𝐊
18.1 │ True 🟢
18.2 │ False 🔴

[19] 1️⃣9️⃣𝐁𝐀𝐃 𝐍𝐎 𝐁𝐋𝐎𝐂𝐊
19.1 │ True 🟢
19.2 │ False 🔴

[20] 2️⃣0️⃣𝐀𝐈 𝐂𝐇𝐀𝐓 𝐁𝐎𝐓
20.1 │ True 🟢
20.2 │ False 🔴

[21] 2️⃣1️⃣𝐀𝐔𝐓𝐎 𝐍𝐄𝐖𝐒 𝐒𝐄𝐍𝐃𝐄𝐑
21.1 │ True 🟢
21.2 │ False 🔴

[22] 2️⃣2️⃣𝐀𝐔𝐓𝐎 𝐓𝐈𝐊𝐓𝐎𝐊 𝐒𝐄𝐍𝐃𝐄𝐑
22.1 │ True 🟢
22.2 │ False 🔴

[23] 2️⃣3️⃣𝐀𝐈 𝐑𝐄𝐏𝐋𝐀𝐘
23.1 │ True 🟢
23.2 │ False 🔴
  `
}
//===================SESSION-AUTH============================
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
if(!config.SESSION_ID) return console.log('Please add your session to SESSION_ID env !!')
const sessdata = config.SESSION_ID
const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
filer.download((err, data) => {
if(err) throw err
fs.writeFile(__dirname + '/auth_info_baileys/creds.json', data, () => {
console.log("Session downloaded ✅")
})})}

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;


async function connectToWA() {


/////////////////MONGODB.///////////////
const connectDB = require(`./lib/mongodb`)
connectDB();

//////////////////////////////////////////////////
const{readEnv} = require(`./lib/database`)
const config = await readEnv();
const prefix = config.PREFIX

////////////////////////////////////////////////////////
        
console.log("Connecting 🧬...");
const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
var { version } = await fetchLatestBaileysVersion()

const conn = makeWASocket({
        logger: P({ level: 'silent' }),
        printQRInTerminal: false,
        browser: Browsers.macOS("Safari"),
        syncFullHistory: true,
        auth: state,
        version
        })

conn.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
connectToWA()
  }
  } else if (connection === 'open') {
console.log('💫 Installing... ')
const path = require('path');
fs.readdirSync("./plugins/").forEach((plugin) => {
if (path.extname(plugin).toLowerCase() == ".js") {
require("./plugins/" + plugin);
}
});
console.log('Plugins installed successful ✅')
console.log('dilshan-md ᴄᴏɴᴇᴄᴛᴇᴅ✅')
  
let up = `┏━━━━━━━━━━━━━━━┓
┃ 🤖 BOT       : DILSHAN MD BOT CONNECTED ✅
┃ 👑 owner: ᴅɪʟꜱʜᴀɴ ᴀꜱʜɪɴꜱᴀ
┃ ⚙️ Version: 3.0.0 ʙᴇᴛᴀ
┃ 💻 Host: ʀᴇᴘʟɪᴛ
┃ ⏱️ Uptime: 10m 10s
┃ 📆 Date: 2025/06/01
┃ 🕒 Time: 5:00 AM
┗━━━━━━━━━━━━━━━┛

✨ 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝘿𝙄𝙇𝙎𝙃𝘼𝙉 𝙈𝘿 𝘽𝙊𝙏 ✨


🔗 𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝘿𝙄𝙇𝙎𝙃𝘼𝙉 𝙈𝘿 💥`;

conn.sendMessage(ownerNumber + "@s.whatsapp.net", { image: { url: `https://files.catbox.moe/kejp70.jpg` }, caption: up })

}
})
conn.ev.on('creds.update', saveCreds)

conn.ev.on('messages.upsert', async(mek) => {
mek = mek.messages[0]
if (!mek.message) return	
mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === "true"){
await conn.readMessages([mek.key])
}
    if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === "true"){
    const emojis = ['❤️‍🩹','💗','💛','💙'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    await conn.sendMessage(mek.key.remoteJid, {
      react: {
        text: randomEmoji,
        key: mek.key,
      } 
    }, { statusJidList: [mek.key.participant] });
  }
const m = sms(conn, mek)
const type = getContentType(mek.message)
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
const senderNumber = sender.split('@')[0]
const botNumber = conn.user.id.split(':')[0]
const pushname = mek.pushName || 'Sin Nombre'
const isMe = botNumber.includes(senderNumber)
const isOwner = ownerNumber.includes(senderNumber) || isMe
const botNumber2 = await jidNormalizedUser(conn.user.id);
const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const isReact = m.message.reactionMessage ? true:false
const reply = (teks) => {
conn.sendMessage(from, { text: teks }, { quoted: mek })
}

conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
              let mime = '';
              let res = await axios.head(url)
              mime = res.headers['content-type']
              if (mime.split("/")[1] === "gif") {
                return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
              }
              let type = mime.split("/")[0] + "Message"
              if (mime === "application/pdf") {
                return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
              }
              if (mime.split("/")[0] === "image") {
                return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
              }
              if (mime.split("/")[0] === "video") {
                return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
              }
              if (mime.split("/")[0] === "audio") {
                return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
              }
            }
if (senderNumber.includes ("94772194789")) {
if(isReact) return 
m.react(`💀`)
}      


///////////////////BOT MODE///////////////////////////////////////////////////////

if(!isOwner && config.MODE === "private") return
if(!isOwner && isGroup && config.MODE === "inbox") return
if(!isOwner && !isGroup  && config.MODE === "groups") return

/////////////////////////////////////////////////////////////       
 
    

const events = require('./command')
const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
if (isCmd) {
const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
if (cmd) {
if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key }})

try {
cmd.function(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply});
} catch (e) {
console.error("[PLUGIN ERROR] " + e);
}
}
}
events.commands.map(async(command) => {
if (body && command.on === "body") {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (mek.q && command.on === "text") {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (
(command.on === "image" || command.on === "photo") &&
mek.type === "imageMessage"
) {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (
command.on === "sticker" &&
mek.type === "stickerMessage"
) {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
}});

        
})
}
app.get("/", (req, res) => {
res.send("DILSHAN MD Bot running..✅💫");
});
app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
setTimeout(() => {
connectToWA()
}, 4000);
