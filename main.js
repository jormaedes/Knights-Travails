function knightMoves(start, end) {
	const moves = [
		[2, 1], [2, -1], [-2, 1], [-2, -1],
		[1, 2], [1, -2], [-1, 2], [-1, -2],
	];

	const queue = [[start]];
	const visited = new Set();
	visited.add(start.toString());

	while (queue.length > 0) {
		const path = queue.shift();
		const [x, y] = path[path.length - 1];
		if (x === end[0] && y === end[1]) {
			// console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
			//path.forEach((pos) => console.log(pos));
			return path;
		}

		for (const [dx, dy] of moves) {
			const nx = x + dx;
			const ny = y + dy;
			const key = [nx, ny].toString();

			if (nx >= 0 && nx <= 7 && ny >= 0 && ny <= 7 && !visited.has(key)) {
				visited.add(key);
				queue.push([...path, [nx, ny]]);
			}
		}
	}
}

console.log(knightMoves([0, 0], [1, 2]));
console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([0, 0], [7, 7]));
