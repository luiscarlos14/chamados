import { useState, createContext, useEffect } from "react";
import { db } from "../services/firebaseConnection";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem("SistemaUser");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  async function signUp(email, password, nome, redirect) {
    setLoadingAuth(true);

    const auth = getAuth();

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await addDoc(collection(db, "users"), {
          nome: nome,
          avatarUrl: null,
        }).then(() => {
          let data = {
            uid: uid,
            nome: nome,
            email: value.user.email,
            avatarUrl: null,
          };

          setUser(data);
          storageUser(data);
          setLoadingAuth(false);
        });
        redirect();
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
      });
  }

  function storageUser(data) {
    localStorage.setItem("SistemaUser", JSON.stringify(data));
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
