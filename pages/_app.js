import { useState, useEffect } from "react";
import "../styles/globals.css";
import horse from "../images/horse.gif";
import Image from "next/image";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return loading ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        // backgroundColor: "#fff",
      }}
    >
      <Image src={horse} width={320} height={280} />
      <div style={{ fontSize: 48, fontWeight: 700 }}>نادي اصحاب الجياد</div>
    </div>
  ) : (
    <Component {...pageProps} />
  );
}

export default MyApp;
