class Question{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Submit");
        this.title = createElement("h2");
        this.question = createElement("h3");
        // this.option1 = createElement("h2");
        // this.option2 = createElement("h2");
        // this.option3 = createElement("h2");
        // this.option4 = createElement("h2");
        this.radio = createRadio();
        this.radio.option('70');
        this.radio.option("40.5");
        this.radio.option("25");
        this.radio.option("35");
        this.radio.style("width","50px");
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
        // this.option1.html("1: 70");
        // this.option1.position(150,100);
        // this.option2.html("2: 40.5");
        // this.option2.position(150,120);
        // this.option3.html("3: 25");
        // this.option3.position(150,140);
        // this.option4.html("4: 35");
        // this.option4.position(150,160);
        this.radio.position(150,150);
        this.input.position(150,230);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input.hide();
            this.button.hide();
            contestant.name = this.input.value();
            contestant.answer = this.radio.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })

        if(contestant.answer){
            
        }
    }
}