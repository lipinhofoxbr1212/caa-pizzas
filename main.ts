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
tiles.setTilemap(tiles.createTilemap(hex`1000100006060606060606060606060606060606010803080808080808010101010102060608060606060606060606060606060606080601080108030108010801060706060806060606060606060606030601060608060808080808080808060106080606030608060606060606080108060106060306080608080808060606010608060608060806030606050808060806080606080608060806060606010601060106060806080808060808040606080608060608060606060606060606060106010606080801080808030308080808080306060606060606060606060606060601060601010101010101010101030303010606060606060606060606060606060606`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . 2 
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . 2 . . . . . . . . . . 2 . 2 
    2 . 2 2 2 2 2 2 2 2 2 2 . 2 . 2 
    2 . 2 . . . . . . . . 2 . 2 . 2 
    2 . 2 . 2 2 2 2 2 2 . . . 2 . 2 
    2 . 2 . 2 . . . . 2 2 2 . 2 . 2 
    2 . 2 . 2 . 2 2 . . . 2 . 2 . 2 
    2 . 2 . 2 . 2 2 2 2 . 2 . 2 . 2 
    2 . 2 . . . 2 . . . 2 2 . 2 . 2 
    2 . 2 2 2 2 2 2 2 2 2 2 . 2 . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.dungeon.darkGroundCenter,sprites.dungeon.chestClosed,myTiles.tile1], TileScale.Sixteen))
