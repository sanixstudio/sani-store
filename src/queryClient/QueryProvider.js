import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function ReactQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider