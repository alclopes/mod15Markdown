import React from 'react'
import {Link} from 'gatsby'
import Seo from '../../components/Seo'

// Tudo que colocamos dentro do Helmet serve para configurar o head do html. Ajustamos
    // Title (aba da página)
    // meta/name/content (descrição do site para ajudar a pesquisas no google)

const Index = () => {
    return (
        <div>
            <Seo  title='Nosso Blog'  description='Blog com posts diários' />
            <h1>Nosso Blog - 2020</h1>
            <p>
                <Link to='/blog'>Blog</Link>
            </p>
        </div>
    )
}

export default Index