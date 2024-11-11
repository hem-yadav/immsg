import React, { FunctionComponent, ReactElement, ReactNode } from 'react';

export interface LoadingSkeletonProps {
    isLoading?: boolean;
    renderWhileLoading?: boolean;
    skeleton?: ReactNode;
    children: ReactElement
}

export const LoadingSkeleton: FunctionComponent<LoadingSkeletonProps> = ({
    children,
    isLoading = true,
    renderWhileLoading = false,
    skeleton,
}) => {
    const shouldShowChildren = renderWhileLoading || !isLoading;

    return (
        <>
            {isLoading && skeleton}
            {Boolean(children) && shouldShowChildren && (
                <div
                    className="loading-skeleton"
                    style={
                        isLoading ? { } : undefined
                    }
                >
                    {children}
                </div>
            )}
        </>
    );
};
