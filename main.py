radio.set_group(42)
radio.set_transmit_power(7)
voiceRecognition.init()
voiceRecognition.set_volume(7)
voiceRecognition.set_mute_mode(voiceRecognition.MUTE.OFF)
voiceRecognition.set_wake_time(255)
serial.write_line("" + str((voiceRecognition.get_wake_time())))
voiceRecognition.play_by_cmdid(voiceRecognition.check_word1(voiceRecognition.WakeupWords.W2))
serial.write_line("==================")
basic.show_icon(IconNames.TORTOISE)

def on_forever():
    voiceRecognition.get_cmdid()
    if voiceRecognition.check_cmdid():
        if voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W62):
            radio.send_number(62)
        elif voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W65):
            radio.send_number(65)
        elif voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W103):
            radio.send_number(103)
        elif voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W104):
            radio.send_number(104)
        elif voiceRecognition.read_cmdid() == voiceRecognition.check_word2(voiceRecognition.LearningCommandWords.W5):
            radio.send_number(5)
        elif voiceRecognition.read_cmdid() == voiceRecognition.check_word2(voiceRecognition.LearningCommandWords.W6):
            radio.send_number(6)
        elif voiceRecognition.read_cmdid() == voiceRecognition.check_word2(voiceRecognition.LearningCommandWords.W7):
            radio.send_number(7)
        elif voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W22):
            radio.send_number(22)
        elif voiceRecognition.read_cmdid() == voiceRecognition.check_word3(voiceRecognition.FixedCommandWords.W23):
            radio.send_number(23)
basic.forever(on_forever)
