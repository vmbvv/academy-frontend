import { Component, type ReactNode } from "react";

type RouteErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

type RouteErrorBoundaryProps = {
  children: ReactNode;
};

export default class RouteErrorBoundary extends Component<
  RouteErrorBoundaryProps,
  RouteErrorBoundaryState
> {
  state: RouteErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="bg-slate-800 p-8 rounded-2xl max-w-lg shadow-xl shadow-black/10 text-white"
          role="alert"
        >
          <div className="text-xl font-semibold mb-2">Something went wrong.</div>
          {this.state.error && (
            <div className="text-slate-400 text-sm mb-4">
              {this.state.error.message}
            </div>
          )}
          <button
            onClick={this.handleReset}
            className="bg-slate-600 hover:bg-slate-700 text-white rounded-lg px-4 py-2 font-semibold transition-colors"
            type="button"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
