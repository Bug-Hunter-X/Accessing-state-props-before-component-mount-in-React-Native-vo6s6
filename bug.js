This error occurs when you try to access a component's state or props before it has mounted.  In React Native, this often manifests when trying to access `this.state` or `this.props` within a lifecycle method like `constructor` or before `componentDidMount` has been called.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.initialData }; // Error! props might not be defined yet
  }
  // ...
}
```