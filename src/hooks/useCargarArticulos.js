import { useState, useEffect } from "react";

const useCargarArticulos = () => {
    const [articulos, setArticulos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
          setArticulos([
              {
                  id:1,
                  titulo: 'Titulo primer articulo'
              },
              {
                  id:2,
                  titulo: 'Titulo segundo articulo'
              },
              {
                  id:3,
                  titulo: 'Titulo tercer articulo'
              }
          ])
          setLoading(false)
      }, 3000)
    
    }, [])

    return [articulos, loading];
}
 
export default useCargarArticulos