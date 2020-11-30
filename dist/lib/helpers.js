export const deserialize = (serializedValue) => {
    return eval('(' + serializedValue + ')');
};
