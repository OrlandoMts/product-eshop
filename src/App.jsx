import React from 'react';
import '@styles/global.scss';
import { Header } from './containers/Header';
import { AppContext } from './context/AppContext';
import { useInitialState } from './hooks/useInitialState';
// import { Menu } from './components/Menu';

function App() {
    
    const initialState = useInitialState();
    
    return (
        <AppContext.Provider value={initialState}>
            <div className="App">
                <Header />
            </div>
        </AppContext.Provider>
    )
}

export default App
