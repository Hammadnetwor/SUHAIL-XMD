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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_05_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDU5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDYxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI5LFxuICAgICAgICA4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1OCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDU2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxLFxuICAgICAgICA4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAwLFxuICAgICAgICA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDY3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPRTdLWnFHRTJvckNaTndjN0JMVGM5ZisxaFJKYVB0V3IrVkNkS3FuZnYwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzExNTE1MjEwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDQ1QzlDMDgxNzM3RkY2NENDMzJDMkQxQjNCMENCNTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0NTIzNTI0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlljTy1ySUNoUS1TUzAwZ2Q0SDVnMlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDhjOTQ5M2UtMTIzNC00ZTM1LWJlMzUtZWVlNmFmM2MzNDBlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgNTcsXG4gICAgICAxNjMsXG4gICAgICAxOTAsXG4gICAgICAzNixcbiAgICAgIDU5LFxuICAgICAgMTIwLFxuICAgICAgMTY2LFxuICAgICAgMTY5LFxuICAgICAgMTc3LFxuICAgICAgMTg5LFxuICAgICAgNzQsXG4gICAgICAxNTIsXG4gICAgICAxOTgsXG4gICAgICAzMCxcbiAgICAgIDI5LFxuICAgICAgMTYyLFxuICAgICAgNTEsXG4gICAgICAxMjcsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICAxMjIsXG4gICAgICA4NyxcbiAgICAgIDY2LFxuICAgICAgMTMwLFxuICAgICAgMjE4LFxuICAgICAgMTgsXG4gICAgICAxMixcbiAgICAgIDE2NSxcbiAgICAgIDk2LFxuICAgICAgNTYsXG4gICAgICA1NSxcbiAgICAgIDEwMSxcbiAgICAgIDI5LFxuICAgICAgMTYxLFxuICAgICAgMTU1LFxuICAgICAgMjQzLFxuICAgICAgMjI1LFxuICAgICAgNDYsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTNMU1RKN1NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzExNTE1MjEwNDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTIxNDU3NTE1ODkwOTc6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWFVcG80RUVQVDBpcnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaRlRrNVc2R3RnTmVNcEtGQW1DbEV5V2NyZkpYZXZsYWF4TWVNT2hNN3hzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlh6Ti9GUEppTFlOd2d3ckdRMmkvQ3Rqa1ZGbythR2dsUkZNdDQ0TEpYb2FBUWkrMC9mNnNTdUxHbUdlUTlZUnM1dm9FS3JUakFXOFRYeC90SW1YekF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjkvRG52YlZjbThHMkhnbDRjZUNuVHlkSk5Td3prZHVZYjdLUy9ONUlzcG9lS3BqbkNzMTVKalo3Nmw3cVV0dHNucFNuZjBPeG9xb2QrOGhtVzI3bmhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzExNTE1MjEwNDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ1MjM1MTdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
