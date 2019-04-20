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

