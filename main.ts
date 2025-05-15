input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 8; index++) {
        _ = randint(0, 2)
        music.play(music.tonePlayable(list[_], music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showString("" + (text_list[_]))
    }
    basic.pause(1000)
    basic.clearScreen()
})
let _ = 0
let text_list: string[] = []
let list: number[] = []
list = [262, 330, 392]
text_list = ["C", "E", "G"]
