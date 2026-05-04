/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/o-nas.html", destination: "/o-nas", permanent: true },
      { source: "/sluzby.html", destination: "/sluzby", permanent: true },
      { source: "/kariera.html", destination: "/kariera", permanent: true },
      { source: "/kontakt.html", destination: "/kontakt", permanent: true },
      {
        source: "/sluzby/energeticke-audity.html",
        destination: "/sluzby/energeticke-audity",
        permanent: true,
      },
      {
        source: "/sluzby/technicke-audity.html",
        destination: "/sluzby/technicke-audity",
        permanent: true,
      },
      { source: "/sluzby/poradenstvo.html", destination: "/sluzby/poradenstvo", permanent: true },
      {
        source: "/sluzby/online-monitoring.html",
        destination: "/sluzby/online-monitoring",
        permanent: true,
      },
      {
        source: "/sluzby/firemny-energetik.html",
        destination: "/sluzby/firemny-energetik",
        permanent: true,
      },
      {
        source: "/sluzby/firemný-energetik.html",
        destination: "/sluzby/firemny-energetik",
        permanent: true,
      },
      { source: "/sluzby/ea-budov.html", destination: "/sluzby/ea-budov", permanent: true },
      {
        source: "/sluzby/ea-budov-a-verejných-budov.html",
        destination: "/sluzby/ea-budov",
        permanent: true,
      },
      {
        source: "/sluzby/energeticke-audity",
        destination: "/sluzby/energeticke-audity",
        permanent: true,
      },
      {
        source: "/sluzby/technicke-audity",
        destination: "/sluzby/technicke-audity",
        permanent: true,
      },
      {
        source: "/sluzby/poradenstvo",
        destination: "/sluzby/poradenstvo",
        permanent: true,
      },
      {
        source: "/sluzby/online-monitoring",
        destination: "/sluzby/online-monitoring",
        permanent: true,
      },
      {
        source: "/sluzby/firemny-energetik",
        destination: "/sluzby/firemny-energetik",
        permanent: true,
      },
      {
        source: "/sluzby/ea-budov",
        destination: "/sluzby/ea-budov",
        permanent: true,
      },
      {
        source: "/sluzby/ea-budov-a-verejnych-budov",
        destination: "/sluzby/ea-budov",
        permanent: true,
      },
    ]
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
  async headers() {
    return [
      {
        source: "/:all*(png|jpg|jpeg|webp|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(html)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ]
  },
}

export default nextConfig
