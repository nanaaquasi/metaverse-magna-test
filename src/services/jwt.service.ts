
const storeItem = ( type: string, item: unknown) =>
    localStorage.setItem(`${type}`, item as string);
const getItem = (type: string) => localStorage.getItem(`${type}`);
const destroyItem = (type: string) => localStorage.removeItem(`${type}`);

export default { storeItem, getItem, destroyItem };