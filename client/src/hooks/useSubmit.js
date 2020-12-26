import { useState } from 'react';

export function useSubmit(initialName) {
    const [name, setName] = useState();
    return [
        { name, onChange: (e) => setName(e.target.value) },
        () => setName(initialName)
    ];
}