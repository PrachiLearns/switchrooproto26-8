class ChatBoxCp {

    constructor() {
        this.input = null;
        this.button = null;

    }
    hide() {
        this.button.hide();
        this.input.hide(); 

    }

    display() {
        clear();
        this.input = createInput("Please typr your answer");
        this.button = createButton('Submit');


        this.input.position(displayWidth / 2 - 80, displayHeight / 2 - 120);
        this.button.position(displayWidth / 2 + 70, displayHeight / 2);

        this.button.mousePressed(() => {

            this.input.hide();
            this.button.hide();
        });

    }
}
