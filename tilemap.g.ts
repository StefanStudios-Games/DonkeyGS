// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100014000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000506000700010101010101010101010101010101000000000000000000000000000000000200000000000000000000000000000001010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000300010101010101010101010101010101000000000000000000000000000000000200000000000000000000000000000001010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000300010101010101010101010101010101000000000000000000000000000000000200000000000000000000000000000401010101010101010101010101010101`, img`
................
................
................
................
.222222222222222
................
................
222222222222222.
................
................
.222222222222222
................
................
222222222222222.
................
................
.222222222222222
................
................
2222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorLight0,myTiles.tile1,myTiles.tile2,sprites.dungeon.collectibleRedCrystal,myTiles.tile3,sprites.dungeon.darkGroundNorth,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
