import { BrowserRouter } from 'react-router-dom';
import { AuthWrapper, NetworkStatusWrapper } from './wrappers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import './input.css';

const queryClient = new QueryClient({defaultOptions: {
  queries: {},
}});

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <NetworkStatusWrapper>
            <BrowserRouter>
              <AuthWrapper />
            </BrowserRouter>      
        </NetworkStatusWrapper>
      </QueryClientProvider>
     </div>
  );
}

export default App;
