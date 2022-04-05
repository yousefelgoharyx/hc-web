import Head from "next/head";
import About from "../components/About/About";
import Games from "../components/Games/Games";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import NewSwiper from "../components/NewSwiper/NewSwiper";
import "swiper/css";
import People from "../components/People/People";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Copyright/Copyright";
import instance from "../utils/axios";

export default function Home({ news, notFound, games, people }) {
  if (notFound) return <div>Something went wrong</div>;
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <NewSwiper news={news} />
      <Games games={games} />
      <People people={people} />
      <Footer />
      <Copyright />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const news = await instance.get("/api/news");
    const games = await instance.get("/api/game");
    const people = await instance.get("/api/influentialperson/Influential");
    return {
      props: {
        news: news.data,
        games: games.data,
        people: people.data,
      }, // will be passed to the page component as props
    };
  } catch {
    return {
      props: {
        notFound: true,
      },
    };
  }
}
