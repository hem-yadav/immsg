export const getApiHost = (): string => {
    return process.env.REACT_APP_SEVER_BASE_URL || "";
    };
    
export default getApiHost;
    