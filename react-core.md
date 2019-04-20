## React Core

### Basic react app with react cdn
- We need two packages to work with react mainly, 
  - `React`
  - `ReactDOM`

- Also we need `babel`, since react rendering part is written in `JSX` and it is not understood by browsers.
~~~
<html>
    <head>
        <title>React Basics</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.min.js"></script>
        <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    </head>
    <body>

    </body>
</html>
~~~

- React is all about components, we can create components in two ways, 
  - Class Based Components
  - Functional Components

- ##### An example of class based components
    - our class will extends `React.Component` class
    - It need `render` function to be implemented, which holds the `jsx`.
    - We use `ReactDOM`'s `render` function to attach the component to the `DOM`.        
~~~
<div id="app"></div>

<script type="text/babel">
    class App extends React.Component {
        render() {
            return (
                <h1>This is a component</h1>
            )
        }
    }

    ReactDOM.render(<App />, document.getElementById('app'))
</script>
~~~

- Render dynamic component (dynamic data needs to be rendered using `{}`)
~~~
class App extends React.Component {
    render() {
        return (
            <div>
                ...
                <p>{ Math.ceil(Math.random() * 10) }</p>
            </div>
        )
    }
}
~~~
<br>
<hr>

### State
- state is important to keep the data used in side the component

~~~
class App extends React.Component {
    state = {
        name: 'Charles',
        age: 26
    }

    render() {
        return (
            <div className="text-red">
                <p> {this.state.name} is {this.state.age} years old. </p>                            
            </div>
        )
    }
}
~~~
<br>
<hr>

### Event Handling
 - We have events like in javascript, such as onClick, onMouseOver, onCopy, ....
~~~
class App extends React.Component {
    ...

    changeName(e) {
        console.log(e);
    }

    render() {
        return (
            <div className="text-red">
                ...
                <button onClick={this.changeName}>change name</button>
            </div>
        )
    }
}
~~~

- This way of creating functions will work, but it has a limitation specially when we have to use the function to update states.

~~~
class App extends React.Component {
    state = {
        name: 'Charles',
        age: 26
    }

    changeName(e) {
        this.state.name = "Dilip";
    }

    render() {
        return (
            <div className="text-red">
                <p> {this.state.name} is {this.state.age} years old. </p>
                <button onClick={this.changeName}>change name</button>
            </div>
        )
    }
}
~~~

- The above code will not work, the reason is the state is, the `state` property is in global scope, but when I use `this.state` inside the function it will check for the local scope inside the function and since there is no `state` property inside the function it will through an error. 

**`Uncaught TypeError: Cannot read property 'state' of undefined`**

- The solution for the above case is to use `fat arrow functions`, since fat arrow functions will take the global scope and not local function scope.

- **Note: when updating state, use `setState` function, which is the best practice**
~~~
changeName = (e) => {
    this.setState({
        name: 'Dilip'
    });
}
~~~
<br>
<hr>

### create-react-app
- A tool for rapid application development

- Some features:
  - starter project boilerplate
  - Development Server
  - ES6 features can be used, since there is in-build babel support.
  - modular code
  - optimized code
  
- **Extra Note: if we use `npx`, we don't need to download and keep the create-react-app tool**

`npx create-react-app <app name>`

#### Basic Application Structure
- `public`
  - `manifest.json` - for PWA support
  - `index.html` - main file which which have a div with an id root, to render all the react views and components.

- `src`
  - `index.js, index.css` - have the `ReactDOM` related things.
  - `App.js, App.test.js, App.css` - main component, which is the parent for all the component, we will nest other custom components inside the App component.
  - `serviceWorker.js` - for PWA support


#### Creating a component
- To create a component, we need two packages, `React` and `Component`
~~~
import React, { Component } from 'react';
~~~

- Create a component called Warriors and Export (create components inside a component folder)
~~~
import React, { Component } from 'react';
import './Warriors.css';

class Warriors extends Component {
    state = {
        title: 'Dragon Ball Z Fighters'
    }
    render() {
        return (
            <div>
                <h3>{ this.state.title }</h3>
            </div>
        )
    }
}

export default Warriors;
~~~

- Import this basic component to App component
~~~
import Warriors from './components/Warriors';

class App extends Component {
  render() {
    return (
      <div className="App">
        ...
          <Warriors />
        ...
      </div>
    );
  }
}
~~~

- `props` to get information to a component from outside using `this.props`
##### App.js
~~~
class App extends Component {
  state = {
    fighters: [
      { id: 1, name: 'Goku', kind:'sayen', powerlevel: 1000 },
      { id: 2, name: 'Gohan', kind:'half sayen', powerlevel: 200 },
      { id: 3, name: 'Vegito', kind:'sayen', powerlevel: 980 },
      { id: 4, name: 'Krillan', kind:'human', powerlevel: 20 }
    ]
  }

  render() {
    return (
        ...
          <Warriors fighters={this.state.fighters} />
        ...
    );
  }
}
~~~

##### Warriors.js
~~~
render() {
    const { fighters } = this.props;
    
    const fightersList = fighters.map(fighter => {
        return (
            <p key={fighter.id}>{fighter.name} - {fighter.powerlevel}</p>
        )
    })

    return (
        <div>
            <h3>{ this.state.title }</h3>
            {fightersList}
        </div>
    )
}
~~~

- `key` is important in list of items, so react will know what to update when something changed.
- In  `fightersList` in `render` function, react is capable enough to understand how to print the array items.
<br>
<hr>

### UI Components / Stateless Components / Function Components
- don't contain states like in class components
- receive data through only props
- We will only have a function which will return jsx
- Will pass props as arguments

~~~
import React from 'react';

const ZWarriors = (props) => {
    const { fighters } = props;
    
    const fightersList = fighters.map(fighter => {
        return (
            <p key={fighter.id}>{fighter.name} - {fighter.powerlevel}</p>
        )
    })

    return (
        <div>
            <h3>Functional Component</h3>
            {fightersList}
        </div>
    )
}

export default ZWarriors;
~~~
<br>
<hr>

### Passing data between components with function passing as props

#### Adding a warrior function
- problem here is, the state which have the list of warriors is in `App.js`, and my form is in another component `AddWarrior.js`, therefore I need to pass the data or function between each other, for this our approach would be,
  - Create a function that will change the state in `App.js` and Pass that function as a prop to the other component
  - Execute the passed function in the other component.

##### App.js
~~~
addWarrior = (warrior) => {
    const newWarriorList = [...this.state.fighters, { id: this.state.nextId, ...warrior}];
    this.setState({fighters: newWarriorList, nextId: this.state.nextId + 1});
}
...
...
<AddWarrior add={this.addWarrior} />
~~~

##### AddWarrior.js
~~~
import React, { Component } from 'react';
import './Warriors.css';

class AddWarrior extends Component {
    state = {
        name: null, 
        kind: null, 
        powerlevel: null
    }

    // to add value to the relevant key soon as they type something in the input field
    addItemValue = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    addWarrior = (e) => {
        e.preventDefault();
        this.props.add(this.state);
        this.clearFields();
    }

    clearFields() {
        document.querySelectorAll('input').forEach(input => {
            input.value = '';
            if(input.id === 'name') {
                input.focus();
            }
        });
    }

    render() {

        return (
            <form>
                <input placeholder="Enter the name" id="name" onChange={this.addItemValue} />
                <input placeholder="Enter the kind" id="kind" onChange={this.addItemValue} />
                <input placeholder="Enter the powerlevel" id="powerlevel" onChange={this.addItemValue} />
                <button onClick={this.addWarrior}>ADD</button>
            </form>
        )
    }
}

export default AddWarrior;
~~~
