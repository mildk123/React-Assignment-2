import React from "react";
import ReactDom from "react-dom";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Hello World",
      stated: false
    };
  }

  updateState() {
    !this.state.stated
      ? this.setState({ text: "Hello Pakistan", stated: true })
      : this.setState({ text: "Hello World", stated: false });
  }

  render() {
    return (
      <div>
        <h1 onClick={() => this.updateState()}>{this.state.text}</h1>

        <div className="section-2">
          <b>Q2:</b>
          <h2>onClick={"{this.myFunc.bind(this}}"}</h2>
          <p>It is important to learn about bindings in JavaScript classes when
            using React ES6 class components. The binding step is necessary, because class methods don’t
            automatically bind this to the class instance.{"\n"} That’s a main source of bugs when using React, because if you want to access <strong>this.state </strong>
            in your class method, it cannot be retrieved because this is undefined. So in order to make this accessible in your class
            methods, you have to bind the class methods to this.{"\n"}
            When trying the button again, the this object, to be more specific the class
            instance, should be defined and you would be able to access
            this.state. The class method binding can happen in the render() class method.
            But you should avoid it, because it would bind the class method every time when the render()
            method runs. Basically it runs every time your component updates which leads to performance
            implications. When binding the class method in the constructor, you bind it only once in the
            beginning when the component is instantiated. That’s a better approach to do it.</p> 

          <h2>onClick={"{this.myFunc}"}</h2>
          <p>Another thing people sometimes come up with is definin business logic of their class methods in the constructor. You should
            avoid this too, because it will clutter your constructor over time.
            The constructor is only there to instantiate your class with all its
            properties. That’s why the business logic of class methods should be
            defined outside of the constructor.</p>

          <h2>onClick={"() => this.myFunc()"}</h2>
          <p>By this defining method you can sneak in the objectID property of the item object
            to identify the item that will be dismissed , it is worth to mention
            that class methods can be auto-bound automatically without binding
            them explicitly by using JavaScript ES6 arrow functions.
            If the repetitive binding in the constructor annoys you, you can go ahead
            with this approach instead. 
            The official React documentation sticks to the class method bindings in the constructor. That’s why the book
            will stick to those as well.</p>

          
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
