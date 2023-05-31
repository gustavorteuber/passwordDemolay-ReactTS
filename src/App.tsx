import React, { useState, useEffect } from "react";
import PasswordForm from "./components/PasswordForm";
import PasswordList from "./components/PasswordList";

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
        if (password.chamada) {
          password.chamada = false;
        } else {
          password.chamada = true;
        }
      }
      return password;
    });
    setPasswords(updatedPasswords);

    const clickedPassword = updatedPasswords.find(
      (password) => password.id === id
    );
    if (clickedPassword) {
      setCurrentPassword(clickedPassword.value);
      playSound();
    }
  };

  const playSound = () => {
    const audio = new Audio("/assets/effect.mp3");
    audio.play();
  };

  const preparacaoPasswords = passwords
    .filter((password) => !password.chamada)
    .slice(0, 6);
  const chamadaPasswords = passwords
    .filter((password) => password.chamada)
    .slice(0, 6);

  return (
    <div className="container">
      <div className="left-side">
        <div className="password-container">
          {currentPassword ? (
            <div className="password">{currentPassword}</div>
          ) : (
            <div className="password"></div>
          )}
        </div>
      </div>
      <div className="right-side">
        <PasswordForm onAddPassword={addPassword} />
        <div className="preparacao-passwords">
          <h2>Senhas em preparação</h2>
          <PasswordList
            passwords={preparacaoPasswords}
            onClickPassword={handleClickPassword}
          />
        </div>
        <div className="chamada-passwords">
          <h2>Senhas chamadas</h2>
          <PasswordList
            passwords={chamadaPasswords}
            onClickPassword={handleClickPassword}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
