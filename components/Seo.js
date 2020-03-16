import React from 'react'
import Helmet from 'react-helmet'

const Seo = ({title, description}) => {
    return (
        <Helmet>
            <title>{title}</title>
            {/* condicional: se não tiver description não inclui na tela */}
            {description && <meta name='description' content= {description} />}
        </Helmet>
    )
}

export default Seo