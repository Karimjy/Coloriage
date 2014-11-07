"use strict"

$(document).ready(function(){
      var stage = new Kinetic.Stage({
        container: 'canvas',
        width: 2004,
        height: 500
      });

      var maplayer = new Kinetic.Layer({
        y: 20,
        scale: 0.6
      });

      var mapColor = new Kinetic.Layer({
        x: 250,
        scale: 0.6
      });

      /*
       * loop through country data stroed in the datas
       * variable defined in the datas.js asset
       */
      for(var key in datas) {
        var path = new Kinetic.Path({
          data: datas[key].path,
          fill: 'white',
          stroke: '#111',
          strokeWidth: 1
        });

        path.on('click', function(evt) {
          var shape = evt.target;
          console.log(color);
          this.setFill(color);
          maplayer.draw();
        });
        
        maplayer.add(path);
      }

      for(var key in maPalette) {
        var rect = new Kinetic.Rect({
        x: 500 + Math.floor(key/5)*60,
        y: 50 + (key%5)*60,
        fill: maPalette[key],
        stroke: '#111',
        width: 50,
        height: 50,
        strokeWidth: 1
      });
      
        mapColor.add(rect);
        var color;

        rect.on('click', function(evt) {
          color = this.getFill();
          console.log("1"+color);
        });


      }

      // add the layer to the stage
      stage.add(maplayer);
      stage.add(mapColor);
});