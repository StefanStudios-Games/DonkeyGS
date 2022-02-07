scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile`, function (sprite, location) {
    sprite.vx = 60
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mario.vy == 0) {
        Mario.vy = -150
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
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile0`, function (sprite, location) {
    sprite.vx = -60
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    sprite.destroy()
})
let Barrel: Sprite = null
let Mario: Sprite = null
tiles.setTilemap(tilemap`level1`)
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
tiles.placeOnRandomTile(Mario, sprites.dungeon.collectibleRedCrystal)
controller.moveSprite(Mario, 100, 0)
Mario.ay = 200
scene.cameraFollowSprite(Mario)
game.onUpdateInterval(2000, function () {
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
    Barrel.vx = -60
    Barrel.ay = 200
})
