# Forró & Couros — Poltronas Artesanais

Uma website moderna, responsiva e totalmente construída com HTML puro e CSS (sem frameworks).

## 📁 Estrutura de Pastas

```
forroecouros-web-pti/
├── index.html              # Página principal com estrutura HTML
├── styles.css              # Estilos CSS separados
├── script.js               # Comportamentos JavaScript mínimo
├── assets/
│   └── images/             # Pasta para todas as imagens
│       ├── leather.webp
│       ├── linen_chair.webp
│       ├── poltrona_boucle.webp
│       ├── suede_chair.webp
│       ├── wood_arm_chair.jpg
│       ├── worker.jpg
│       └── web_done.png    # Imagem de referência do design final
└── README.md               # Este arquivo
```

## 🚀 Como Usar

### Instalação
1. Clone ou baixe este repositório
2. Copie todos os arquivos de imagem da raiz para a pasta `/assets/images` (ou use o notebook/um script para movê-los).
3. Abra `index.html` em seu navegador. Para testar localmente você pode rodar `python -m http.server` no diretório do projeto e então ir até `http://localhost:8000`.

### Estrutura de Arquivos
- **index.html**: Contém toda a estrutura HTML semântica com 7 seções principais
- **styles.css**: CSS puro com variáveis CSS personalizadas (design tokens) e layout responsivo
- **script.js**: JavaScript mínimo para comportamentos que CSS não consegue resolver:
  - Sombra na navegação ao rolar
  - Barra de progresso de scroll
  - Animações ao entrar na viewport
  - Controle do menu mobile
  - Feedback do formulário

## 🎨 Features

### Design Responsivo
- **Mobile-first**: Funciona perfeitamente em dispositivos móveis
- **Fluid Typography**: Tamanhos de fonte e espaçamento ajustam-se fluidamente
- **CSS Grid e Flexbox**: Layouts modernos sem dependências
- **Variáveis CSS**: Design tokens centralizados para fácil manutenção

### Seções Incluídas
1. **Navegação**: Menu fixo com hamburguer CSS puro para mobile
2. **Hero**: Seção de apresentação com SVG animado
3. **Sobre**: Layout assimétrico com composição visual
4. **Serviços**: Grid responsivo auto-fit com 6 serviços
5. **Galeria**: Grid com template-areas que se reorganiza por breakpoint
6. **Contato**: Formulário acessível com feedback visual
7. **Rodapé**: Links e informações do copyright

## 🛠 Tecnologias Utilizadas

- **HTML5**: Semântica correta, acessibilidade (ARIA labels)
- **CSS3 Puro**: 
  - Variáveis CSS (--cor-*, --fs-*, --sp-*)
  - Grid Layout
  - Flexbox
  - Media Queries
  - Animações CSS (@keyframes)
  - Gradientes e backdrop filters
- **JavaScript Vanilla**: Sem dependências externas
  - Intersection Observer para animações
  - Event Listeners nativos
  - DOM manipulation mínimo

## 📱 Breakpoints

- Desktop: 1140px (max-width do container)
- Tablet: até 900px
- Mobile: até 768px
- Small Mobile: até 520px
- Extra Small: até 480px

## 🎯 Customização

### Cores
Edite `/styles.css` nas variáveis CSS:
```css
:root {
  --cor-creme:        #f7f0e6;
  --cor-couro:        #8c5e3c;
  --cor-mogno:        #5c3520;
  /* ... mais cores ... */
}
```

### Tipografia
As fontes usam `clamp()` para fluidez:
```css
--fs-xl: clamp(2rem, 5vw, 3rem);
```

### Imagens
Substitua as imagens na pasta `/images` mantendo os mesmos nomes, ou atualize as referências nos comentários da seção de galeria no `index.html`.

## ♿ Acessibilidade

- Labels ARIA em elementos interativos
- Estrutura semântica apropriada
- Focus states visíveis
- Bom contraste de cores

## 🔄 Compatibilidade

- Chrome/Edge (últimas versões)
- Firefox (últimas versões)
- Safari (últimas versões)
- Suporta:
  - CSS Grid e Flexbox
  - Custom Properties (CSS Variables)
  - IntersectionObserver API

## 📄 Licença

© 2025 Forró & Couros — Todos os direitos reservados.

---

**Desenvolvido com HTML e CSS puros — Sem frameworks, sem dependências externas.**
