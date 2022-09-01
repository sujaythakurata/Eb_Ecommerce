import React from "react";

export default class ErrorComponent extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error:any) {
    return { hasError: true };
  }

  componentDidCatch(error:any, errorInfo:any) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <>
        <h1 className="text-center text-danger">Something went wrong.</h1>
      </>;
    }

    return this.props.children; 
  }
}

