/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

import './util'

import { expect } from 'chai'

import '../../bower_components/things-scene-core/things-scene-min'
import { Billboard } from '../../src/index'

describe('Billboard', function () {

  var board;

  beforeEach(function () {
    board = scene.create({
      model: {
        components: [{
          id: 'billboard',
          type: 'billboard'
        }]
      }
    })
  });

  it('component should be found by its id.', function () {

    var component = board.findById('billboard')

    expect(!!component).not.to.equal(false);
  });
});
