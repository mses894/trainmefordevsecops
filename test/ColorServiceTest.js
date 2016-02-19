var assert = require("chai").assert;
var ColorService = require("../services/color-service");

describe("ColorService", function() {
    "use strict";
  
    const NUMBER_OF_COLORS_TO_TEST = 10000;
  
    it("should generate a new unused color", function(done) {
        let colorService = new ColorService();
        let usedColors = new Set();
         for (let i = 0; i < NUMBER_OF_COLORS_TO_TEST; i++) {
            usedColors.add(colorService.getColor());
        }
        assert.equal(usedColors.size, NUMBER_OF_COLORS_TO_TEST);
        
        done();
    });
});