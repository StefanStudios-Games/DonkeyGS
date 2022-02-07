namespace SpriteKind {
    export const Kong = SpriteKind.create()
}
function CreatePlayer () {
    Mario = sprites.create(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Mario, 100, 0)
    Mario.ay = 230
    tiles.placeOnRandomTile(Mario, sprites.dungeon.collectibleRedCrystal)
    scene.cameraFollowSprite(Mario)
}
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile`, function (sprite, location) {
    sprite.vx = 55
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mario.vy == 0) {
        Mario.vy = -160
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Mario.setImage(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Mario.setImage(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
function intKong () {
    Kong = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . f d f f d f f e e f f . . . . 
        . f d f d d f d e e d d f . . . 
        f d e e d d d d e e b d c . . . 
        f d d d d d d d e e b d c . . . 
        f d c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `, SpriteKind.Kong)
    for (let value of tiles.getTilesByType(sprites.dungeon.darkGroundNorth)) {
        tiles.placeOnRandomTile(Kong, sprites.dungeon.darkGroundNorth)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile0`, function (sprite, location) {
    sprite.vx = -55
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    sprite.destroy()
})
function startingBarrels () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        Barrel = sprites.create(img`
            . . . f f f f f f f . . . 
            . . f 4 e e e e e e f . . 
            . f 4 e e e e e e e e f . 
            f 4 e e e e e e e e e e f 
            f e e e e e e e e e e e f 
            f e e e e e e e e e e e f 
            f e e e e e f e e e e e f 
            f e e e e e e e e e e e f 
            f e e e e e e e e e e e f 
            f e e e e e e e e e e e f 
            . f e e e e e e e e 2 f . 
            . . f e e e e e e 2 f . . 
            . . . f f f f f f f . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnTile(Barrel, value)
        Barrel.vx = -60
        Barrel.ay = 200
        pause(1000)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        Barrel = sprites.create(img`
            . . . f f f f f f f . . . 
            . . f 4 e e e e e e f . . 
            . f 4 e e e e e e e e f . 
            f 4 e e e e e e e e e e f 
            f e e e e e e e e e e e f 
            f e e e e e e e e e e e f 
            f e e e e e f e e e e e f 
            f e e e e e e e e e e e f 
            f e e e e e e e e e e e f 
            f e e e e e e e e e e e f 
            . f e e e e e e e e 2 f . 
            . . f e e e e e e 2 f . . 
            . . . f f f f f f f . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnTile(Barrel, value)
        Barrel.vx = -60
        Barrel.ay = 200
        pause(1000)
    }
}
let Barrel: Sprite = null
let Kong: Sprite = null
let Mario: Sprite = null
info.setLife(3)
tiles.setTilemap(tilemap`level1`)
CreatePlayer()
intKong()
startingBarrels()
game.onUpdateInterval(3000, function () {
    Barrel = sprites.create(img`
        . . . f f f f f f f . . . 
        . . f 4 e e e e e e f . . 
        . f 4 e e e e e e e e f . 
        f 4 e e e e e e e e e e f 
        f e e e e e e e e e e e f 
        f e e e e e e e e e e e f 
        f e e e e e f e e e e e f 
        f e e e e e e e e e e e f 
        f e e e e e e e e e e e f 
        f e e e e e e e e e e e f 
        . f e e e e e e e e 2 f . 
        . . f e e e e e e 2 f . . 
        . . . f f f f f f f . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnRandomTile(Barrel, assets.tile`myTile1`)
    Barrel.vx = -55
    Barrel.ay = 200
})
