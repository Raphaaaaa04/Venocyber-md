//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "true";
global.video = "true";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742695219";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1B1dnRGU2J3YWlZcWlMRlhzLy9tOXErTVpBS0NBNDlvMVJGZVRCY21GST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2pJbm1PeEt6OFlyN2ZPN1h5Q1hpQXBLVW9sNWlSMml2UUNteUxOOVBqND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTEN3QTQweitzUnpmWVdwMEY3ZmI4UWM4M1NPaFA1NGdyeTFCNEErOEhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRnBLTDBnbitvUk8zZ1V4aHlLWVBZZEVuTnZONlhSb3g4NWlFYzZheVZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGTitPc2V5VHlBWk5KT0t2ZGIwMFgrdnFTZTFEUVRsZjIveXh4TXd3R1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRHem9tT3F6VlExWE9ydVhLbThyOU95ME8rWDJSNWJvQndMd1hVYVNsUTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid01HOUNSN1JjUVNvMGhlcFJsaWVrM2lsUjI3R2RCUmp4a1lmWlg0alozUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmJkTnllQnFEVGtNVVVZVGdOYVAxT3NITjVSYVFsK3QzeDRtMUJmeG1oVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjUyMmJ0ZXl2dWt4SWp4TjFFYXpFMytEM01SUDdBZmovdDlnZ1NzY2FPbExNdnBlazRrT0FXM0xOMG1CNlNEZjVPdUJNdmxhaU1CS25KWGtRbFFnRmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6ImtqdisybC9xRk96dGh3OWhYakVPbHJWT0xQY1ZDb3g3RXVZQUZSSWZCM3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IllhUTJHdjdWUkZTbU93THhWRGlEUFEiLCJwaG9uZUlkIjoiYWJjNDUxZDgtNGIwMS00OWM5LWIxYTMtYjk4NTI1NjBiYTFlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRFSnNXRFUvRHBqdk1GeUtlT1h4c3Nybm0zbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZYVVjcy9kbDZmcGRzU01rTkJDSnF0TWJ3WEU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRTRQM1BFQzkiLCJtZSI6eyJpZCI6IjI1NTc0MjY5NTIxOTo2NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTy9LMHRNRkVLZVFnTFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicjNKTEJtT0xkcXNiY05Fa2daYVpOMjVOdWo0QUUzZ1RmQ0FwMitFSld6WT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiLzU2eTduN3djMGdEcmx1YjRSRkNNTHBKWXlWdjNhc2NXczdBdGpuNjRJR0ZlWlU2OWlxSnI3b3lTblhrN0pjRkRUU3FwRGZldjV6MWhhUzkvb24xRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IituTFZSWmcvVE1DK0xsZTZqMC83MGxyNDZNdVBFMUwzOW1ka2V1dW1GSDlHQytIeEUrU2lBZnlWLzFBMEF3WGlGVXY4b1RJbnZPeHA0RVp4c0ZEVGlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzQyNjk1MjE5OjY1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmE5eVN3WmppM2FyRzNEUkpJR1dtVGR1VGJvK0FCTjRFM3dnS2R2aENWczIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE3NjM4OTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTS9wIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "all in all we are a family",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "RAPHAA-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Raphaa",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
