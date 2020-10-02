controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.player2.moveSprite(mySprite2)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, myTiles.tile1)
    music.pewPew.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthWest1, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    music.jumpUp.play()
    info.changeScoreBy(5)
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrangeDepressed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.buttonOrange)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile7, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    info.changeScoreBy(-1)
    music.siren.play()
    tiles.setTileAt(location, myTiles.tile1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTealDepressed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.buttonTeal)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.buttonOrangeDepressed)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    game.setDialogTextColor(5)
    game.showLongText("oi", DialogLayout.Bottom)
    game.showLongText("tome tempo e pontos", DialogLayout.Bottom)
    music.jumpUp.play()
    info.changeScoreBy(5)
    tiles.setTileAt(location, myTiles.tile1)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    mySprite2 = sprites.create(img`
        . . . . . . f f f . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 f 5 f 5 . f . . . . 
        . . . . . 5 5 5 5 5 f f f . . . 
        . . . . . . 5 5 5 . . d . . . . 
        . . . . . 5 5 d 5 5 5 d . . . . 
        . . . . . 5 d d d . . d . . . . 
        . . . . . 1 5 d 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.buttonTealDepressed)
})
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e f e f e . . . . . . 
    . . . . . e e e e e . f . . . . 
    . . . . . e e f e e f f f . . . 
    . . . . . . e e e . . d . . . . 
    . . . . . e e d e e e d . . . . 
    . . . . . e e d e . . d . . . . 
    . . . . . e e d e . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . e . e . . . . . . . 
    . . . . . . e . e . . . . . . . 
    . . . . . . e . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(11)
tiles.placeOnRandomTile(mySprite, myTiles.tile8)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`100010000101010101010101010101010101010101010101010501010101010101050101010102020202010202020202020201010101020101010102010101010102010101010201020202020102020201020101010102010201010101020101010101010101020105010202020201020202010101060202020202010101010201020101010102040201020102020202010201010101020402010202020101010102010101010904020101010101020202020801010a02010202020802020201010101010101020101010201010101010202010101010202020302020202020202020801010102010b010101010701010101010101010701010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . 
    . 2 2 2 2 . 2 2 2 2 2 2 2 . 2 . 
    . 2 . . . . 2 . . . . . . . 2 . 
    . 2 . 2 2 2 2 . 2 2 2 2 2 . 2 . 
    . 2 . 2 . . . . 2 . . . 2 . 2 . 
    . 2 . 2 . 2 2 2 2 . 2 2 2 2 2 . 
    . 2 . 2 . 2 . . . . 2 . . . 2 . 
    . . . . . . . 2 2 2 2 . 2 . 2 . 
    . 2 . 2 . 2 . 2 . . . . 2 . 2 . 
    . 2 . 2 . 2 . . . 2 2 2 2 . 2 . 
    . 2 . 2 . 2 2 2 2 2 . . . . . . 
    . . . 2 . . . . . . . 2 2 2 2 . 
    . 2 . 2 2 2 . 2 2 2 2 2 . . 2 . 
    . 2 . . . . . . . . . . . . . . 
    . 2 . 2 . 2 2 2 2 . 2 2 2 2 2 . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenWest,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorOpenEast,sprites.dungeon.floorLight4,sprites.dungeon.buttonOrange,sprites.dungeon.buttonTealDepressed], TileScale.Sixteen))
