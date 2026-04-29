/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/index.html" },
        { source: "/o-nas", destination: "/o-nas.html" },
        { source: "/sluzby", destination: "/sluzby.html" },
        { source: "/kariera", destination: "/kariera.html" },
        { source: "/kontakt", destination: "/kontakt.html" },
        { source: "/sluzby/energeticke-audity", destination: "/sluzby/energeticke-audity.html" },
        { source: "/sluzby/technicke-audity", destination: "/sluzby/technicke-audity.html" },
        { source: "/sluzby/poradenstvo", destination: "/sluzby/poradenstvo.html" },
        { source: "/sluzby/online-monitoring", destination: "/sluzby/online-monitoring.html" },
        { source: "/sluzby/firemny-energetik", destination: "/sluzby/firemny-energetik.html" },
        { source: "/sluzby/ea-budov", destination: "/sluzby/ea-budov.html" },
        {
          source: "/sluzby/ea-budov-a-verejnych-budov",
          destination: "/sluzby/ea-budov-a-verejných-budov.html",
        },
      ],
    }
  },
}

export default nextConfig
