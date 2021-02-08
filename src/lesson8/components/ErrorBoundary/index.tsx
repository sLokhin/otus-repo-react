import React, { FC } from "react";
import styled from "@emotion/styled";

const ErrorContainer = styled.div`
  position: ${"relative"};
  width: ${"350px"};
  margin: ${"auto"};
  padding: ${"0px 10px 10px 10px"};
  text-align: ${"center"};
  border: ${"2px solid red"};
`;

interface IErrorBoundaryState {
  error: any;
  errorInfo: any;
}

export class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <ErrorContainer className={"error-container"}>
          <h2>Enough questions for today!</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}
