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
import Button from "@/components/Atom/Button/Button";
import { GenerateContentCandidate, GoogleGenerativeAI } from "@google/generative-ai";

export default function Home() {
  const [protagonist, setProtagonist] = useState('');
  const [antagonist, setAntagonists] = useState('');
  const [genre, setGenre] = useState('');
  const [response, setResponse] = useState('');

  const handleGenerate = async () => {
    console.log({ protagonist, antagonist, genre });
    const prompt = `Genera una storia ${genre}, con il protagonista di nome ${protagonist} e l'antagonista di nome ${antagonist}`;

    if (process.env.NEXT_PUBLIC_GEMINI_KEY) {
      const genAi = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);
      const model = genAi.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(prompt);

      const output = (
        result.response.candidates as GenerateContentCandidate[]
      )[0].content.parts[0].text;

      if (output) {
        setResponse(output);
      }
    }
  }

  const validation = protagonist.trim().length > 0 && antagonist.trim().length > 0 && genre.length > 0;

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
          <WindowBox
            title={labels.storyParamsLabel}
          >
            <div className={styles.input_container}>
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
              <div className={styles.container_button}>
                <Button
                  label={labels.buttonParamsLabel}
                  onClick={handleGenerate}
                  disabled={!validation}
                />
              </div>
            </div>
          </WindowBox>
        </div>
        <WindowBox>
          <p className={styles.container_story}>{response}</p>
        </WindowBox>
        <Footer />
      </main>
    </>
  );
}
