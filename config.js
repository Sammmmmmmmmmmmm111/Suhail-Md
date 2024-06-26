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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349079736932";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_57_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODksXG4gICAgICAgIDU3LFxuICAgICAgICA5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDg1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjExLFxuICAgICAgICA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAwLFxuICAgICAgICA4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0LFxuICAgICAgICA1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjExLFxuICAgICAgICA3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQyLFxuICAgICAgICA1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTb25FcW0yWEkvVUJTbWRDaDA4MGM1SFdMMzNjQXlZR0dnODFLcjNraEdzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNzk3MzY5MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYxNkQ2MzYyRjQ0NjYzMDA1MDA5ODFFNkYyNjQzNTdGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTE5MDYzM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWMDROeDF6LVEyQ0VsdzljZmoyRDVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM4YzBkODY1LWE5ODUtNDg0YS04Mjk3LTZlOGM4MGEyMTJmOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDE5LFxuICAgICAgMTQzLFxuICAgICAgMjUwLFxuICAgICAgNzksXG4gICAgICAyMjQsXG4gICAgICAxNzksXG4gICAgICAxMzksXG4gICAgICAyMTcsXG4gICAgICAyMzksXG4gICAgICA4MixcbiAgICAgIDE5OSxcbiAgICAgIDIwNSxcbiAgICAgIDU5LFxuICAgICAgMTI0LFxuICAgICAgMTIyLFxuICAgICAgMzcsXG4gICAgICAxODIsXG4gICAgICAyMjcsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMTQ4LFxuICAgICAgOTEsXG4gICAgICA5NixcbiAgICAgIDEwNixcbiAgICAgIDIxOSxcbiAgICAgIDEwMyxcbiAgICAgIDE4MixcbiAgICAgIDExNyxcbiAgICAgIDE0OSxcbiAgICAgIDExOCxcbiAgICAgIDg0LFxuICAgICAgMjMwLFxuICAgICAgMTAzLFxuICAgICAgMjM0LFxuICAgICAgMjUsXG4gICAgICAyNixcbiAgICAgIDEzLFxuICAgICAgMjI4LFxuICAgICAgOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaTEhQMjdRQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3OTczNjkzMjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODgzMjYxNjIyNTYwMzA6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLUEZ3ZWdHRU9HSTQ3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk0xQUtidGtieW9uK0lXbjZkQkNrUUNrT2k3NDdZYjNtaDhXVENFTjNSbms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV1dKNHN5VDdFMkp4dk8wTStCeVJWRkhFRHRxZVdxNXlDeGlnWWFFVGxlOVJWOVduZkFCTUpOT3pYbTVlbk14UjRyNE5ReXd1T1pMTFJEdHdqMFBsRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicDNERnQ4VGVPU3pBUFo0SUllVDd1b280NHI3REFqaWxXc0tmVjVVOExyaWoxL3BZb2xBR1p4VmpDeEhaajJKR3hDMENnUW5HKzQ0WGZQV3R2dTBqQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3OTczNjkzMjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MTkwNjI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTnhLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOeEsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCTlVEdnUxaDBsL1BPVGUxNGJ5aGZiNDdpT1VjRU1JUWE3MnRRU2Q1cVJVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4Mjk3OTAzNzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
