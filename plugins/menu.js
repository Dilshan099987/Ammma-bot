const config = require("../config");
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "menu",
  'desc': "Show interactive menu system",
  'category': 'menu',
  'react': '🚀',
  'filename': __filename
}, async (_0x1f175b, _0x482d64, _0x5253a9, {
  from: _0x98cd0,
  reply: _0x4cf25d
}) => {
  try {
    const _0x3a9262 = `👋 Hello, ${pushname}!
       📍𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝙳𝙸𝙻𝚂𝙷𝙰𝙽 𝙼𝙳🚀
    ╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」 ──●●►   
 │ *⏳ Uptime*:  15 hours, 20 minutes, 38 seconds 
 │ *👤 User* :  *Dilshan Ashinsa*
 │ *📂 Ram usage*: 30.04MB / 63243.48MB 
 │ *⚙️ HostName*: Replit
 │ *👨‍💻 Owner*: Dilshan Ashinsa 
 ╰───────────●●►

* *🔢 Reply Below This Number*
╭═════════════════○
*1┃• DOWNLOAD MENU*
*2┃• GROUP MENU*
*3┃• FUN MENU*
*4┃• OWNER MENU*
*5┃• AI MENU*
*6┃• ANIME MENU*
*7┃• CONVERT MENU*
*8┃• OTHER MENU*
*9┃• REACTIONS MENU*
*10┃• MAIN MENU*
╰═════════════════○
    
 > © ᴘᴏᴡᴇʀᴅ ʙʏ ᴅɪʟꜱʜᴀɴ ᴍᴅ`;
    const _0x18e40d = {
      'mentionedJid': [_0x5253a9.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': {
        'newsletterJid': "120363419308807922@newsletter",
        'newsletterName':"𝐃𝐈𝐋𝐒𝐇𝐀𝐍_𝐌𝐃",
        'serverMessageId': 0x8f
      }
    };
    const _0x579a22 = async () => {
      try {
        return await _0x1f175b.sendMessage(_0x98cd0, {
          'image': {
            'url':"https://files.catbox.moe/zqu8s7.jpg"
          },
          'caption': _0x3a9262,
          'contextInfo': _0x18e40d
        }, {
          'quoted': _0x482d64
        });
      } catch (_0xda0c92) {
        console.log("Image send failed, falling back to text");
        return await _0x1f175b.sendMessage(_0x98cd0, {
          'text': _0x3a9262,
          'contextInfo': _0x18e40d
        }, {
          'quoted': _0x482d64
        });
      }
    };
    const _0x5080a8 = async () => {
      try {
        await new Promise(_0x3a860f => setTimeout(_0x3a860f, 0x3e8));
        await _0x1f175b.sendMessage(_0x98cd0, {
          'audio': {
            'url': "https://files.catbox.moe/g50hun.m4a"
          },
          'mimetype': "audio/mp4",
          'ptt': true
        }, {
          'quoted': _0x482d64
        });
      } catch (_0x5d14db) {
        console.log("Audio send failed, continuing without it");
      }
    };
    let _0x45ec7b;
    try {
      _0x45ec7b = await Promise.race([_0x579a22(), new Promise((_0x3c57de, _0x49525b) => setTimeout(() => _0x49525b(new Error("Image send timeout")), 0x2710))]);
      await Promise.race([_0x5080a8(), new Promise((_0x425d84, _0x698f24) => setTimeout(() => _0x698f24(new Error("Audio send timeout")), 0x1f40))]);
    } catch (_0x23d134) {
      console.log("Menu send error:", _0x23d134);
      if (!_0x45ec7b) {
        _0x45ec7b = await _0x1f175b.sendMessage(_0x98cd0, {
          'text': _0x3a9262,
          'contextInfo': _0x18e40d
        }, {
          'quoted': _0x482d64
        });
      }
    }
    const _0x184367 = _0x45ec7b.key.id;
    const _0x70be46 = {
      '1': {
        'title': "📥 *Download Menu* 📥",
        'content': `╭━━━〔 *Download Menu* 〕━━━┈⊷
        ┃☀╭──────────────☀
        ┃🚀│ 🌐 *Social Media*
        ┃🚀│ • fb [url]
        ┃🚀│ • mediafire [url]
        ┃🚀│ • gitclone [repo Link]
        ┃🚀│ • tiktok [url]
        ┃🚀│ • likee [url]
        ┃🚀│ • img [query]
        ┃🚀│ • pindl [url]
        ┃🚀│ • xvdl
        ┃🚀│ • url
        ┃🚀│ • apk
        ┃🚀│ ⏮️🎵 *Music/Video*
        ┃🚀│ • video4 [url]
        ┃🚀│ • song
        ┃☢️╰────────────
        ╰━━━━━━━━━━━━━━━┈⊷
        
        > ☀©POWERD BY DILSHAN MD`,
        'image': true
      },
      '2': {
        'title': "👥 * * 👥",
        'content': `╭━━━〔 *Group Menu* 〕━━━┈⊷
        ┃☀╭──────────────☀
        ┃📍│ • mute
        ┃📍│ • unmute
        ┃📍│ • lockgs
        ┃📍│ • unlockgs
        ┃📍│ • leave
        ┃📍│ • updategname
        ┃📍│ • updategdesc
        ┃📍│ • join
        ┃📍│ • invite
        ┃📍│ • revoke
        ┃📍│ • kick
        ┃📍│ • promote
        ┃📍│ • demote
        ┃📍│ • ginfo
        ┃📍│ • taggp
        ┃📍│ • tagall
        ┃📍│ • hidetag
        ┃📍│ • msgall [text]
        ┃☀╰──────────────
        ╰━━━━━━━━━━━━━━━┈⊷
        
        > ☀©POWERD BY DILSHAN MD`,
        'image': true
      },
      '3': {
        'title': "😄 *Fun Menu* 😄",
        'content': `╭━━━〔 *Fun Menu* 〕━━━┈⊷
        ┃☀╭──────────────☀
        ┃📌│ 🎭 *Interactive*
        ┃📌│ • hack @user
        ┃📌╭──────────────
        ┃📌│ 😂 *Reactions*
        ┃📌│ • heart
        ┃📌│ • happy
        ┃📌│ • sad
        ┃📌│ • angry
        ┃📌│ • shy
        ┃📌│ • moon
        ┃📌│ • cunfuzed
        ┃☀╰──────────────
        ╰━━━━━━━━━━━━━━━┈⊷
        
        > ☀©POWERD BY DILSHAN MD`,
        'image': true
      },
      '4': {
        'title': "👑 *Owner Menu* 👑",
        'content': `╭━━━〔 *Owner Menu* 〕━━━┈⊷
        ┃☀╭──────────────☀
        ┃🧑‍💻│ ⚠️ *Restricted*
        ┃🧑‍💻│ • block @user
        ┃🧑‍💻│ • unblock @user
        ┃🧑‍💻│ • setpp [img]
        ┃🧑‍💻│ • restart
        ┃🧑‍💻│ • shutdown
        ┃🧑‍💻│ • broadcast
        ┃🧑‍💻╰───────────���──
        ┃🧑‍💻╭──────────────
        ┃🧑‍💻│ ℹ️ *Info Tools*
        ┃🧑‍💻│ • gjid
        ┃🧑‍💻│ • jid @user
        ┃🧑‍💻│ • boom
        ┃🧑‍💻╰──────────────
        ╰━━━━━━━━━━━━━━━┈⊷
        
        > ☀©POWERD BY DILSHAN MD`,
        'image': true
      },
      '5': {
        'title': "🤖 *AI Menu* 🤖",
        'content': `╭━━━〔 *AI Menu* 〕━━━┈⊷
        ┃☀╭──────────────☀
        ┃🚀│ 💬 *Chat AI*
        ┃🚀│ • ai [query]
        ┃🚀│ • open ai
        ┃🚀╰──────────────
        ╰━━━━━━━━━━━━━━━┈⊷
         
         > ☀©POWERD BY DILSHAN MD`,
        'image': true
      },
      '6': {
        'title': "🎎 *Anime Menu* 🎎",
        'content': `╭━━━〔 *Anime Menu* 〕━━━┈⊷
        ┃☀╭──────────────☀
        ┃📍│ 🖼️ *Images*
        ┃📍│ • dog
        ┃📍╰──────────────
        ┃📍╭──────────────
        ┃📍│ 🎭 *Characters*
        ┃📍│ • animegirl(1)
        ┃📍│ • animegirl(2)
        ┃📍│ • animegirl(3)
        ┃📍│ • animegirl(4)
        ┃📍│ • animegirl(5)
        ┃📍│ • anime
        ┃📍│ • animeboy
        ┃📍╰──────────────
        ╰━━━━━━━━━━━━━━━┈⊷
        
        > ☀©POWERD BY DILSHAN MD`,
        'image': true
      },
      '7': {
        'title': "🔄 *Convert Menu* 🔄",
        'content': `╭━━━〔 *Convert Menu* 〕━━━┈⊷
        ╰──────────────
        ┃☀╭──────────────☀
        ┃📌│ 📝 *Text*
        ┃📌│ • fancy [text]
        ┃📌╰──────────────
       ╰━━━━━━━━━━━━━━━┈⊷>
       
       > ☀©POWERD BY DILSHAN MD`,
        'image': true
      },
      '8': {
        'title': "📌 *Other Menu* 📌",
        'content': `╭━━━〔 *Other Menu* 〕━━━┈⊷
        ┃🌟╭──────────────
        ┃🔗│ 🎲 *Random*
        ┃🔗│ • fact
        ┃🔗╰──────────────
        ┃🔗╭──────────────
        ┃🔗│ 🔍 *Search*
        ┃🔗│ • movie [name]
        ┃🔗│ • weather [loc]
        ┃🔗╰──────────────
        ╰━━━━━━━━━━━━━━━┈⊷
        
        > ☀©POWERD BY DILSHAN MD`,
        'image': true
      },
      '9': {
        'title': "💞 *Reactions Menu* 💞",
        'content': `╭━━━〔 *Reactions Menu* 〕━━━┈⊷
        ┃☀╭──────────────☀
        ┃🚀│ 😊 *Expressions*
        ┃🚀│ • happy @user
        ┃🚀│ • heart
        ┃🚀│ • angry
        ┃🚀│ • sad
        ┃🚀│ • shy
        ┃🚀│ • moon
        ┃🚀│ • confuused
        ┃🚀│ • hot
        ┃🚀╰──────────────
        ╰━━━━━━━━━━━━━━━┈⊷  >
        
        > ☀©POWERD BY DILSHAN MD`,
        'image': true
      },
      '10': {
        'title': "🏠 *Main Menu* 🏠",
        'content': `╭━━━〔 *Main Menu* 〕━━━┈⊷
        ┃☢️╭──────────────
        ┃☢️│ ℹ️ *Bot Info*
        ┃☢️│ • ping
        ┃☢️│ • ping2
        ┃☢️│ • alive
        ┃☢️│ • runtime
        ┃☢️│ • uptime
        ┃☢️│ • repo
        ┃☢️│ • owner
        ┃☢️│ • pair
        ┃☢️│ • about
        ┃☢️╰──────────────
        ┃☢️╭──────────────
        ┃☢️│ 🛠️ *Controls*
        ┃☢️│ • restart
        │☢️│ • menu
        ┃☢️╰─────────────
        ╰━━━━━━━━━━━━━━━┈⊷>
        
        > ☀©POWERD BY DILSHAN MD`,
        'image': true
      }
    };
    const _0x529a8e = async _0x4cf589 => {
      try {
        const _0x1a45cf = _0x4cf589.messages[0x0];1198517427
        if (!_0x1a45cf?.['message'] || !_0x1a45cf.key?.["remoteJid"]) {
          return;
        }1198517427
        const _0x16cae9 = _0x1a45cf.message.extendedTextMessage?.["contextInfo"]?.['stanzaId'] === _0x184367;
        if (_0x16cae9) {
          const _0x266910 = _0x1a45cf.message.conversation || _0x1a45cf.message.extendedTextMessage?.["text"];
          const _0x473499 = _0x1a45cf.key.remoteJid;
          if (_0x70be46[_0x266910]) {
            const _0x2ea0c9 = _0x70be46[_0x266910];
            try {
              if (_0x2ea0c9.image) {
                await _0x1f175b.sendMessage(_0x473499, {
                  'image': {
                    'url':"https://files.catbox.moe/zqu8s7.jpg"
                  },
                  'caption': _0x2ea0c9.content,
                  'contextInfo': _0x18e40d
                }, {
                  'quoted': _0x1a45cf
                });
              } else {
                await _0x1f175b.sendMessage(_0x473499, {
                  'text': _0x2ea0c9.content,
                  'contextInfo': _0x18e40d
                }, {
                  'quoted': _0x1a45cf
                });
              }
              await _0x1f175b.sendMessage(_0x473499, {
                'react': {
                  'text': '✅',
                  'key': _0x1a45cf.key
                }
              });
            } catch (_0x283101) {
              console.log("Menu reply error:", _0x283101);
              await _0x1f175b.sendMessage(_0x473499, {
                'text': _0x2ea0c9.content,
                'contextInfo': _0x18e40d
              }, {
                'quoted': _0x1a45cf
              });
            }
          } else {
            await _0x1f175b.sendMessage(_0x473499, {
              'text': "❌ *Invalid Option!* ❌\n\nPlease reply with a number between 1-10 to select a menu.\n\n*Example:* Reply with \"1\" for Download Menu\n\n> " + config.DESCRIPTION,
              'contextInfo': _0x18e40d
            }, {
              'quoted': _0x1a45cf
            });
          }
        }
      } catch (_0x35eeca) {
        console.log("Handler error:", _0x35eeca);
      }
    };
    _0x1f175b.ev.on("messages.upsert", _0x529a8e);
    setTimeout(() => {
      _0x1f175b.ev.off("messages.upsert", _0x529a8e);
    }, 0x493e0);
  } catch (_0xf3fc40) {
    console.error("Menu Error:", _0xf3fc40);
    try {
      await _0x1f175b.sendMessage(_0x98cd0, {
        'text': "❌ Menu system is currently busy. Please try again later.\n\n> " + config.DESCRIPTION
      }, {
        'quoted': _0x482d64
      });
    } catch (_0x5d05fd) {
      console.log("Final error handling failed:", _0x5d05fd);
    }
  }
});
