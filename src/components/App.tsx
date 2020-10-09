import { atom, useAtom } from 'jotai';
import React from 'react';
import { countAtom } from '~atoms';

export const App: React.FC = () => {
    const [count, setCount] = useAtom(countAtom);

    return (
        <div>
            <div>
                <b>{count}</b>
            </div>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}