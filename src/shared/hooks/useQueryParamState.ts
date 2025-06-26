import { useSearchParams } from "react-router-dom";

export const useQueryParamState = (key: string, defaultValue: string) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentValue = searchParams.get(key) ?? defaultValue;

    const setValue = (newValue: string) => {
        const newParams = new URLSearchParams(searchParams);
        if (newValue === defaultValue) {
            newParams.delete(key);
        } else {
            newParams.set(key, newValue);
        }
        setSearchParams(newParams, { replace: true });
    };

    return [currentValue, setValue];
};
