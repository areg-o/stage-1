import { useState } from 'react';

export function useModal() {
    const [state, setState] = useState(false);

    const open = () => setState(!state);

    return { state, open };
}
