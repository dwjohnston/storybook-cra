import React from "react";

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, { hasError: boolean }> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true,
        };
    }

    componentDidCatch(error, errorInfo) {
        // Any error reporting here
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI

            return <div>error boundary!</div>;
        }

        return <>{this.props.children}</>;
    }
}

export function SomeComponentInner(props: { value: string }) {
    if (props.value === "error") {
        throw new Error("Some error!");
    }

    return <div>{props.value}</div>;
}

export function SomeComponent(props: { value: string }) {
    return (
        <ErrorBoundary>
            <SomeComponentInner {...props} />
        </ErrorBoundary>
    );
}
