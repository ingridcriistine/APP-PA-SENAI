/** @type {import('next').NextConfig} */
const nextConfig = {

    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/login",
            },
            {
                source: "/inicial",
                destination: "/home",
            },
            {
                source: "/matematica",
                destination: "/maths"
            },
            {
                source: "/funcao-reaproveitada",
                destination: "/general-function"
            },
            {
                source: "/pagina-com-fetch",
                destination: "/fetch-page"
            },
            {
                source: "/pagina-com-axios",
                destination: "/axios-page"
            }
        ]
    },

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'rickandmortyapi.com', 
          },
        ],
      },

};


export default nextConfig;
