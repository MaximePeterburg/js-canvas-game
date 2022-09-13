const { Engine, Render, Runner, World, Bodies } = Matter;
const width = 500;
const height = 500;
const engine = Engine.create();
const { world } = engine;
const render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		wireframes: true,
		width: width,
		height: height
	}
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
	Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
	Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
	Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
	Bodies.rectangle(width, height / 2, 40, height, { isStatic: true })
];
World.add(world, walls);

//Maze Generation
const grid = Array(3).fill(null).map(() => Array(3).fill(false));
console.log(grid);
