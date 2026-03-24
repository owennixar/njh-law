import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about-8",
        destination: "/attorneys/michael-nixon",
        permanent: true,
      },
      {
        source: "/copy-of-michael-s-nixon-1",
        destination: "/attorneys/anthony-jach",
        permanent: true,
      },
      {
        source: "/copy-of-michael-s-nixon",
        destination: "/attorneys/curtis-hubbard",
        permanent: true,
      },
      {
        source: "/copy-of-curtis-hubbard",
        destination: "/attorneys/jeffery-rusthoven",
        permanent: true,
      },
      {
        source: "/copy-of-michael-s-nixon-2",
        destination: "/attorneys/anthony-alvarado",
        permanent: true,
      },
      {
        source: "/area-s-of-practice",
        destination: "/practice-areas/construction-law",
        permanent: true,
      },
      {
        source: "/construction-law",
        destination: "/practice-areas/construction-law",
        permanent: true,
      },
      {
        source: "/commercial-real-estate",
        destination: "/practice-areas/commercial-real-estate",
        permanent: true,
      },
      {
        source: "/business-litigation",
        destination: "/practice-areas/business-litigation",
        permanent: true,
      },
      {
        source: "/corporate",
        destination: "/practice-areas/corporate-transactions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
