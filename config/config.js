'use strict';
exports.port = process.env.PORT || 10000;
exports.bindaddress = '0.0.0.0';
exports.permissiveproxy = true;
exports.noproxylookups = true;
// RAM LIMIT FIX
exports.subprocesses = 0;
exports.workerprocesses = 0;
exports.reportjoins = false;
exports.reportbattles = false;
exports.reportbattlejoins = false;
// ADMIN ACCESS (Put your name here)
exports.developers = ['your_name'];
// OTHER SETTINGS
exports.wsdeflate = null;
exports.lazysockets = false;
exports.ssl = null;
exports.proxyip = false;
exports.ofemain = false;
exports.ofesockets = false;
exports.debugsimprocesses = false;
exports.potd = '';
exports.crashguard = true;
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
-----END PUBLIC KEY-----`;
exports.routes = {
	root: 'pokemonshowdown.com',
	client: 'play.pokemonshowdown.com',
	dex: 'dex.pokemonshowdown.com',
	replays: 'replay.pokemonshowdown.com',
};
exports.inactiveuserthreshold = 1000 * 60 * 60;
exports.autolockdown = true;
exports.noguestsecurity = false;
exports.repl = false;
exports.watchconfig = false;
exports.grouplist = [
	{symbol: '~', id: "admin", name: "Administrator", root: true},
	{symbol: '#', id: "owner", name: "Room Owner", inherit: '@'},
	{symbol: '@', id: "mod", name: "Moderator", inherit: '%'},
	{symbol: '%', id: "driver", name: "Driver", inherit: '+'},
	{symbol: '+', id: "voice", name: "Voice", inherit: ' '},
	{symbol: ' ', ipself: true}
];

