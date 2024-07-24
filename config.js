const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349032978340";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_43_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MixcbiAgICAgICAgMTg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDUzLFxuICAgICAgICAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgyLFxuICAgICAgICA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDYxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDczLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MixcbiAgICAgICAgNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1LFxuICAgICAgICA3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU5LFxuICAgICAgICA5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk2LFxuICAgICAgICA0LFxuICAgICAgICA3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZnRrWDRpMVF3MEJzQ3BuVmtYWnB1RW1uVFA0RDBudkQ2aUloTzRzUWptcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSFB3QTB1anJTZ1NUX3VJQ2o0cjJnZ1wiLFxuICBcInBob25lSWRcIjogXCI5ZDNmZDM0Yi02OThiLTQ2NzctYjAxZS03YmEwOWEzMWU4MGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgMzAsXG4gICAgICAyNyxcbiAgICAgIDI0OCxcbiAgICAgIDk0LFxuICAgICAgMTYsXG4gICAgICAxNjYsXG4gICAgICA5MixcbiAgICAgIDI2LFxuICAgICAgODIsXG4gICAgICAxMDIsXG4gICAgICAxMzcsXG4gICAgICAxMzAsXG4gICAgICAxODksXG4gICAgICA0NCxcbiAgICAgIDEyMyxcbiAgICAgIDE2NyxcbiAgICAgIDIzOCxcbiAgICAgIDEyLFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDE2NCxcbiAgICAgIDY2LFxuICAgICAgMjM0LFxuICAgICAgMSxcbiAgICAgIDE5MCxcbiAgICAgIDEzLFxuICAgICAgMTI2LFxuICAgICAgMjA1LFxuICAgICAgMTAwLFxuICAgICAgMjMzLFxuICAgICAgNzIsXG4gICAgICA4MSxcbiAgICAgIDE3MixcbiAgICAgIDI0NCxcbiAgICAgIDIzOSxcbiAgICAgIDEyMixcbiAgICAgIDExMSxcbiAgICAgIDE1NyxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKN1NZSjVTNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMjk3ODM0MDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc4NDAwMTE2MjQ0ODU6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT255NCt3TkVON1JnN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmUXlqVjFHekc2MnFPTFdmRVBaSTlLdmZ0cGl2SDRWNnJ4b1RqdjlHVVdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFqb1ZxYmRvbGJuUG1EOFZNYlFYK010YXZOY3UyVjNKdXlVUTc4cDdIZU9adnYzQUluMU5XQjVjOHJqZWNYVFNHUE5iWGNFSm1Ib2gvQWhoemgzamp3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInh1ZEdJSWlQNjkyV1lJb0pyclc4KzlIbTFuRHpzQTJuOVNDZjcxVGxPcnd2OWpjOFR1SlowRnNFenFmVWMzaldIS2l3NW1wZkVCVGpkZmtMRlhjOUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzI5NzgzNDA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgyMTQxMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
