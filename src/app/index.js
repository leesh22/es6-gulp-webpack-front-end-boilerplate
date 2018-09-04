
import '../style/app.scss';

class ExampleClass {
  constructor() {
    this.exampleFunc('hello');
    this.exampleArrowFunc('hey');
  }

  exampleFunc(message) {
    console.log(`${message} - using normal function`);
  }

  exampleArrowFunc(message) {
    setTimeout(() => {
      console.log(`${message} - using arrow function`);
    }, 1000);
  }

}

let exampleClass = new ExampleClass();
