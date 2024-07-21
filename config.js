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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_49_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjExLFxuICAgICAgICA0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk4LFxuICAgICAgICA5MixcbiAgICAgICAgNzQsXG4gICAgICAgIDQwLFxuICAgICAgICA3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAxLFxuICAgICAgICA4MCxcbiAgICAgICAgOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgODQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMixcbiAgICAgICAgOTIsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAyLFxuICAgICAgICA2MixcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDk0LFxuICAgICAgICA5OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDcyLFxuICAgICAgICA2MixcbiAgICAgICAgMTAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDgwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNSxcbiAgICAgICAgMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODksXG4gICAgICAgIDMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJDUjhabWJLL2hqT3FFNEpna3E4d0lsd0Nua3lEdlZ4Z2RxdDF6T1l3UzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklxQlZwSnkyUzNLZWxHTHV1VDdsLVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWM5NTYyN2YtNGVkNC00ZTRkLWE0MGUtMjEyYWZlZmZhNDgyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDE5NCxcbiAgICAgIDkxLFxuICAgICAgMTgzLFxuICAgICAgMzgsXG4gICAgICAxNTgsXG4gICAgICAxOTYsXG4gICAgICA4NCxcbiAgICAgIDE2OSxcbiAgICAgIDI0MyxcbiAgICAgIDE1MSxcbiAgICAgIDc3LFxuICAgICAgMjQsXG4gICAgICAyMjMsXG4gICAgICAxMjAsXG4gICAgICAxNjYsXG4gICAgICAyNDgsXG4gICAgICAxODMsXG4gICAgICAyMzksXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICAxMjMsXG4gICAgICAyMjksXG4gICAgICAzMyxcbiAgICAgIDE3OSxcbiAgICAgIDExNyxcbiAgICAgIDE1NCxcbiAgICAgIDIyMSxcbiAgICAgIDIzNixcbiAgICAgIDcxLFxuICAgICAgMjQyLFxuICAgICAgNDAsXG4gICAgICAxOTMsXG4gICAgICAxMzUsXG4gICAgICAyNTUsXG4gICAgICAyMTEsXG4gICAgICAyNDUsXG4gICAgICAxMDQsXG4gICAgICA4MCxcbiAgICAgIDE4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0R1pEQTZDRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMjk3ODM0MDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc4NDAwMTE2MjQ0ODU6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSSt0aDc0TkVLN005YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmUXlqVjFHekc2MnFPTFdmRVBaSTlLdmZ0cGl2SDRWNnJ4b1RqdjlHVVdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJaQjZXVzdYRVZhUjZGNDdXMkdLeHAwc0VyZUwrMzV0OXphaUtZdGF2N2dOaDYrQkhYc0V3dUN6Sy9aRHdmd0tSSkQzWC9RVnJ0cG8rdlIyb0M5ZmdBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkwyNnQ2YVIvYm1DQkRLTU5RdUZuNnhzM2pEY1A1bFFMVWxSV0N3NFBoNWQyYXJ4L3Q3ZTVsRXVqdUU0UmVzbEtVZ25reFdCeGkvRm5FQVhsdEZsT2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzI5NzgzNDA6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU5MTM0NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
