import React, { FunctionComponent } from 'react';
import { LoadingSkeleton, LoadingSkeletonProps } from './LoadingSkeleton';

const Skeleton: FunctionComponent<LoadingSkeletonProps> = ({ children, isLoading }) => {
    const skeleton = (
        <div>
        </div>
    );

    return <LoadingSkeleton {...{ children, isLoading, skeleton }} />;
};

export default Skeleton;
