const futsal3 = `{"name":"Futsal 3x3 4x4","width":755,"height":339,"spawnDistance":310,"bg":{"type":"hockey","width":665,"height":290,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":-665,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":-80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-665,"y":-290,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":665,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":-80,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":665,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":306,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"line"},{"x":0,"y":-306,"trait":"kickOffBarrier"},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-693,"y":-80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":693,"y":-80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-693,"y":80},{"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":693,"y":80},{"trait":"line","x":-665,"y":-215},{"trait":"line","x":-500,"y":-50},{"trait":"line","x":665,"y":-215},{"trait":"line","x":500,"y":-50},{"trait":"line","x":-665,"y":215},{"trait":"line","x":-500,"y":50},{"trait":"line","x":665,"y":215},{"trait":"line","x":500,"y":50},{"bCoef":1,"trait":"ballArea","x":665,"y":290},{"bCoef":1,"trait":"ballArea","x":665,"y":-290},{"bCoef":0,"trait":"line","x":0,"y":290},{"bCoef":0,"trait":"line","x":0,"y":-290},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":674,"y":-80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":674,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-674,"y":-80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-674,"y":-290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-674,"y":80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-674,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":674,"y":80,"trait":"line","cMask":["ball"],"bCoef":1},{"x":674,"y":290,"trait":"ballArea","cMask":["ball"],"bCoef":1}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":2,"v1":12,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":6,"v1":13,"color":"FFFFFF","curve":35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":1,"v1":14,"color":"FFFFFF","curve":35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":5,"v1":15,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":12,"v1":14,"x":-585,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","v0":13,"v1":15,"x":585,"color":"FFFFFF","curve":35},{"color":"FFFFFF","trait":"line","v0":16,"v1":17,"curve":90},{"color":"FFFFFF","trait":"line","v0":18,"v1":19,"curve":-90},{"color":"FFFFFF","trait":"line","v0":20,"v1":21,"curve":-90},{"color":"FFFFFF","trait":"line","v0":22,"v1":23,"curve":90},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":17,"v1":21,"curve":0},{"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":19,"v1":23,"curve":0},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":665},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":24,"y":290},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":25,"y":-290},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":26,"v1":27},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":10,"v1":9},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":29,"v1":28},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":2,"v1":1},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":30,"v1":31,"cMask":["ball"],"x":614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":32,"v1":33,"cMask":["ball"],"x":-614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":34,"v1":35,"cMask":["ball"],"x":-614},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":36,"v1":37,"cMask":["ball"],"x":614}],"goals":[{"p0":[-674,-80],"p1":[-674,80],"team":"red"},{"p0":[674,80],"p1":[674,-80],"team":"blue"}],"discs":[{"pos":[-665,80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[-665,-80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[665,80],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[665,-80],"trait":"goalPost","color":"FFFFFF","radius":5}],"planes":[{"normal":[0,1],"dist":-290,"trait":"ballArea"},{"normal":[0,-1],"dist":-290,"trait":"ballArea"},{"normal":[0,1],"dist":-339,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-339,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-755,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-755,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":{"radius":6.4,"color":"EAFF00"}}`
const futsal1 = `{"name":"Futsal 1x1","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":50,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":50,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-50,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-171,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":50,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-50,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":176,"trait":"kickOffBarrier"},{"x":0,"y":50,"trait":"kickOffBarrier"},{"x":0,"y":-50,"trait":"line"},{"x":0,"y":-176,"trait":"kickOffBarrier"},{"bCoef":0.1,"cMask":["all"],"trait":"goalNet","x":-384,"y":-50},{"bCoef":0.1,"cMask":["all"],"trait":"goalNet","x":384,"y":-50},{"bCoef":0.1,"cMask":["all"],"trait":"goalNet","x":-384,"y":50},{"bCoef":0.1,"cMask":["all"],"trait":"goalNet","x":384,"y":50},{"trait":"line","x":-368,"y":-127},{"trait":"line","x":368,"y":-127},{"trait":"line","x":-368,"y":127},{"trait":"line","x":368,"y":127},{"bCoef":0,"trait":"line","x":-350,"y":-171},{"bCoef":0,"trait":"line","x":-368,"y":-163},{"bCoef":0,"trait":"line","x":350,"y":-171},{"bCoef":0,"trait":"line","x":368,"y":-163},{"bCoef":0,"trait":"line","x":-350,"y":171},{"bCoef":0,"trait":"line","x":-368,"y":163},{"bCoef":0,"trait":"line","x":350,"y":171},{"bCoef":0,"trait":"line","x":368,"y":163},{"bCoef":1,"trait":"ballArea","x":368,"y":171},{"bCoef":1,"trait":"ballArea","x":368,"y":-171},{"bCoef":0,"trait":"line","x":0,"y":171},{"bCoef":0,"trait":"line","x":0,"y":-171},{"x":0,"y":50,"trait":"kickOffBarrier"},{"x":0,"y":-50,"trait":"kickOffBarrier"},{"x":377,"y":-50,"trait":"line","cMask":["red"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-50,"trait":"line","cMask":["blue"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":50,"trait":"line","cMask":["blue"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":50,"trait":"line","cMask":["red"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"vis":true,"bCoef":0.1,"cMask":["all"],"trait":"goalNet","v0":2,"v1":12,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["all"],"trait":"goalNet","v0":6,"v1":13,"color":"FFFFFF","curve":35},{"vis":true,"bCoef":0.1,"cMask":["all"],"trait":"goalNet","v0":1,"v1":14,"color":"FFFFFF","curve":35},{"vis":true,"bCoef":0.1,"cMask":["all"],"trait":"goalNet","v0":5,"v1":15,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["all"],"trait":"goalNet","v0":12,"v1":14,"x":-585,"color":"FFFFFF","curve":-35},{"vis":true,"bCoef":0.1,"cMask":["all"],"trait":"goalNet","v0":13,"v1":15,"x":585,"color":"FFFFFF","curve":35},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":28,"y":171},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":29,"y":-171},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":30,"v1":31},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":10,"v1":9},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":33,"v1":32},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":2,"v1":1},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":34,"v1":35,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":36,"v1":37,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":38,"v1":39,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":40,"v1":41,"cMask":["ball"],"x":330},{"curve":60,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["red"],"trait":"line","v0":34,"v1":40},{"curve":60,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["blue"],"trait":"line","v0":38,"v1":36}],"goals":[{"p0":[-377,-50],"p1":[-377,50],"team":"red"},{"p0":[377,50],"p1":[377,-50],"team":"blue"}],"discs":[{"pos":[-368,50],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[-368,-50],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[368,50],"trait":"goalPost","color":"FFFFFF","radius":5},{"pos":[368,-50],"trait":"goalPost","color":"FFFFFF","radius":5},{"radius":3,"invMass":0,"pos":[383,51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[-383,51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[383,-51],"color":"FFFFFF","bCoef":0,"trait":"line"},{"radius":3,"invMass":0,"pos":[-383,-51],"color":"FFFFFF","bCoef":0,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":{"radius":6.4,"color":"EAFF00"}}`


const room = HBInit({
	roomName: "RiiTech",
	playerName: 'RiiTech BOT',
	maxPlayers: 8,
	password: 'riitech2',
	public: true
});

room.setCustomStadium(futsal3);
room.setScoreLimit(14);
room.setTimeLimit(14);

const server = `http://localhost:3000/api`;
const bot = room.getPlayerList().find(e => e.id == 0);
const authPlayers = {};
let gameData = {};
var whoTouchedLast = null;
var whoTouchedBall = [bot, bot];
let currentMatch = {};
let goalScored = false;
let sujdotajmer = 0;
let sujdoInterval = null;
let sujdoIntervalStart = () => {
	sujdoInterval = setInterval(() => {
		sujdotajmer += 1;
	}, 1000)
}


const updateAdmins = () => {
	const players = room.getPlayerList().filter((player) => player.id != 0);
	if (players.length == 0) return;
	if (players.find(e => e.name == 'Wolfdog')) return room.setPlayerAdmin(players.find(e => e.name == 'Wolfdog').id, true);
	if (players.find((player) => player.admin) != null) return;
	room.setPlayerAdmin(players[0].id, true);
}

room.onPlayerJoin = async function (player) {
	updateAdmins();

	const p = await fetch(`${server}/player/${player.name}`).then(res => res.json());
	if (p.status == 404) {
		room.sendChat(`Dobrodosao ${player.name}. Ovo ime je slobodno. Zauzmi ga sa komandom: !register <sifra>`, player.id);
	} else {
		room.sendChat(`Dobrodosao ${player.name}. Prijavi se sa: !login <sifra>`, player.id);
	}

	// kick ako se nije auth
	setTimeout(() => {
		if (!authPlayers[player.name]) {
			room.kickPlayer(player.id, 'Nisi se autentifikovao.', false)
		}
	}, 30000)

	setTimeout(() => {
		if (!authPlayers[player.name]) {
			room.sendChat('Imas jos 20 sekundi da se autentifikujes.', player.id)
		}
	}, 10000)

	setTimeout(() => {
		if (!authPlayers[player.name]) {
			room.sendChat('Imas jos 10 sekundi da se autentifikujes.', player.id)
		}
	}, 20000)
}

room.onPlayerLeave = function (player) {
	delete authPlayers[player.name];
	updateAdmins();
}

const isOwnGoal = (team, player) => team !== player.team ? true : false;

const register = async (player, message) => {
	let res = await fetch(`${server}/player`, {
		method: 'POST',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name: player.name, password: message })
	});
	if (res.status == 200) {
		res = await res.json();
		room.sendChat(`Uspesna registracija! Sada se uloguj pomocu te sifre sa: !login <sifra>`, player.id)
	} else {
		res = await res.json();
		room.sendChat('Doslo je do greske, pitaj Vucka sta je.', player.id)
		console.log(res)
	}
}

const login = async (player, message) => {
	let res = await fetch(`${server}/player/${player.name}`).then(res => res.json());
	if (res.status == 404) {
		room.sendChat('Nisi registrovan', player.id)
	} else {
		if (message == res.password) {
			room.sendChat(`Ulogovao si se.`, player.id);
			authPlayers[player.name] = res;
			authPlayers[player.name].id = player.id;
		} else {
			room.sendChat(`Pogresna sifra.`, player.id);
		}
	}
}

const stats = async (player) => {
	const p = authPlayers[player.name];
	if (p) {
		room.sendChat(`${player.name} == Pobeda: ${p.stats.victories}, Izgubljenih: ${p.stats.defeats}, Golova: ${p.stats.goals}, Autogolova: ${p.stats.ownGoals}`)
	} else {
		room.sendChat(`Nisi autentifikovan.`, player.id)
	}
}

const balance = async () => {
	let playerIds = [];
	for (const e in authPlayers) {
		playerIds.push(authPlayers[e]._id)
	}
	if (playerIds.length % 2 !== 0) {
		return room.sendChat(`Neparan broj igraca`);
	}
	if (playerIds.length !== 6 && playerIds.length !== 8) {
		return room.sendChat(`Potrebno je 6 ili 8 igraca za ranked game.`)
	}
	playerIds = playerIds.join(',')
	const res = await fetch(`${server}/match/balance?players=${playerIds}`).then(res => res.json());
	res.redTeam.map(e => {
		room.setPlayerTeam(authPlayers[e].id, 1)
	})

	res.blueTeam.map(e => {
		room.setPlayerTeam(authPlayers[e].id, 2)
	})

	room.setTeamsLock(true)
}

const startGame = () => {
	room.startGame();
}


room.onPlayerChat = (player, message) => {
	if (message.startsWith('!')) {
		const command = message.split(' ');

		switch (command[0]) {
			case '!register': register(player, command[1]); return false;
			case '!login': login(player, command[1]); return false;
			case '!stats': stats(player); break;
			// default: room.sendChat(`Nepoznata komanda.`, player.id); break;
		}


		if (player.admin) {
			switch (command[0]) {
				case '!balance': balance(); break;
				case '!start': startGame(); break;
			}
		}

	}
}

room.onTeamGoal = (team) => {
	goalScored = true;
	const og = isOwnGoal(team, whoTouchedBall[0])
	const mess = og ? ' an autogoal.' : '.'
	room.sendChat(`${whoTouchedLast.name} has scored${mess}`)
	gameData.goals.push({ player: authPlayers[whoTouchedLast.name]._id, ownGoal: og })

}

room.onGameTick = () => {
	if (!goalScored) {
		whoTouchedLast = getLastTouchTheBall(whoTouchedLast);
	}
	if (whoTouchedLast) {
		if (whoTouchedLast.id != whoTouchedBall[0].id) {
			whoTouchedBall[1] = whoTouchedBall[0];
			whoTouchedBall[0] = whoTouchedLast; // last player who touched the ball
		}
	}
}

room.onPlayerActivity = (player) => {
	if (player.name == 'sujdo') {
		if (sujdotajmer > 5) {
			room.sendChat(`Sujdo je ponovo aktivan posle ${sujdotajmer} sekundi.`)
		}

		sujdotajmer = 0;
	}
}

room.onPlayerBallKick = (player) => {
	whoTouchedLast = player;
}

room.onPositionsReset = () => {
	goalScored = false;

	sujdotajmer = 0;
	clearInterval(sujdoInterval);
	sujdoIntervalStart();
}

room.onGameStart = (byPlayer) => {
	gameData.date = new Date();
	gameData.goals = [];
	const players = room.getPlayerList();
	const redTeam = players.filter(e => e.team == 1).map(e => authPlayers[e.name]._id)
	const blueTeam = players.filter(e => e.team == 2).map(e => authPlayers[e.name]._id)
	gameData.redTeam = redTeam;
	gameData.blueTeam = blueTeam;

	if (players.find(e => e.name == 'sujdo')) {
		sujdoIntervalStart();
	}
}

const updatePlayersStats = async () => {
	let players = Object.keys(authPlayers);
	players = players.map(e => fetch(`${server}/player/${e}`).then(res => res.json()));
	players = await Promise.all(players);
	players.map(e => {
		if (authPlayers[e.name]) {
			authPlayers[e.name].stats = e.stats;
		} else {
			console.log('iz nekog razloga nema igraca')
		}
	})
}

room.onGameStop = async () => {
	gameData = {};
	whoTouchedLast = bot;
	whoTouchedBall = [bot, bot];
	await updatePlayersStats();

	sujdotajmer = 0;
	clearInterval(sujdoInterval)

}

room.onTeamVictory = async (score) => {
	gameData.redScore = score.red;
	gameData.blueScore = score.blue;

	// posalji post za match
	const res = await fetch(`${server}/match`, {
		method: 'POST',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(gameData)
	});
	if (res.status == 200) {
		room.sendChat(`Successfully recorded match data.`)
	} else {
		room.sendChat(`Error with saving match.`);
		console.log(res)
		console.log(await res.json())
	}
}

const radiusBall = 6.4;
const triggerDistance = radiusBall + 15 + 0.1;
function getLastTouchTheBall(lastPlayerTouched, time) {
	var ballPosition = room.getBallPosition();
	var players = room.getPlayerList();
	for (var i = 0; i < players.length; i++) {
		if (players[i].position != null) {
			var distanceToBall = pointDistance(players[i].position, ballPosition);
			if (distanceToBall < triggerDistance) {
				lastPlayerTouched = players[i];
				return lastPlayerTouched;
			}
		}
	}
	return lastPlayerTouched;

}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}



/*
room config
roomName, playerName, password, maxPlayers, public, geo, token

room
sendChat, setPlayerAdmin, setPlayerTeam,
kickPlayer, clearBan, clearBans, setScoreLimit, setTimeLimit,
setCustomStadium, setDefaultStadium,
setTeamsLock, setTeamColors,
startGame, stopGame, pauseGame,
getPlayer, getPlayerList,
getScores,
getBallPosition,
onPlayerJoin, onPlayerLeave,
onTeamVictory,
onPlayerChat,
onPlayerBallKick,
onTeamGoal,
onGameTick,
onPlayerActivity,



player
id, name, team, admin, position, auth, conn

scores
red, blue, time, scoreLimit, timeLimit

*/

