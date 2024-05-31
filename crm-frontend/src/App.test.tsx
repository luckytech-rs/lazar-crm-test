import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import authReducer from './store/reducers/auth/authSlice';
import '@testing-library/jest-dom/extend-expect';

const renderWithProviders = (
    ui: React.ReactElement,
    {
        preloadedState = {},
        store = configureStore({
            reducer: { auth: authReducer },
            preloadedState
        }),
        ...renderOptions
    } = {}
) => {
    const Wrapper: React.FC = ({ children }) => (
        <Provider store={store}>
            <MemoryRouter>{children}</MemoryRouter>
        </Provider>
    );
    return render(ui, { wrapper: Wrapper, ...renderOptions });
};

describe('App', () => {
    test('renders login page when not authenticated', () => {
        renderWithProviders(<App />, {
            preloadedState: {
                auth: { isAuthenticated: false, token: null }
            }
        });

        expect(screen.getByText(/login/i)).toBeInTheDocument();
    });

    test('renders profile page when authenticated', () => {
        renderWithProviders(<App />, {
            preloadedState: {
                auth: { isAuthenticated: true, token: 'dummy-token' }
            }
        });

        expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    });
});
