cmd({
  pattern: "sticker",
  alias: ["s"],
  react: "😊",
  desc: "Photo to sticker",
  category: "convert",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    if (!quoted) return reply("Please reply to a photo")
    if (!quoted.message.imageMessage) return reply("Only photos can be converted to stickers")

    let media = await conn.downloadAndSaveMediaMessage(quoted)
    let sticker = new Sticker(media, {
      pack: 'Dilshan MD',
      author: 'Sticker',
      type: StickerTypes.FULL,
      categories: ['🤩', '🎉'],
      id: '12345',
      quality: 50,
      background: 'transparent'
    })
    let buffer = await sticker.toBuffer()
    await conn.sendMessage(from, { sticker: buffer }, { quoted: mek })
  } catch (e) {
    console.log(e)
    reply(`${e}`)
  }
})
