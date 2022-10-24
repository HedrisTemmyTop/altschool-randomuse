import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false, errorMessage: false };
  }

  componentDidCatch(error, errorMessage) {
    this.setState({
      error: error,
      errorInfo: errorMessage,
    });
    // logErrorToMyService(error, errorMessage);
  }
  render() {
    if (this.state.hasError) {
      return <h2>{this.state.error.toString()}</h2>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
