// const client = getClient(serialNumber);
// if (!client)
// return;
// 
// client.ping = input.runningTime()
// client.sprite.setBrightness(Math.max(1, receivedNumber & 0xff));
radio.onReceivedNumber(function (receivedNumber) {
    serialNumber = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    basic.showNumber(serialNumber)
})
let serialNumber = 0
radio.setGroup(4)
basic.forever(function () {
	
})
