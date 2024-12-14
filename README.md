# Accessing state/props before component mount in React Native

This repository demonstrates a common error in React Native: attempting to access component state or props before the component has finished mounting.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

The issue arises when trying to initialize state based on props within the `constructor` or before `componentDidMount` is executed.  Props might not be fully populated at this early stage, leading to undefined values and errors.

The solution involves delaying the state initialization until after the component has mounted, using `componentDidMount`. This ensures that props are available and avoids runtime issues.