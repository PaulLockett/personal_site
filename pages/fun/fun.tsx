import styles from "./fun.module.css";
import GrandCanyon from "../public/grand_Canyon_Couple.jpg";
import ModPackIMG from "../public/allTheMods7.jpeg";
import Image from "next/image";

export default function Fun() {
  return (
    <div className={styles.container}>
      <h1>Fun</h1>
      <p> Some fun things I have been up to ...</p>
      <div>
        <Image
          src={GrandCanyon}
          alt="Grand Canyon couple"
          width={300}
          height={400}
        />
        <p>
          On the road trip to California to work at Neeva, My girlfriend Zim and
          I took a picture at the Grand Canyon.
        </p>
      </div>
      <div>
        <Image src={ModPackIMG} alt="Mod Pack" width={400} height={400} />
        <p>
          I stood up a server for my friends in this modpack at mc.plockett.com
        </p>
      </div>
    </div>
  );
}
