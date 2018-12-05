// Do the given commands give a circular route
// return YES or NO
isCircular(["LGRG", "RG", "LGR", "GGGGR"]);
let movesEnum = {
  N : 0,
  W : 1,
  S : 2,
  E : 3
};

function isCircular(commands) {
  return commands.map((command)=>{
    let x = 0;
    let y = 0;
    let direction = 0;
    let attempts = 0;
    command = command.split("");
    // make sure we run the cmd 4 times
    // 90 degrees x 4 === (360|0)
    while(attempts < 4) {
      command.map((cmd)=>{
        if (cmd === 'R') {
          direction = (direction + 1) % 4;
        }
        else if (cmd === 'L') {
          direction = (4 + (direction - 1)) % 4;
        }

        else { // cmd is 'G'
          switch(direction){
            case movesEnum['N']:
              x++;
              break;
            case movesEnum['W']:
              y++;
              break;
            case movesEnum['S']:
              x--;
              break;
            case movesEnum['E']:
              y--;
              break;
          }
        }
      })
      attempts++;
    }

    return (x === 0 && y === 0) ? "YES" : "NO";
  });
}

