class Question {

constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
display(){
this.title.html(" MY QUIZ GAME");
this.title.position(350,0);

this.question1.html("Where was Sherlock Holmes House Located??")
this.question1.position(150,80);
this.option1.html("A) 221 BAKER STREET,LONDON");
this.option1.position(150,100);
this.option2.html("B) PRIVET DRIVE");
this.option2.position(160,100);
this.question2.html("What was the name of the first Sherlock Holmes novel??")
this.question2.position(150,80);
this.option1.html("A) SIGN OF FOUR");
this.option1.position(150,100);
this.option2.html("B)  THE STUDY OF SCARLET");
}
}


