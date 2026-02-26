$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "#E6D7F5"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // Toggle Grid - Professional games don't show grids!
    // toggleGrid();

    // ===== MARINA'S CUTE LEVEL 1: THE BEGINNING =====
    // Starting platform
    createPlatform(0, 600, 150, 20, "#FFB6D9");

    // First set of platforms - tutorial difficulty
    createPlatform(200, 550, 100, 20, "#B5EAD7");
    createPlatform(350, 500, 100, 20, "#FFF4B0");
    createPlatform(500, 450, 80, 20, "#C1F0D1");
    createPlatform(650, 400, 100, 20, "#FFD4A3");
    createPlatform(800, 350, 90, 20, "#E6D7F5");

    // Challenge: narrow platforms
    createPlatform(900, 300, 60, 20, "#FFD1E8");
    createPlatform(1050, 250, 50, 20, "#B5E7A0");
    createPlatform(1150, 280, 70, 20, "#FFFFCC");

    // ===== MARINA'S CUTE LEVEL 2: THE GAUNTLET =====
    // Staircase section
    createPlatform(0, 450, 120, 20, "#FFB6D9");
    createPlatform(150, 400, 120, 20, "#FFC0E1");
    createPlatform(300, 350, 120, 20, "#B5EAD7");
    createPlatform(450, 300, 100, 20, "#B4D7FF");

    // Tricky stepping stones
    createPlatform(600, 380, 50, 20, "#FFD4A3");
    createPlatform(700, 330, 50, 20, "#FFE4B5");
    createPlatform(800, 380, 50, 20, "#FFD4A3");
    createPlatform(900, 320, 50, 20, "#FFDAB9");

    // The Jump Challenge
    createPlatform(1000, 200, 80, 20, "#ADD8E6");
    createPlatform(1120, 150, 80, 20, "#B4D7FF");

    // ===== MARINA'S CUTE LEVEL 3: THE FINAL CHALLENGE =====
    // Floating islands
    createPlatform(150, 250, 80, 20, "#FFB6D9");
    createPlatform(300, 200, 80, 20, "#FFD1E8");
    createPlatform(450, 180, 70, 20, "#E6D7F5");
    createPlatform(600, 160, 70, 20, "#DCC9E8");
    createPlatform(750, 200, 75, 20, "#B5EAD7");
    createPlatform(900, 250, 75, 20, "#C1F0D1");
    createPlatform(1050, 180, 80, 20, "#FFE4B5");

    // Final victory platform - special pink
    createPlatform(1250, 100, 120, 20, "#FFB6D9");

    // ===== EPIC COLLECTABLES: TREASURE HUNT =====
    // Level 1 treasures
    createCollectable("diamond", 150, 420, 0, 0);
    createCollectable("grace", 500, 350, 0, 0);
    createCollectable("database", 900, 200, 0, 0);

    // Level 2 treasures
    createCollectable("max", 700, 250, 0, 0);
    createCollectable("steve", 1050, 80, 0, 0);

    // Level 3 treasures
    createCollectable("kennedi", 450, 80, 0, 0);
    createCollectable("diamond", 1250, 50, 0, 0);

    // ===== EPIC CANNONS: HAZARDS OF DOOM =====
    // Strategic cannon placement
    createCannon("left", 300, 3000);
    createCannon("right", 1200, 2500);
    createCannon("left", 500, 3500);
    createCannon("right", 700, 2800);
    createCannon("left", 900, 3200);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////

    console.log(
      "%c� MARINA'S EPIC ADVENTURE LOADED! 🌸",
      "color: #FF69B4; font-weight: bold; font-size: 16px;",
    );
    console.log(
      "%c Total Cute Platforms: " + platforms.length,
      "color: #B5EAD7; font-weight: bold;",
    );
    console.log(
      "%c Total Treasures to Collect: " + collectables.length,
      "color: #FFB6D9; font-weight: bold;",
    );
    console.log(
      "%c Total Cannon Obstacles: " + cannons.length,
      "color: #FFD4A3; font-weight: bold;",
    );
  }

  registerSetup(setup);
});
