const axios = require("axios");

startToCheckScam();

function startToCheckScam() {
	checkScam();
}

function checkScam() {
	module.exports = async (content) => {
		try {
			const loadAPI = await axios.get("https://raw.githubusercontent.com/nikolaischunk/discord-phishing-links/main/domain-list.json");
			if (!loadAPI) return startToCheckScam();

			let response;

			for (scams of loadAPI.data.domains) {
				if (!content) response = false;

				if (content === scams || content.includes(scams)) {
					response = true;
					break;
				} else response = false;

			}
			return response;
		} catch (error) {
			startToCheckScam();
		}
	}
}
