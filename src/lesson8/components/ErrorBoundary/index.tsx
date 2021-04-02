import React from "react";
import styled from "@emotion/styled";

const ErrorContainer = styled.div`
  position: relative;
  width: 350px;
  margin: auto;
  padding: 0px 10px 10px 10px;
  text-align: center;
  border: 2px solid red;
`;

interface IErrorBoundaryState {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<
  Record<string, unknown>,
  IErrorBoundaryState
> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(
    error: Error | null,
    errorInfo: React.ErrorInfo | null
  ): void {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render(): React.ReactNode {
    if (this.state.errorInfo) {
      return (
        <ErrorContainer>
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
