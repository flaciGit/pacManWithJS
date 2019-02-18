﻿
// LEGIT MAP

function createCanv() {
    return c = [
        ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
        ['w', '.', '.', '.', '.', '.', '.', '.', '.', "w", '.', '.', '.', '.', '.', '.', '.', '.', 'w'],
        ['w', 'p', 'w', 'w', '.', 'w', 'w', 'w', '.', 'w', '.', 'w', 'w', 'w', '.', 'w', 'w', 'p', 'w'],
        ['w', '.', 'w', 'w', '.', 'w', 'w', 'w', '.', 'w', '.', 'w', 'w', 'w', '.', 'w', 'w', '.', 'w'],
        ['w', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'w'],

        ['w', '.', 'w', 'w', '.', 'w', '.', 'w', 'w', 'w', 'w', 'w', '.', 'w', '.', 'w', 'w', '.', 'w'],
        ['w', '.', '.', '.', '.', 'w', '.', '.', '.', 'w', '.', '.', '.', 'w', '.', '.', '.', '.', 'w'],
        ['w', 'w', 'w', 'w', '.', 'w', 'w', 'w', '.', 'w', '.', 'w', 'w', 'w', '.', 'w', 'w', 'w', 'w'],
        ['w', 'w', 'w', 'w', '.', 'w', '.', '.', '.', '.', '.', '.', '.', 'w', '.', 'w', 'w', 'w', 'w'],
        ['w', 'w', 'w', 'w', '.', 'w', '.', 'w', 'w', ' ', 'w', 'w', '.', 'w', '.', 'w', 'w', 'w', 'w'],

        [' ', ' ', ' ', ' ', '.', '.', '.', 'w', 'A', ' ', ' ', 'w', '.', '.', '.', ' ', ' ', ' ', ' '],
        ['w', 'w', 'w', 'w', '.', 'w', '.', 'w', 'w', 'w', 'w', 'w', '.', 'w', '.', 'w', 'w', 'w', 'w'],
        ['w', 'w', 'w', 'w', '.', 'w', '.', '.', '.', '.', '.', '.', '.', 'w', '.', 'w', 'w', 'w', 'w'],
        ['w', 'w', 'w', 'w', '.', 'w', '.', 'w', 'w', 'w', 'w', 'w', '.', 'w', '.', 'w', 'w', 'w', 'w'],
        ['w', '.', '.', '.', '.', '.', '.', '.', '.', 'w', '.', '.', '.', '.', '.', '.', '.', '.', 'w'],
        ['w', '.', 'w', 'w', '.', 'w', 'w', 'w', '.', 'w', '.', 'w', 'w', 'w', '.', 'w', 'w', '.', 'w'],
        ['w', 'p', '.', 'w', '.', '.', '.', '.', '.', 'P', '.', '.', '.', '.', '.', 'w', '.', 'p', 'w'],
        ['w', 'w', '.', 'w', '.', 'w', '.', 'w', 'w', 'w', 'w', 'w', '.', 'w', '.', 'w', '.', 'w', 'w'],
        ['w', '.', '.', '.', '.', 'w', '.', '.', '.', 'w', '.', '.', '.', 'w', '.', '.', '.', '.', 'w'],
        ['w', '.', 'w', 'w', 'w', 'w', 'w', 'w', '.', 'w', '.', 'w', 'w', 'w', 'w', 'w', 'w', '.', 'w'],

        ['w', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'w'],
        ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']

    ];
}


function transpose(a) {
    return Object.keys(a[0]).map(function (c) {
        return a.map(function (r) { return r[c]; });
    });
}

function createNewMap() {

    defaultMap = createCanv();
    defaultMap = transpose(defaultMap);

    for (var i = 0; i < w; i++)
        for (var j = 0; j < h; j++) {
            if (canv[i][j] == ' ' && defaultMap[i][j] == '.')
                canv[i][j] = '.';
            if (canv[i][j] == ' ' && defaultMap[i][j] == 'p')
                canv[i][j] = 'p';
        }
}

// TEST MAP
/*
function createCanv() {
    return c = [
        ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
        ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', "w", ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],
        ['w', 'p', 'w', 'w', ' ', 'w', 'w', 'w', ' ', 'w', ' ', 'w', 'w', 'w', ' ', 'w', 'w', 'p', 'w'],
        ['w', ' ', 'w', 'w', ' ', 'w', 'w', 'w', ' ', 'w', ' ', 'w', 'w', 'w', ' ', 'w', 'w', ' ', 'w'],
        ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],

        ['w', ' ', 'w', 'w', ' ', 'w', ' ', 'w', 'w', 'w', 'w', 'w', ' ', 'w', ' ', 'w', 'w', ' ', 'w'],
        ['w', ' ', ' ', ' ', ' ', 'w', ' ', ' ', ' ', 'w', ' ', ' ', ' ', 'w', ' ', ' ', ' ', ' ', 'w'],
        ['w', 'w', 'w', 'w', '.', 'w', 'w', 'w', ' ', 'w', ' ', 'w', 'w', 'w', ' ', 'w', 'w', 'w', 'w'],
        ['w', 'w', 'w', 'w', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w', 'w', 'w', 'w'],
        ['w', 'w', 'w', 'w', ' ', 'w', ' ', 'w', 'w', ' ', 'w', 'w', ' ', 'w', ' ', 'w', 'w', 'w', 'w'],

        [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', 'A', 'B', 'C', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['w', 'w', 'w', 'w', '.', 'w', ' ', 'w', 'w', 'w', 'w', 'w', ' ', 'w', ' ', 'w', 'w', 'w', 'w'],
        ['w', 'w', 'w', 'w', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'w', 'w', 'w', 'w'],
        ['w', 'w', 'w', 'w', ' ', 'w', ' ', 'w', 'w', 'w', 'w', 'w', ' ', 'w', ' ', 'w', 'w', 'w', 'w'],
        ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],
        ['w', ' ', 'w', 'w', ' ', 'w', 'w', 'w', ' ', 'w', ' ', 'w', 'w', 'w', ' ', 'w', 'w', ' ', 'w'],
        ['w', 'p', ' ', 'w', ' ', ' ', ' ', ' ', ' ', 'P', ' ', ' ', ' ', ' ', ' ', 'w', ' ', 'p', 'w'],
        ['w', 'w', ' ', 'w', ' ', 'w', ' ', 'w', 'w', 'w', 'w', 'w', ' ', 'w', ' ', 'w', ' ', 'w', 'w'],
        ['w', ' ', ' ', ' ', ' ', 'w', ' ', ' ', ' ', 'w', ' ', ' ', ' ', 'w', ' ', ' ', ' ', ' ', 'w'],
        ['w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w', ' ', 'w', 'w', 'w', 'w', 'w', 'w', ' ', 'w'],

        ['w', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'w'],
        ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']

    ];
}
*/