"use strict";

function delayReturn(sec) {
    const delayMiliSec = sec * 1000;
    return new Promise(function(resolve) {
        setTimeout(function timer() {
            resolve("Jason Zhou");
        }, delayMiliSec);
    });
}
module.exports.delayReturn = delayReturn;
