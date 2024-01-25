import React from "react";

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, { hasError: boolean }> {
    constructor(props : any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error : any) {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true,
        };
    }

    componentDidCatch(error: any, errorInfo: React.ErrorInfo) {
        // Any error reporting here
        console.error("Error occurred in component:", error);
        console.error("Error info:", errorInfo);
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

    try{
    if (props.value === "error") {
        throw new Error("Some error!");
    }
    }catch(e){
        console.log(e);
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
