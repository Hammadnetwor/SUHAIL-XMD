const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_42_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgODgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUyLFxuICAgICAgICA1MixcbiAgICAgICAgMjI3LFxuICAgICAgICA5MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMyxcbiAgICAgICAgODksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI3LFxuICAgICAgICA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MixcbiAgICAgICAgMjE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4LFxuICAgICAgICA1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDgwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJja0VoS2VGanZvTjM1aE5kTUxGQUowbnArMVA4NUFZQWFLUHFtTmc3MEJNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzExNTE1MjEwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEIzOEZEMDk0MjQzQjc4Qzk3MkYxODg5ODM0OTc5NDhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0ODM1MzIwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhBUmxCTUdrUTJlMVFOWFBPdm03eXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjYzNDdmYjctYzlmMS00MDhiLThmM2UtNTQyNTZlNjMwZDQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDEwOSxcbiAgICAgIDk2LFxuICAgICAgMjMzLFxuICAgICAgOTgsXG4gICAgICAyMzUsXG4gICAgICAxNTEsXG4gICAgICAxNjYsXG4gICAgICAxMjIsXG4gICAgICAxNTIsXG4gICAgICA1OSxcbiAgICAgIDg2LFxuICAgICAgMTYsXG4gICAgICAyMSxcbiAgICAgIDExNCxcbiAgICAgIDQ1LFxuICAgICAgMjEyLFxuICAgICAgMTI4LFxuICAgICAgMzcsXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDM3LFxuICAgICAgMTk5LFxuICAgICAgODIsXG4gICAgICAxMjgsXG4gICAgICAxODksXG4gICAgICAyMjIsXG4gICAgICA2MyxcbiAgICAgIDIwLFxuICAgICAgNjcsXG4gICAgICAxNjQsXG4gICAgICAxMCxcbiAgICAgIDE1LFxuICAgICAgMTgyLFxuICAgICAgMTE2LFxuICAgICAgMjE5LFxuICAgICAgMTcwLFxuICAgICAgMTg0LFxuICAgICAgMzksXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzJaRUM2UENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzExNTE1MjEwNDozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTIxNDU3NTE1ODkwOTc6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWVVcG80RUVPLzRuYnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaRlRrNVc2R3RnTmVNcEtGQW1DbEV5V2NyZkpYZXZsYWF4TWVNT2hNN3hzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNrYi84cDFqZlpXUU81VmtFeEg3cE85T2w1YTlaQ0dUYWVYMld5eGVEMHprbWRmRk5uZXk1Z3k4amltZkl5YjlsQWo0QU5rTEZoY1gyWEhtSnZkMUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkY3d28rMXFocE5QYWdSWk9pOVp6MEJ4Wmk0UEM3L3o2Z1FGbGhnTVhwTGJzNkRGUWgyczNucTF6eFlWUktKam0yY1JLMmFrdUJBUGJPNDF3WHZENGl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzExNTE1MjEwNDozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ4MzUzMTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTytcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpPKy5qc29uIjogIntcImtleURhdGFcIjpcInEya1pnUnZuQXQ0bkczZG5NYUJRcVFmendvSmozc013cGtIZ2ZSUjlLTGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEwMzcyNzE3NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDgzNTIzNzE4NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
