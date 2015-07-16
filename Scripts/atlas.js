/*
var ATLAS = (function(atlJSON){
  var url = "/home/mfurquim/Documents/Big Point/Assets/Assets.png",
      sprites = [],
      atlasJSON = null;

  var load = function() {
    var img = new Image();
    img.src = imagename;
    this.img = img;
    this.url = imgName;
    gSpriteSheets[imgName] = this;
  };

  var defAtlas = function(name, x, y, w, h, cx, cy) {
    var spt = {
      "id": name,
      "x": x,
      "y": y,
      "w": w,
      "h": h,
      "cx": cx == null ? 0 : cx,
      "cy": cy == null ? 0 : cy
    };
    this.sprites.push(spt);
  };

  var parseAtlas = function(atlJSON) {
    var parsed = JSON.parse(atlJSON);

    for(var key in parsed.frames) {
      var sprite = parsed.frames[key];
      var cx = -sprite.frame.w * 0.5;
      var cy = -sprite.frame.h * 0.5;

      this.defAtlas(key, sprite.frame.x, sprite.frame.y, sprite.frame.w, sprite.frame.h, cx, cy);
    }
  };

  return {
    var init = function() {
    atlasJSON = new Image();
    atlasJSON.onload = load;
    atlasJSON.src = this.url;
    },

    drawSprite(spriteName, posX, posY) {
    for(var sheetName in gSpriteSheets) {
      var sheet = gSpriteSheets[sheetName];
      var sprite = sheet.getStats(spriteName);
      if(sprite == null) continue;

      __drawSpriteInternal(sprite, sheet, posX, posY);

      return;
    },
  };
}(atlasJSON));
*/
