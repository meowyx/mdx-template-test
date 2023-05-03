import Head from "next/head";

function About() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
      <Head>
        <title>About Meowy's Blog</title>
      </Head>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        About Meowy's Blog
      </h1>
      <div className="text-lg mb-4">
        <p className="mb-4">
          Welcome to Meowy's Blog! This is a personal blog where I write about
          my interests and experiences, with a focus on technology and
          creativity.
        </p>
        <p className="mb-4">
          My name is Meowy, and I'm a software developer. I love learning new
          things, building cool stuff, and sharing my knowledge with others.
        </p>
        <p>
          I started this blog as a way to document my journey and share my
          thoughts with the world. I hope you find something useful or inspiring
          here, and if you have any questions or feedback, feel free to contact
          me!
        </p>
      </div>
      <div className="flex justify-start mb-4">
        <a
          className="text-lg text-gray-300 hover:text-gray-500 mr-4"
          href="https://github.com/meowyx"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="text-lg text-gray-300 hover:text-gray-500"
          href="https://twitter.com/me256ow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </div>
  );
}

export default About;
