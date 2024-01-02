const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `${pesan}\n`;
  let teks = `𝗡𝗘𝗚𝗥𝗔𝗦 𝗔𝗖𝗧𝗜𝗩𝗘𝗡𝗦𝗘 💗\n${oi}\n`;
  for (const mem of participants) {
    teks += `🫧››  @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n 🫧 𝗬𝘅𝗺𝗶𝘀 𝗕𝗼𝘁 🫧`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
