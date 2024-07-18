// old way

function Match(teams, score, stadium, id) {
  this.teams = teams;
  this.score = score;
  this.stadium = stadium;
  this.id = id;
}

// To add a new property, you must add it to the constructor function prototype:

Match.prototype.sport = "Football";
Match.prototype.num_goals = function () {
  return this.score.reduce((a, b) => a + b, 0);
};

const game1 = new Match(
  ["real madrid", "man city"],
  [6, 4],
  "Wembley Stadium",
  5847712
);

console.log(game1);
console.log(game1.sport);

print = console.log;

print(game1.num_goals());
