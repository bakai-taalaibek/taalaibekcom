const info = (...params) => {
    console.log(...params);
};
const error = (params) => {
    if (Array.isArray(params))
        console.error(...params);
    else
        console.error(params);
};
const logger = {
    info,
    error,
};
export default logger;
