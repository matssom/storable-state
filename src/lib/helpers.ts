export const deserialize = (serializedValue : string) => {
    return eval('(' + serializedValue + ')')
}