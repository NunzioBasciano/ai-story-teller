import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/Molecules/Header/Header";
import { labels } from '../data/labels'
import WindowBox from "../components/Organism/WindowBox/WindowBox";
import Footer from '../components/Molecules/Footer/Footer';
import InputBox from '../components/Molecules/InputBox/InputBox';
import { useEffect, useState } from "react";
import SelectBox from "@/components/Molecules/SelectBox/SelectBox";
import { optionSelect } from "@/data/optionSelect";

export default function Home() {
  const [protagonist, setProtagonist] = useState('');
  const [antagonist, setAntagonists] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    console.log(antagonist, protagonist)
  }, []);

  return (
    <>
      <Head>
        <title>{labels.titlePageLabel}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header
          title={labels.titlePageLabel}
        />
        <div className={styles.content}>
          <WindowBox >
            <InputBox
              label={labels.protagonistLabel}
              placeholder={labels.setProtagonistLabel}
              setValue={setProtagonist}
              value={protagonist}
            />
            <InputBox
              label={labels.antagonistLabel}
              placeholder={labels.setAntagonistLabelLabel}
              setValue={setAntagonists}
              value={antagonist}
            />
            <SelectBox
              label={labels.genresLabel}
              list={optionSelect}
              setAction={setGenre}
            />

          </WindowBox>
        </div>
        <Footer />
      </main>
    </>
  );
}
