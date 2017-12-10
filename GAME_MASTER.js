var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');
var WIDTH = document.body.offsetWidth;
var HEIGHT = document.body.offsetHeight;
canvas.height = HEIGHT;
canvas.width = WIDTH;

var extraFOV = 32;

var MOVEMENT_STATIONARY = "STATIONARY";
var MOVEMENT_BOUNCE = "BOUNCE";
var MOVEMENT_WRAP = "WRAP";

// Aspect ratio = width / height

var GAME_MASTER = {
    game_board: {
        x: new ValueRange(-extraFOV, WIDTH + extraFOV),
        y: new ValueRange(-extraFOV, HEIGHT + extraFOV),
        grid_size: 32,
        background_color: "black"
    },
    background_text: {
        color: "rgba(255, 255, 255, 0.5)",
        font: "48px serif",
        text: "MERRY CHRISTMAS!"
    },
    entity_spawn_rate: 0.5,
    songs: [
      {
      url: "audio/Jingle_Bells.mp3",
      artist: "Kevin MacLeod",
      name: "Jingle Bells",
      album: "YouTube Audio Library",
      length: 104
    }, {
      url: "audio/Silent_Night_Vocals.mp3",
      artist: "Jingle Punks",
      name: "Silent Night",
      album: "YouTube Audio Library",
      length: 138
    }, {
      url: "audio/Deck_the_Halls_B.mp3",
      artist: "Kevin MacLeod",
      name: "Deck the Halls",
      album: "YouTube Audio Library",
      length: 267
    }, {
      url: "audio/Angels_We_Have_Heard.mp3",
      artist: "Kevin MacLeod",
      name: "Angels We Have Heard",
      album: "YouTube Audio Library",
      length: 246
    }, {
      url: "audio/Bethlehem_Christmas.mp3",
      artist: "Kevin MacLeod",
      name: "Bethlehem - Christmas",
      album: "YouTube Audio Library",
      length: 108
    }, {
      url: "audio/Silver Bells.mp3",
      artist: "Nestrogen",
      name: "Silver Bells",
      album: "XMAS Compilation 2010",
      length: 88
    }, {
      url: "audio/Joy_to_the_World_Instrumental.mp3",
      artist: "Jingle Punks",
      name: "Joy to the World",
      album: "YouTube Audio Library",
      length: 148
    }, {
      url: "audio/Noel.mp3",
      artist: "Audionautix",
      name: "Noel",
      album: "YouTube Audio Library",
      length: 54
    }, {
      url: "audio/We_Wish_You_A_Merry_Xmas.mp3",
      artist: "Audionautix",
      name: "We Wish You A Merry Xmas",
      album: "YouTube Audio Library",
      length: 56
    }, {
      url: "audio/O_Christmas_Tree_Instrumental.mp3",
      artist: "Jingle Punks",
      name: "O Christmas Tree (Instrumental)",
      album: "YouTube Audio Library",
      length: 165
    }, {
      url: "audio/O_Come_All_Ye_Faithful_Instrumental.mp3",
      artist: "Jingle Punks",
      name: "O Come All Ye Faithful (Instrumental)",
      album: "YouTube Audio Library",
      length: 197
    }, {
      url: "audio/Hark_the_Herald_Angels_Sing_Instrumental.mp3",
      artist: "Jingle Punks",
      name: "Hark the Herald Angels Sing (Instrumental)",
      album: "YouTube Audio Library",
      length: 139
    }],
    song_analysis: {
        output_bins: 1024
    },
    entities: [{
        name: "GREEN LIGHT",
        spawn_rate: 0.25,
        size: 20,
        size_std_dev: 4,
        special_activation_rate: 0,
        normal_sprite: "sprites/green-light.png",
        special_sprite: "sprites/green-light.png",
        aspect_ratio: 0.53,
        opacity_change: {
            min_activation: 0.45,
            max_activation: 0.65,
            inverse: false
        },
        movement_type: MOVEMENT_STATIONARY
    }, {
        name: "BLUE LIGHT",
        spawn_rate: 0.25,
        size: 20,
        size_std_dev: 4,
        special_activation_rate: 0.5,
        normal_sprite: "sprites/blue-light.png",
        special_sprite: "sprites/blue-light.png",
        aspect_ratio: 0.53,
        opacity_change: {
            min_activation: 0.45,
            max_activation: 0.65,
            inverse: false
        },
        movement_type: MOVEMENT_STATIONARY
    }, {
        name: "RED LIGHT",
        spawn_rate: 0.25,
        size: 20,
        size_std_dev: 4,
        special_activation_rate: 0.5,
        normal_sprite: "sprites/red-light.png",
        special_sprite: "sprites/red-light.png",
        aspect_ratio: 0.53,
        opacity_change: {
            min_activation: 0.45,
            max_activation: 0.65,
            inverse: false
        },
        movement_type: MOVEMENT_STATIONARY
    }, {
        name: "YELLOW LIGHT",
        spawn_rate: 0.05,
        size: 20,
        size_std_dev: 4,
        special_activation_rate: 0.5,
        normal_sprite: "sprites/yellow-light.png",
        special_sprite: "sprites/yellow-light.png",
        aspect_ratio: 0.53,
        opacity_change: {
            min_activation: 0.45,
            max_activation: 0.65,
            inverse: false
        },
        movement_type: MOVEMENT_STATIONARY
    }, {
        name: "SNOWFLAKE",
        spawn_rate: 0.2,
        size: 18,
        size_std_dev: 6,
        special_activation_rate: 0,
        normal_sprite: "sprites/snowflake.png",
        special_sprite: "sprites/snowflake.png",
        aspect_ratio: 0.92,
        x_left_movement_modifier: 2,
        y_up_movement_modifier: 0,
        x_right_movement_modifier: 2,
        y_down_movement_modifier: 8,
        movement_smoothing: 8,
        opacity_change: {
            min_activation: 0.4,
            max_activation: 0.6,
            inverse: false
        },
        movement_type: MOVEMENT_WRAP
      }]
};
