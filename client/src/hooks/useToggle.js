import { useState, useCallback } from 'react';

export function useToggle(initial) {
    const [value, setValue] = useState(initial);
    return [value, useCallback(
        () => {
            setValue(value => !value)
        },
    )]
}