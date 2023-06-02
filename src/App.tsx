import React, { useState, useEffect } from "react";
import PasswordForm from "./components/PasswordForm";
import PasswordList from "./components/PasswordList";
import "./index.css";
import CarouselGold from "./components/CarouselGold";
// import CarouselBronze from "./components/CarouselBronze";
// import CarouselApoiador from "./components/CarouselApoiador";
import soundFile from "./assets/effect.mp3";

interface Password {
  id: string;
  value: string;
  chamada: boolean;
}

const App: React.FC = () => {
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [currentPassword, setCurrentPassword] = useState<string | null>(null);

  useEffect(() => {
    const storedPasswords = localStorage.getItem("passwords");
    if (storedPasswords) {
      setPasswords(JSON.parse(storedPasswords));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("passwords", JSON.stringify(passwords));
  }, [passwords]);

  const addPassword = (password: string) => {
    const newPassword: Password = {
      id: Date.now().toString(),
      value: password,
      chamada: false,
    };
    setPasswords([newPassword, ...passwords]);
  };

  const handleClickPassword = (id: string) => {
    const updatedPasswords = passwords.map((password) => {
      if (password.id === id) {
        password.chamada = !password.chamada;
      }
      return password;
    });
    setPasswords(updatedPasswords);

    const clickedPassword = updatedPasswords.find(
      (password) => password.id === id
    );
    if (clickedPassword) {
      setCurrentPassword(clickedPassword.value);

      const audio = new Audio(soundFile);
      audio.play();
    }
  };

  const preparacaoPasswords = passwords
    .filter((password) => !password.chamada)
    .slice(0, 6);

  const halfIndex = Math.ceil(preparacaoPasswords.length / 2);
  const firstColumnPasswords = preparacaoPasswords.slice(0, halfIndex);
  const secondColumnPasswords = preparacaoPasswords.slice(halfIndex);

  return (
    <>
      <CarouselGold />
      {/* <CarouselApoiador /> */}
      {/* <CarouselBronze /> */}
      <div className="container">
        <div className="left-side">
          <div className="password-container">
            {currentPassword ? (
              <div className="password">{currentPassword}</div>
            ) : (
              <div className="password"></div>
            )}
          </div>
          <PasswordForm onAddPassword={addPassword} />
        </div>
        <div className="right-side">
          <div className="preparacao-passwords">
            <h2>Senhas em preparação</h2>
            <div className="password-columns">
              <div className="password-column">
                <PasswordList
                  passwords={firstColumnPasswords}
                  onClickPassword={handleClickPassword}
                />
              </div>
              <div className="password-column">
                <PasswordList
                  passwords={secondColumnPasswords}
                  onClickPassword={handleClickPassword}
                />
              </div>
            </div>
          </div>
          <div className="chamada-passwords">
            <h2>Senhas chamadas</h2>
            <PasswordList
              passwords={passwords.filter((password) => password.chamada)}
              onClickPassword={handleClickPassword}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
