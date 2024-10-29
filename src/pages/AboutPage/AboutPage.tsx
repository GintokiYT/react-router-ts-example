import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function AboutPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About page</title>
        <meta name='description' content='Contenido de la pagina about' />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://http://localhost:5173/about" />
      </Helmet>
      <h1>About page</h1>
    </HelmetProvider>
  )
}