# Knights Travails 🐴

A JavaScript implementation of the classic chess puzzle: find the **shortest path** a knight can take between any two squares on a standard 8×8 board.

Built as part of [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails) — JavaScript course, Computer Science section.

---

## How it works

A knight's movement is modelled as a **graph traversal problem**:

- Each square `[x, y]` is a **vertex**
- Each valid knight move is an **edge**
- The shortest path is found using **BFS (Breadth-First Search)**

BFS explores all positions reachable in 1 move, then 2, then 3 — so the first time it reaches the destination, it's guaranteed to be the shortest path.

---

## Usage

```javascript
knightMoves([0, 0], [1, 2]);
// You made it in 1 moves! Here's your path:
// [0, 0]
// [1, 2]

knightMoves([0, 0], [3, 3]);
// You made it in 2 moves! Here's your path:
// [0, 0]
// [2, 1]
// [3, 3]

knightMoves([0, 0], [7, 7]);
// You made it in 6 moves! Here's your path:
// [0, 0]
// [2, 1]
// [4, 2]
// [6, 3]
// [4, 4]
// [6, 5]
// [7, 7]
```

---

## Implementation

```javascript
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
      // path.forEach((pos) => console.log(pos));
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
```

**Key design decisions:**

- Each item in the BFS queue is a **full path**, not just a position — so when the destination is reached, the complete path is immediately available
- `visited` uses a `Set` for O(1) lookups instead of O(n) array search
- Moves off the board are filtered before being added to the queue

---

## Concepts practiced

- Graph theory (vertices, edges, implicit graphs)
- Breadth-First Search (BFS)
- Queue-based iteration
- Coordinate-based state representation

---

*Part of the [The Odin Project](https://www.theodinproject.com) – Full Stack JavaScript path.*