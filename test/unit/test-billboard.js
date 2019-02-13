/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

import "./util";

import { expect } from "chai";

import { create } from "@hatiolab/things-scene";

describe("Billboard", function() {
  var board;

  beforeEach(function() {
    board = create({
      model: {
        components: [
          {
            id: "billboard",
            type: "billboard"
          }
        ]
      }
    });
  });

  it("component should be found by its id.", function() {
    var component = board.findById("billboard");

    expect(!!component).not.to.equal(false);
  });
});
