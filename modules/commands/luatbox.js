const fs = require("fs");
module.exports.config = {
	name: "Luật box",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Tiadals", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Luật box")==0 || (event.body.indexOf("luật box")==0)) {
		var msg = {
				body: "ʟᴜᴀ̣̂ᴛ ARMY OF DEATH\n1. ᴛᴠᴍ ᴠᴀ̀ᴏ ᴛᴜ̛̣ sᴇᴛ ʙɪᴇ̣̂ᴛ ʜɪᴇ̣̂ᴜ AOD•(Tên + Năm Sinh) ᴆᴇ̂̉ ᴅᴇ̂̃ xᴜ̛ɴɢ ʜᴏ̂\n2.  ᴛᴏ̂ɴ ᴛʀᴏ̣ɴɢ ᴍᴏ̣ɪ ɴɢᴜ̛ᴏ̛̀ɪ ᴛʀᴏɴɢ ʙᴏx\nʏᴇ̂ᴜ ᴍᴏ̣ɪ ɴɢᴜ̛ᴏ̛̀ɪ ʀᴀ̂́ᴛ ɴʜɪᴇ̂̀ᴜ ♡ !!\n𝘽𝙤𝙨𝙨 : Văn Mẫn <3 ",
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}