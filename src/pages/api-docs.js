  import React from 'react';
  import Layout from '@theme/Layout'; // Docusaurus Layout component
  import { RedocStandalone } from 'redoc';

  function ApiDocsPage() {
    // You can either pass the spec object directly if loaded at build time
    // or use specUrl for public URLs. Using specUrl is simpler here
    // for an external API.
    const petstoreSpecUrl = 'https://petstore.swagger.io/v2/swagger.json';

    return (
      <Layout
        title="API Documentation"
        description="API Documentation for WikiTDG project"
      >
        <main style={{ padding: '20px' }}>
          <h1>External API Documentation</h1>
          <p>This section documents an example external API.</p>
          <RedocStandalone
            specUrl={petstoreSpecUrl}
            options={{
              theme: {
                colors: {
                  primary: { main: '#336699' }, // Customize primary color
                },
                typography: {
                  fontFamily: 'system-ui, sans-serif',
                },
              },
              expandResponses: '200,201',
              hideDownloadButton: true,
            }}
          />
        </main>
      </Layout>
    );
  }

  export default ApiDocsPage;