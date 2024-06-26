// random-strategy.mjs
// Copyright (c) 2024 Ishan Pranav
// Licensed under the MIT license.

import { Strategy } from './strategy.mjs';

/**
 * Provides a randomized implementation of the `Strategy` class which hits with
 * a 50% probability.
*/
export class RandomStrategy extends Strategy {
    play(state) {
        while (Math.random() < 0.5) {
            state.dealOne(state.computerHand);

            if (state.computerHand.isBust()) {
                state.onGameOver(state.playerHand);
            
                return;
            }
        }
        
        state.standoff();
    }
}
