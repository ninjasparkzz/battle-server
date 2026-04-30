'use strict';

/**
 * The server port - Modified for Back4App/Cloud support
 */
exports.port = process.env.PORT || 8000;

/**
 * The server address
 */
exports.bindaddress = '0.0.0.0';

/**
 * PROXY LOCK BYPASS
 * This allows users to connect from hosting provider IPs (like Back4App/Render)
 */
exports.permissiveproxy = true;
exports.noproxylookups = true;

/**
 * RAM OPTIMIZATION
 * Set to 0 to disable subprocesses and save memory on the 256MB free tier.
 */
exports.subprocesses = 0;

/**
 * ADMIN ACCESS
 * Replace 'your_name' with your actual Pokemon Showdown username.
 */
exports.developers = ['sparkzzninja'];

/**
 * wsdeflate - compresses WebSocket messages
 */
exports.wsdeflate = null;

exports.lazysockets = false;

exports.ssl = null;

exports.proxyip = false;

/**
 * Various debug options
 */
exports.ofemain = false;
exports.ofesockets = false;
exports.debugsimprocesses = true;
exports.debugvalidatorprocesses = true;
exports.debugdexsearchprocesses = true;

exports.potd = '';

exports.crashguard = true;

/**
 * Login server data
 */
exports.loginserver = 'http://play.pokemonshowdown.com/';
exports.loginserverkeyalgo = "RSA-SHA1";
exports.loginserverpublickeyid = 4;
exports.loginserverpublickey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAzfWKQXg2k8c92aiTyN37
dl76iW0aeAighgzeesdar4xZT1A9yzLpj2DgR8F8rh4R32/EVOPmX7DCf0bYWeh3
QttP0HVKKKfsncJZ9DdNtKj1vWdUTklH8oeoIZKs54dwWgnEFKzb9gxqu+z+FJoQ
vPnvfjCRUPA84O4kqKSuZT2qiWMFMWNQPXl87v+8Atb+br/WXvZRyiLqIFSG+ySn
Nwx6V1C8CA1lYqcPcTfmQs+2b4SzUa8Qwkr9c1tZnXlWIWj8dVvdYtlo0sZZBfAm
X71Rsp2vwEleSFKV69jj+IzAfNHRRw+SADe3z6xONtrJOrp+uC/qnLNuuCfuOAgL
dnUVFLX2aGH0Wb7ZkriVvarRd+3otV33A8ilNPIoPb8XyFylImYEnoviIQuv+0VW
RMmQlQ6RMZNr6sf9pYMDhh2UjU11++8aUxBaso8zeSXC9hhp7mAa7OTxts1t3X57
72LqtHHEzxoyLj/QDJAsIfDmUNAq0hpkiRaXb96wTh3IyfI/Lqh+XmyJuo+S5GSs
RhlSYTL4lXnj/eOa23yaqxRihS2MT9EZ7jNd3WVWlWgExIS2kVyZhL48VA6rXDqr
Ko0LaPAMhcfETxlFQFutoWBRcH415A/EMXJa4FqYa9oeXWABNtKkUW0zrQ194btg
Y929lRybWEiKUr+4Yw2O1W0CAwEAAQ==
-----END PUBLIC KEY-----
`;

exports.routes = {
	root: 'pokemonshowdown.com',
	client: 'play.pokemonshowdown.com',
	dex: 'dex.pokemonshowdown.com',
	replays: 'replay.pokemonshowdown.com',
};

exports.crashguardemail = null;

exports.disablebasicnamefilter = false;

exports.allowrequestingties = true;

exports.reportjoins = true;

exports.reportjoinsperiod = 0;

exports.reportbattles = false; // Set to false to save RAM

exports.reportbattlejoins = true;

exports.monitorminpunishments = 3;

exports.nothrottle = false;

exports.noipchecks = false;

exports.nobattlesearch = false;

exports.punishmentautolock = false;

exports.restrictLinks = false;

exports.chatmodchat = false;
exports.battlemodchat = false;
exports.pmmodchat = false;
exports.laddermodchat = false;

exports.forcetimer = false;

exports.forceregisterelo = false;

exports.backdoor = true;

exports.consoleips = ['127.0.0.1'];

exports.watchconfig = true;

exports.logchat = false;

exports.logchallenges = false;

exports.loguserstats = 1000 * 60 * 10; 

exports.inactiveuserthreshold = 1000 * 60 * 60;

exports.autolockdown = true;

exports.noguestsecurity = false;

exports.tourroom = '';
exports.tourannouncements = [];
exports.tourdefaultplayercap = 0;
exports.ratedtours = false;

exports.appealurl = '';

exports.repl = true;
exports.replsocketprefix = './logs/repl/';
exports.replsocketmode = 0o600;

exports.disablehotpatchall = false;

exports.forcedpublicprefixes = [];

exports.startuphook = function () {};

exports.lastfmkey = '';

exports.chatlogreader = 'fs';

// Keeping your Group List as is
exports.grouplist = [
	{
		symbol: '~',
		id: "admin",
		name: "Administrator",
		inherit: '@',
		jurisdiction: 'u',
		globalonly: true,
		console: true,
		bypassall: true,
		lockdown: true,
		promote: '~u',
		roomowner: true,
		roombot: true,
		roommod: true,
		roomdriver: true,
		forcewin: true,
		declare: true,
		addhtml: true,
		rangeban: true,
		makeroom: true,
		editroom: true,
		editprivacy: true,
		potd: true,
		disableladder: true,
		gdeclare: true,
		gamemanagement: true,
		exportinputlog: true,
		tournaments: true,
	},
    // ... (rest of your groups here)
];
