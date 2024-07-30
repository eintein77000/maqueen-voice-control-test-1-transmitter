radio.setGroup(42)
radio.setTransmitPower(7)
voiceRecognition.init()
voiceRecognition.setVolume(7)
voiceRecognition.setMuteMode(voiceRecognition.MUTE.OFF)
voiceRecognition.setWakeTime(255)
serial.writeLine("" + voiceRecognition.getWakeTime())
voiceRecognition.playByCMDID(voiceRecognition.checkWord1(voiceRecognition.WakeupWords.W2))
serial.writeLine("==================")
basic.showIcon(IconNames.Tortoise)
basic.forever(function () {
    voiceRecognition.getCMDID()
    if (voiceRecognition.checkCMDID()) {
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W62)) {
            radio.sendNumber(62)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W65)) {
            radio.sendNumber(65)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W103)) {
            radio.sendNumber(103)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W104)) {
            radio.sendNumber(104)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W5)) {
            radio.sendNumber(5)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W6)) {
            radio.sendNumber(6)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W7)) {
            radio.sendNumber(7)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W22)) {
            radio.sendNumber(22)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W23)) {
            radio.sendNumber(23)
        }
    }
})
