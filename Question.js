class Question{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.title = createElement("h2");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }

    display(){
        this.title.html("MyQuizGame");
        this.title.position(350,0);

        this.question.html("Question:- What is the answer when you divide 30 by half and then add 10 to it?");
        this.question.position(150,80);
        this.option1.html("1: 70");
        this.option1.position(150,100);
        this.option2.html("2: 40.5");
        this.option2.position(150,120);
        this.option3.html("3: 25");
        this.option3.position(150,140);
        this.option4.html("4: 35");
        this.option5.position(150,160);

        this.input1.position(150,230);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })
    }
}