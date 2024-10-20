# bTech - Website Institucional

Este é o projeto de um site institucional para a empresa fictícia bTech, desenvolvido em HTML, CSS e JavaScript, utilizando bibliotecas externas como Bootstrap, Swiper.js, AOS.js, e integração com o EmailJS para envio de mensagens através do formulário de contato.

## 🚀 Visualizando o Projeto Localmente

### Pré-requisitos:
Para visualizar o projeto localmente, você precisará de um ambiente com suporte a servidores locais. Recomendo usar a extensão **Live Server** no Visual Studio Code.

### Passos:
1. Clone o repositório ou faça o download dos arquivos.
   ```bash
   git clone https://github.com/lwkas-gabriel/landing-page-mais-pra-ti.git
   ```

2. Abra o projeto no Visual Studio Code.

3. Certifique-se de ter a extensão Live Server instalada. Caso não tenha, você pode instalar diretamente pela barra de extensões do VS Code ou através deste link: Live Server.

4. Clique com o botão direito no arquivo index.html e selecione "Open with Live Server".

5. O projeto será carregado no seu navegador padrão e estará pronto para visualização e testes.

### Alternativa (HTML Preview)
Se preferir, você também pode usar a extensão HTML Preview para uma pré-visualização, mas para funcionamento completo do projeto (principalmente scripts externos e dinâmicos), o Live Server é o mais recomendado.

### 📚 Bibliotecas Externas Utilizadas
1. Bootstrap 5.3
Uso: O Bootstrap foi utilizado para facilitar a criação de layouts responsivos, menus de navegação e estilização de componentes como botões e formulários.
Documentação: https://getbootstrap.com
2. Swiper.js
Uso: Swiper foi utilizado para criar os slides de imagens na seção de banners do site.
Documentação: https://swiperjs.com
3. AOS (Animate on Scroll)
Uso: A biblioteca AOS foi usada para aplicar animações suaves enquanto os elementos da página entram em cena ao rolar a tela.
Documentação: https://michalsnik.github.io/aos
4. EmailJS
Uso: A integração com o EmailJS permite o envio de formulários diretamente do frontend, sem necessidade de um backend específico. O formulário de contato utiliza o EmailJS para enviar mensagens para o email configurado.
Documentação: https://www.emailjs.com
5. Live Server (Extensão)
- Uso: Para visualizar o projeto de forma dinâmica no ambiente local, utilize a extensão Live Server do Visual Studio Code. Ela permite que você visualize alterações em tempo real no navegador à medida que edita os arquivos do projeto.
- Como utilizar o EmailJS

### Para que o envio de mensagens funcione, você deve:

### Criar uma conta no EmailJS.
- Configurar um novo serviço de email.
- Criar um template de email com os campos que deseja receber.
- Atualizar o publicKey, service_id, e template_id no seu script conforme suas configurações.
