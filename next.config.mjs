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
            }
        ]
    }
};

export default nextConfig;
