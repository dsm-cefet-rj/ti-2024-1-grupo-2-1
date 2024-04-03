import React, { createContext, useState, useEffect } from "react";
import { set } from "react-hook-form";
import { Link } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  //Toda vez que a aplicaçao for carregada, haverá uma verificaçao do token do usuario no armazenamento
  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_db");
    if (userToken && usersStorage) {
      //se o usuario tem o mesmo email q o token
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );
      if (hasUser) setUser(hasUser[0]);
    }
  }, []);
  //recebe email e senha para fazer o login na aplicação
  const logIn = (email, password) => {
    //recebe os usuarios
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));
    //filtro para saber se o email q ja esta sendo logado ja esta cadastrado
    const hasUser = usersStorage?.filter((user) => user.email === email);

    //se tiver usuario, verifica-se se é o mesmo da senha e email e um token é gerado
    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        //gerar um token, para ter um controle.
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        const name = hasUser[0].name;
        setUser({ name, email, password });
        return;
      } else {
        return <label color="red">Email ou senha incorretos</label>;
      }
    } else {
      return <label color="red">Usuário não cadastrado</label>;
    }
  };

  const signUp = (name, email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));
    //filtro para saber se o email q ja esta sendo logado ja esta cadastrado
    const hasUser = usersStorage?.filter((user) => user.email === email);
    //verificar se tem um email ja cadastrado com o email informado
    if (hasUser?.length) {
      return <label>Já tem uma conta com esse email</label>;
    }
    // const newUser = {
    //     name: name,
    //     email: email,
    //     password: password
    // };

    // const updatedUsers = usersStorage ? [...usersStorage, newUser] : [newUser];
    let newUser;
    if (usersStorage) {
      newUser = [...usersStorage, { name, email, password }];
    } else {
      newUser = [{ name, email, password }];
    }
    localStorage.setItem("users_db", JSON.stringify(newUser));
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, logIn, signUp, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
