# ###### Objetivo do Projeto

# ###### Configurando o projeto
    No Cmd - Se ainda não estiver instalado, instalar:
        NodeJS / npm (npm vem no NodeJS)
        gatsby-cli
    No Cmd - Para intalar os pacotes necessários:
        npm install react react-dom gatsby
        npm install gatsby-source-filesystem
        npm install gatsby-transformer-remark
    No arquivo markdown incluir um frontmatter com os:
        metadados para o transformer:
            path: "/blog/minha-pagina"
            title: "Minha página!"
            description: "Bem vindo a minha página"
            categoria: "teste"
            price: 10

# ###### Para rodar o projeto dar o comando:
    No Cmd - Para executar/gerar arquivos (demora um pouco):
        gatsby develop
    You can now view mod01c_gatsby in the browser.
⠀       http://localhost:8000/
    View GraphiQL, an in-browser IDE, to explore your site's data and schema
        http://localhost:8000/___graphql

# ###### Demandas já realizadas
    1. Permitir a entrada de dados em formato markedown para o blog
        Utilizar um markdown como filesystem/fonte de dados 
            para o blog/Gatsby. 
            (npm install gatsby-source-filesystem)
        Criação de um transformer que pegue uma arquivo markdown
            e o  transforme em Html. 
            (npm install gatsby-transformer-remark)
    2. Criar uma página com uma lista de páginas 
        que serão criadas dinamicamente a partir de cada arquivo markdown.
    3. Criar uma página dinamica com o contéudo do arquivo markdown
        para cada uma das páginas listadas na lista de páginas baseada 
        em arquivos markdown
    4. Incluir titulos nas abas das páginas 
        (npm install gatsby-plugin-react-helmet react-helmet )
    5. Incluir paginação na pagina de blog
        isso irá mudar a pagina do blog de
            => de   page    para    template 
            => de   useStaticQuery    para    pageQuery
    6. Incluir imagens nos posts
        => npm install gatsby-image gatsby-plugin-sharp gatsby-remark-images gatsby-transformer-sharp
    7. Incluir banner nos posts
    8. Incluir banner na listagem do Blog
    9. Adicionando comentários aos posts
    10. incluir um plugin/api para discusão on-line
        Como o nosso site é estatico para operações que exijam alguma interação sempre que possivel devemos dar preferencia a usar serviços de parceiros
        => npm install disqus-react
        => Cadastre-se e crie seu projeto em https://disqus.com/
            User:alclopes.gerald34
            Minha URL: https://blogcurso-1.disqus.com/admin/install/
    11. 
        npm install netlify-cms gatsby-plugin-netlify-cms
        ter cadastro em https://www.netlify.com/
        criar o arquivo: config.yml





# ###### Proximas Demandas
