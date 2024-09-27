/** @type {import('next').NextConfig} */
const nextConfig = {

    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/matematica",
                destination: "/maths"
            }
        ]
    }
};

export default nextConfig;
