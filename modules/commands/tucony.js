const fs = require("fs");
module.exports.config = {
	name: "Tú có ny",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "tú có ny",
	commandCategory: "Không cần dấu lệnh",
	usages: "Tú có ny",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tú có ny")==0 || (event.body.indexOf("Tú có ny")==0)) {
		var msg = {
				body: "Nhạc tú có người êu",
				attachment: fs.createReadStream(__dirname + `/noprefix/tucony.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}