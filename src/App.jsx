import React from 'react';
import '@styles/global.scss';
import { Header } from './containers/Header';
import { AppContext } from './context/AppContext';
import { Body } from './containers/Body';
import { useInitialState } from './hooks/useInitialState';

function App() {
    
    const initialState = useInitialState();
    
    return (
        <AppContext.Provider value={initialState}>
            <div className="App">
                <Header />
                <Body />
            </div>
        </AppContext.Provider>
    )
}

export default App
