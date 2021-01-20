import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValues, callback) => {
    const [values, setValues] = useLocalStorage(key, false);

    return [values, setValues];
}