<section class="readme" id="readme">

  <h1>Sorgo do Vale — Agrinho 2025</h1>
  <p>Celebrando a conexão entre campo e cidade!</p>
  <p><a href="https://ztatazin.github.io/Agrinho-2025/" target="_blank" rel="noopener noreferrer">Sorgo do Vale</a></p>

  <p>Este projeto foi desenvolvido para o Programa Agrinho 2025, com o objetivo de aproximar a agricultura familiar da população urbana, fortalecendo o comércio local, a sustentabilidade e o protagonismo dos jovens do campo.</p>
  <p>O Sorgo do Vale é um site responsivo, acessível e multilíngue que conecta produtores rurais a consumidores da cidade, oferecendo produtos frescos, receitas, informações sobre práticas sustentáveis e um mapa interativo.</p>

  <h2>Funcionalidades</h2>
  <ul>
    <li><strong>Página inicial:</strong> conceito do projeto, produtos principais, receitas e mapa interativo.</li>
    <li><strong>Loja online:</strong> lista de produtos frescos com preços e botões de compra.</li>
    <li><strong>Sobre nós:</strong> história, visão e práticas sustentáveis do projeto.</li>
    <li><strong>Painel de acessibilidade:</strong> opções sem JavaScript: alto contraste, fonte ampliada, cursor grande, escala de cinza, links em destaque e modo noturno.</li>
    <li><strong>Suporte multilíngue:</strong> troca entre português e inglês.</li>
    <li><strong>Design responsivo:</strong> adaptação para desktop, tablet e mobile.</li>
    <li><strong>Mapa interativo:</strong> ícones clicáveis com animações e cards informativos.</li>
  </ul>

  <h2>Tecnologias Utilizadas</h2>
  <ul>
    <li><strong>HTML5</strong></li>
    <li><strong>CSS3</strong></li>
    <li><strong>JavaScript</strong></li>
    <li>Google Fonts: <strong>Atkinson Hyperlegible</strong></li>
  </ul>

  <h2>Acessibilidade</h2>
  <p>Este projeto segue diretrizes WCAG:</p>
  <ul>
    <li>Funciona sem JavaScript obrigatório.</li>
    <li>Navegação por teclado.</li>
    <li>Contraste adequado e fontes legíveis.</li>
    <li>Área de clique generosa em botões.</li>
    <li>Modo noturno, escala de cinza, destaque de links e cursor ampliado.</li>
  </ul>

  <h2>Estrutura do Projeto</h2>
  <pre>
  (raiz do projeto)
   ├── assets/
   │   ├── css/
   │   │   ├── index/
   │   │   ├── loja/
   │   │   ├── sobrenós/
   │   │   └── responsivo/
   │   ├── img/
   │   ├── js/
   │   │   └── scripts.js
   ├── english/
   │   ├── index-en.html
   │   ├── loja-en.html
   │   └── sobre-en.html
   ├── index.html
   ├── loja.html
   ├── sobre.html
  </pre>
  
  <h2>Contato</h2>
  <p>Email: <a href="mailto:otavio.araujo.oliveira@escola.pr.gov.br">otavio.araujo.oliveira@escola.pr.gov.br</a></p>
  
  <h2>Licença</h2>
  <p>Todas as imagens são de autoria própria — © 2025 Otávio Miguel.<br>
  Projeto acadêmico para o Programa Agrinho 2025 — uso educativo e sem fins comerciais.</p>

  <!-- Justificativa técnica -->
  <h2>Notas sobre Acessibilidade</h2>
  <p>Este projeto usa toggles de painel de idioma e modo noturno 100% em CSS, sem JavaScript.
  Para garantir total funcionalidade em dispositivos desktop e mobile, é necessário usar múltiplos
  <code>&lt;label&gt;</code> para o mesmo <code>&lt;input type="checkbox"&gt;</code>:
  um para abrir, outro para fechar ou versões para mobile e desktop.
  Isso gera alertas do tipo <em>Multiple form labels</em> em validadores automáticos,
  mas não compromete a acessibilidade real, pois cada <code>&lt;label&gt;</code> é
  claramente descrito com <code>aria-label</code> coerente,
  <code>role="presentation"</code> ou <code>aria-hidden="true"</code> quando necessário.</p>

  <p>Este uso foi documentado intencionalmente para manter o projeto 100% funcional com
  toggles CSS-only, sem necessidade de JavaScript adicional,
  alinhando-se às diretrizes do Programa Agrinho 2025.</p>

</section>
