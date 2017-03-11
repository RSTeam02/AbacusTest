/**
 * @rsTeam02
 * Control unit 
 */
class Controller {

    constructor() {
        this.matView = new MatView();
        this.textView = new TextView();
        this.numSwitcher = new NumSwitcher();
        this.numSwitcher.setMode("dot");
        this.ledListener();
        new SVGStaticObj().svgTitle(new TitleView().titleText("AbacusTest"));
        this.classRadio = document.getElementsByClassName("radioBtn");
        this.mode = document.selector.elements.format;
        this.buttonListener();
        this.res = 0;
    }

    buttonListener() {
        document.getElementById("resetBtn").addEventListener("click", () => {
            this.res = 0;
            this.textView.svgText(this.res);
            this.ledListener();
        });
    }

    //mxn listener
    ledListener() {
        let x = 0;

        this.matView.svgRaster(this.numSwitcher);
        //handler/listener for each led
        for (let j = 0; j < 65; j++) {
            (() => {
                let x = j;
                let enabled = true;
                //access Matrix through handler
                let handler = () => {
                    (enabled)
                        ? enabled = false
                        : enabled = true;
                    this.inputMatrix(document.getElementById(x), !enabled);
                };
                document.getElementById(x).addEventListener("click", handler, false);
            })();
        }
    }

    digitConverter(led) {
        var digit = 0;
        var idRange = 0;
        var expDiff = 0;

        for (let i = led.id; i >= 0; i--) {
            idRange++;
        }

        expDiff = (led.id - led.id % 5) / 5;

        if (led.id < idRange) {
            (led.id % 5 == 4)
                ? digit += 5 * Math.pow(10, 12 - expDiff)
                : digit += Math.pow(10, 12 - expDiff);
        }
        return digit;
    }

    inputMatrix(led, active) {
        (active)
            ? this.res += this.digitConverter(led)
            : this.res -= this.digitConverter(led);
        this.matView.ledActivity(led, active);
        this.textView.svgText(this.res);
    }
}
