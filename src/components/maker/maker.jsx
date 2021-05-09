import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "gom",
      company: "naver",
      title: "SW enginner",
      email: "asdsd@gamil.com",
      message: "hi",
      theme: "light",
      fileName: "GOM",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "gom2",
      company: "naver2",
      title: "SW enginner2",
      email: "asdsd@gamil.com2",
      message: "hi2",
      theme: "colorful",
      fileName: "GOM2",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "gom3",
      company: "naver3",
      title: "SW enginner3",
      email: "asdsd@gamil.com3",
      message: "hi3",
      theme: "light",
      fileName: "GOM3",
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
