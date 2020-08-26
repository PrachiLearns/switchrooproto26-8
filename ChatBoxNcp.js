class ChatBoxNcp {

    constructor() {
        this.para = null;
        this.buttonyes = null;
        this.buttonNo = null;


    }
    hide() {
    

    }

    display() {
        this.para = createP('are you ok with the current players answer?');
        this.buttonyes = createButton('yes');
        this.buttonNo = createButton('no');

        this.para.position(displayWidth / 2 - 80, displayHeight / 2 - 120);
        this.buttonyes.position(displayWidth / 2 + 70, displayHeight / 2);
        this.buttonNo.position(displayWidth / 2 + 90, displayHeight / 2);


        this.buttonyes.style('background-color', "green");
        this.buttonNo.style('background-color', "red");



        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
        });

    }
}
