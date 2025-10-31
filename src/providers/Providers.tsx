import { ConvexClientProvider } from "./ConvexClientProviders";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {


return (
        <ConvexClientProvider>
            {children} 
        </ConvexClientProvider>
)
}