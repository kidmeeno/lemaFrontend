import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import '@testing-library/jest-dom';
import UsersPage from './UsersPage';
import { MemoryRouter } from 'react-router-dom';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// ✅ Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const mockUsers = {
  data: [
    {
      id: 1,
      name: 'James Sunderland',
      email: 'james.sunderland@acme.corp',
      street: '11 Katz St.',
      city: 'Centralia',
      state: 'Pennsylvania',
      zipcode: 'M4A2T6',
    },
  ],
  total: 1,
};

describe('UsersPage', () => {
  it('renders user table with data', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockUsers });

    const queryClient = new QueryClient();
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <UsersPage />
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(document.querySelector('.loader')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('James Sunderland')).toBeInTheDocument();
      expect(screen.getByText('james.sunderland@acme.corp')).toBeInTheDocument();
      expect(screen.getByText(/11 Katz St/i)).toBeInTheDocument();
    });
  });
});
