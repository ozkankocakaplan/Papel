
import React from 'react';
import App from './App';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/store/index';

const store = createStore(rootReducer);
const Papel = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => Papel);
