import {useRouter} from "next/router";
import {useEffect} from "react";
export default function Redirect() {
  const router = useRouter()
  useEffect(() => {
    window.open('https://blog.sistemaautopecas.com.br'+window.location.pathname, "_self")
  }, []);
  return (<strong>Redirect for {'https://blog.sistemaautopecas.com.br'}</strong>)
}
