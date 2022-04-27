import React from 'react'
import styled from 'styled-components';
import useCargarArticulos from '../hooks/useCargarArticulos'

const Blog = () => {
    const [articulos, loading] = useCargarArticulos()
    
    return (
        <ContenedorBlog>
            <Titulo>Blog</Titulo>
            <div>
                {loading?
                <p>Loading....</p>
                :
                <div>
                    {articulos.map(articulo => <Articulo key={articulo.id}>{articulo.titulo}</Articulo>)}
                </div>
                }
            </div>
        </ContenedorBlog>
    )
}

const ContenedorBlog = styled.div`
marging: 40px 0px 20px 0px;
`
const Titulo = styled.h2`
margin-bottom: 20px;
text-decoration: underline;
`

const Articulo = styled.p`
padding; 10px 0;
margin-left: 10px;
margin-bottom: 10px;
border-bottom: 1px solid #ccc;
color: #444;
`

export default Blog