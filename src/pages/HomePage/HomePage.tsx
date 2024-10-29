import { Helmet, HelmetProvider } from 'react-helmet-async'
 
export default function HomePage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home page</title>
        <meta name='description' content='Contenido de la pagina home' />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://http://localhost:5173/" />
      </Helmet>
      <h1>Home page</h1>
    </HelmetProvider>
  )
}