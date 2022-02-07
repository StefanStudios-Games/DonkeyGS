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
    sprite.vx = BarrelSpeed
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mario.vy == 0) {
        music.knock.play()
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
    sprite.vx = BarrelSpeed * -1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(Mario, sprites.dungeon.collectibleRedCrystal)
    BarrelSpeed += 10
    music.beamUp.play()
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
function CallDonkeyKong () {
    info.setLife(3)
    info.setScore(1)
    BarrelSpeed = 55
    tiles.setTilemap(tilemap`level1`)
    CreatePlayer()
    intKong()
    startingBarrels()
}
let Barrel: Sprite = null
let Kong: Sprite = null
let BarrelSpeed = 0
let Mario: Sprite = null
let gameType = 0
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888d88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888dd888888d8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888ddd88888d888888888888d888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888ddddd8888dd8888888888ddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888ddddddd888dd8888888888ddd88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888d9dddd888ddd888888888ddddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888ddddd888dddd88888888dddddd888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888ddddddd888dd8888888888dddd8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888fffffffffffffffffffffffffffffffdddddd88888888888fffffffffffffffffffffffffffffff88888888888888888fffffffffffffffffffffffffffffff8888888888888888888
    88888888888888fffffffffffffffffffffffffffffff9dddddd8888888888fffffffffffffffffffffffffffffff88888888888888888fffffffffffffffffffffffffffffff8888888888888888888
    88888888888888fffffffffffffffffffffffffffffffddddd9dd888888888fffffffffffffffffffffffffffffff88888888888888888fffffffffffffffffffffffffffffff8888888888888888888
    88888888888888fff666666666666666f777f66666fffdddddd88888888888fffeeeeeeeeeeeeeeeeeeeeeeeeefff88888888888888888fff1111111111111111111111111fff8888888888888888888
    88888888888888fff666666666666666f777f66666fff9dddddd8888888888fffeeeeeeeeeeeeeeeeeeeeeeeeefff88888888888888888fff1111111111111111111111111fff8888888888888888888
    8888888888888dfff666666666666666f777f66666fff99dddddd888888888fffeeeeeeeeeeeeeeeeeeeeeeeeefff88888888888888888fff1111111111111111111111111fffd888888888888888888
    888888888888ddfff666666666666666f777f66666fffdddd8888888888888fffeeeeeeeeeeeeeeeeeeeeeeeeefff88888888888888888fff1111111111111111111111111fffd888888888888888888
    888888888888ddfff666666666666666f777f66666fffddddd888888888888fffeeeeee44eeeeeeeeeeeeeeeeefff88888888888888888fff1111111111111111111111111fffd888888888888888888
    88888888888dddfff666666666666666f777f66666fffdddddd88888888888fff222eee44eeeeeeeeeeeeeeeeefff88888888888888888fff1111111111111111111111111fffd888888888888888888
    8888888888ddddfff666666666666666f777f66666fffddddddd8888888888fff22222222eeee44eeeeeeeeeeefff88888888888888888fff1111111111111111111111111fffddd8888888888888888
    88888888888dddfff666666666666666f777f66666fffdddddddd888888888fffeee22222222244eeeeeeeeeeefff88888888888888888fff1111111111111111111111111fffd888888888888888888
    888888888888ddfff666666666666666f777f66666fffddddddddd88888888fffeeeeeeee2222222222eeeeeeefff88888888888888888fff1111111111111111111111111fffdddd888888888888888
    8888888888ddddfff666666666666ffff777ffff66fffdddddddddd8888888fffeeeeeeeeeeeee22222222eeeefff88888888888888888fff1111111111111111111111111fffd888888888d88888888
    88888888888dddfff666666666666f777777777f66fffddddddddddd888888fffeeeeeeeeeeeeeeeeee222e44efff88888888888888888fff1111111111111111111111111fffdd88888888d88888888
    888888888888ddfff666666666666f777777777f66fffdddddddddddd88888fffeeeeeeeeeeeeeeeeeeeeee44efff88888888888888888fff1111111111111111111111111fffd88888888dddd888888
    888888888888ddfff666666666666f777777777f66fffddddddddddddd8888fffeeeeeeeeeeeeeeeeeeeeeeeeefff8888888888888d888fff1111111111111111111111111fffd888888888d88888888
    88888888888dddfff666666666666fffffffffff66fffddddddddddddd8888fffeeeeeeeeeeeeeeeeeeeeeee22fffd88888888888dd888fff1111111111111111111111111fffdddd8888dddd8888888
    8888888888ddddfff6666655555666666666666666fffdddddddddddddd888fffeeeeeeeeeeee44eeeee222222fff888888888888ddd88fff1111111111111111111111111fffdddddd888ddd8888888
    88888888ddddddfff66665555555dd666666666666fffddddddddddddddd88fffeeeeeeeeeeee44e22222222eefffd8888888888ddddd8fff1111111111111111111111111fffddddddd88ddddd88888
    8888888dddddddfff6666555555fddd66666666666fffdddddddddddddddd8fffeeeeeeeeeee22222222eeeeeefff8888888888dddddddfff1111111111111111111111111fffddddddddddddd888888
    888888ddddddddfffd6665555555dddd6666666dddfffdddddddddddddddddfffeeeeeee22222222eeeeeeeeeefffddd8888888d9dddd9fff1111111111111111111111111fffdddddddddddd8888888
    88888dddddddddfffdd665f11f544dddd6666dddddfffdddddddddddddddddfffeeee2222222eeeeeeeeeeeeeefffdddddd88888ddddd9fff1111111111111111111111111fffdddddddddddd8888888
    888dddddddddddfffddddf111f55dddddd6dddddddfffdddddddddddddddddfffeeee222eeeeeeeeeeeeeeeeeefffdddddddd88dddddddfff1111111111111111111111111fffddddddddddddd888888
    88ddddddddddddfffdddf111f55dddddddddddddddfffdddddddddddddddddfffe44eeeeeeeeeeeeeeeeeeeeeefffdddddddddd9dddd9dfff1111111111111111111111111fffddddddddddddddd8888
    8dddddddddddddfffddddfffd4ddddddddddddddddfffdddddddddddddddddfffe44eeeeeeeeeeeeeeeeeeeeeefffdddddddddddddddd9fff1111111111111111111111111fffddddddddddddddddd88
    ddddddddddddddfffdddd4dd4dddddddddddddddddfffdddddddddddddddddfff222eeeeeee44eeeeeeeeeeeeefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffddddddddddddfffffffffffddfffdddddddddddddddddfff222222222e44eeeeeeeeeeeeefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffddddddddddddf777777777fddfffdddddddddddddddddfffeee22222222222eeeeeeeeeeefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffddddddddddddf777777777fddfffdddddddddddddddddfffeeeeeeee222222222222eeeeefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffddddddddddddf777777777fddfffdddddddddddddddddfffeeeeeeeeeeeeee222222222eefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffddddddddddddffff777ffffddfffdddddddddddddddddfffeeeeeee88eeeeeeeeee2222eefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffdddddddddddddddf777fdddddfffdddddddddddddddddfffeeeeeee55eeeeeeeeeeeeeeeefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffdddddddddddddddf777fdddddfffdddddddddddddddddfffeeeeee8888eeeeeeeeeeeeeeefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffdddddddddddddddf777fdddddfffdddddddddddddddddfffeeeeeee88eeeeeeeeeeeeeeeefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffdddddddddddddddf777fdddddfffdddddddddddddddddfffeeeeeee88e44eeeeeeeee2222fffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffdddddddddddddddf777fdddddfffdddddddddddddddddfffeeeeeeeeee44eee2222222222fffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffdddddddddddddddf777fdddddfffdddddddddddddddddfffeeeeeeeee222222222222eeeefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffdddddddddddddddf777fdddddfffdddddddddddddddddfffeee222222222222eeeeeeeeeefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffdddddddddddddddf777fdddddfffdddddddddddddddddfff222222222eeeeeeeeeeeeeeeefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffdddddddddddddddf777fdddddfffdddddddddddddddddfff222eeeeeeeeeeeeeeeeeeeeeefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffdddddddddddddddf777fdddddfffdddddddddddddddddfffeeeeeeeeeeeeeeeeeeeeeeeeefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffdddddddddddddddf777fdddddfffdddddddddddddddddfffeeeeeeeeeeeeeeeeeeeeeeeeefffdddddddddddddddddfff1111111111111111111111111fffddddddddddddddddddd
    ddddddddddddddfffffffffffffffffffffffffffffffdddddddddddddddddfffffffffffffffffffffffffffffffdddddddddddddddddfffffffffffffffffffffffffffffffddddddddddddddddddd
    ddddddddddddddfffffffffffffffffffffffffffffffdddddddddddddddddfffffffffffffffffffffffffffffffdddddddddddddddddfffffffffffffffffffffffffffffffddddddddddddddddddd
    ddddddddddddddfffffffffffffffffffffffffffffffdddddddddddddddddfffffffffffffffffffffffffffffffdddddddddddddddddfffffffffffffffffffffffffffffffddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddfffffddffffffddffffffddffffffddddffffdddddffdddffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddfffffddffffffddffffffddffffffddddffffdddddfffddffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddffdddddddffddddffddddddffddddddddffffdddddffffdffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddffdddddddffddddffffffddffffffdddffffffddddfffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddfffffddddffddddffffffddffffffdddffffffddddffdffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddffffddddffddddffddddddffddddddffddddffdddffddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddfddffddddffddddffddddddffddddddffddddffdddffdddffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddfffffddddffddddffffffddffdddddffddddddffddffdddffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddffffdddddffddddffffffddffdddddffddddddffddffdddffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffdfffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfddfdfdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddfffffddffffffddffdddddffddffffdddffffffdddfffffdddfffffdddfddfdfdfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddfffffddffffffddffdddddffddfffffddffffffdddfffffdddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddffdddddddffddddffdddddffddffdfffdddffddddffdddffddffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddffdddddddffddddffdddddffddffdddfdddffddddffdddffddffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddfffffddddffdddddffdddffdddffdddfdddffddddffdddffddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddffffddddffdddddffdddffdddffdddfdddffddddffdddffdddffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddfddffddddffdddddffdddffdddffdfffdddffddddffdddffddfddffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddfffffddddffddddddfffffddddfffffddffffffdddfffffdddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddffffdddddffddddddfffffddddffffdddffffffdddfffffdddffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
game.onUpdateInterval(3000, function () {
    if (gameType == 2) {
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
        Barrel.vx = BarrelSpeed * -1
        Barrel.ay = 200
    }
})
