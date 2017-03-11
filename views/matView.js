/**
 * @rsTeam02
 * View as SVG => dom
 */

class MatView {

    constructor() {
        this.ledArr = [];
    }

    //raster display decimal or circle dots
    svgRaster(numSwitcher, digitArr = new Array(13)) {
        let x = 0;

        let digit = [];
        let ledNo = 0;

        this.clearSVGMat();

        for (let k = 0; k < digitArr.length; k++) {
            (digitArr[k] !== undefined)
                ? digit[k] = [...digitArr[k]]
                : digit[k] = [..."0000000000000"];
        }

        for (let i = 0; i < 13; i++) {
            let y = 0;
            for (let j = 0; j < 5; j++) {
                this.ledArr[ledNo] = new Led();
                (digit[i][j] === "1")
                    ? numSwitcher.numSwitch(this.ledArr[ledNo].ledActivity.on, y, x, ledNo)
                    : numSwitcher.numSwitch(this.ledArr[ledNo].ledActivity.off, y, x, ledNo);
                ledNo++;
                //next row
                y += 50;
            }
            //next column
            x += 50
        }

    }

    clearSVGMat() {
        while (ledDisplay.firstChild) {
            ledDisplay.removeChild(ledDisplay.firstChild);
        }
    }

    //invoked when event occurs 
    ledActivity(led, enabled) {
        if (enabled) {
            led.setAttribute("fill", `url(${this.ledArr[led.id].ledActivity.on.color})`);
            led.setAttribute("fill-opacity", this.ledArr[led.id].ledActivity.on.opacity);
            (led.id % 5 === 4)
                ? led.textContent = 5
                : led.textContent = 1;
        } else {
            led.setAttribute("fill", `url(${this.ledArr[led.id].ledActivity.off.color})`);
            led.setAttribute("fill-opacity", this.ledArr[led.id].ledActivity.off.opacity);

            led.textContent = 0;
        }
    }

}