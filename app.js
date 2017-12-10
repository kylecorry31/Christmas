var scene;

function main() {
  var game = new Game(init, draw);
  game.start();
}


function init() {
  scene = new Scene();
}

function draw() {
  scene.draw(ctx);
}

main();


console.log("Jingle Bells by Kevin MacLeod is licensed under a Creative Commons Attribution license (https://creativecommons.org/licenses/by/4.0/)\n\
Source: http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100187\n\
Artist: http://incompetech.com/\n");

console.log("Deck the Halls B by Kevin MacLeod is licensed under a Creative Commons Attribution license (https://creativecommons.org/licenses/by/4.0/)\n\
Source: http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100368\n\
Artist: http://incompetech.com/\n");

console.log("Angels We Have Heard by Kevin MacLeod is licensed under a Creative Commons Attribution license (https://creativecommons.org/licenses/by/4.0/)\n\
Source: http://incompetech.com/music/royalty-free/index.html?collection=004&page=1\n\
Artist: http://incompetech.com/\n");

console.log("Noel by Audionautix is licensed under a Creative Commons Attribution license (https://creativecommons.org/licenses/by/4.0/)\n\
Artist: http://audionautix.com/\n");

console.log("We Wish You A Merry Xmas by Audionautix is licensed under a Creative Commons Attribution license (https://creativecommons.org/licenses/by/4.0/)\n\
Artist: http://audionautix.com/\n");

console.log("Bethlehem - Christmas by Kevin MacLeod is licensed under a Creative Commons Attribution license (https://creativecommons.org/licenses/by/4.0/)\n\
Source: http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100307\n\
Artist: http://incompetech.com/\n");
