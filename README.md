# Cole Odontologia

Landing page do Dr. Rafael Cole, com Next.js App Router, TypeScript e Tailwind CSS 4. Preparada para importação na Vercel a partir de um repositório GitHub.

## Executar

Requer Node.js 24 e npm.

```bash
npm ci
npm run dev
```

Abra http://localhost:3000. Para verificar a versão de produção:

```bash
npm run check
npm start
```

## GitHub e Vercel

O código está no repositório [joaofre1tas/cole-odontologia](https://github.com/joaofre1tas/cole-odontologia), na branch `main`.

1. Clone o repositório e execute `npm ci`.
2. Para publicar alterações, faça commit e push para `main`.
3. Na Vercel, escolha **Add New Project**, importe o repositório e use o preset **Next.js**. A pasta raiz é esta pasta, onde está `package.json`.
4. Defina `NEXT_PUBLIC_SITE_URL` com a URL pública, incluindo `https://`. Pode ser a URL `.vercel.app` inicialmente. Atualize para o domínio definitivo e faça novo deploy ao conectá-lo.
5. As configurações de instalação e build estão em `vercel.json`. O deploy seguinte acontece a cada push na branch de produção configurada na Vercel.

Sem URL configurada, o projeto usa `VERCEL_PROJECT_PRODUCTION_URL` quando fornecida pela Vercel. Sem nenhuma das duas, a revisão local fica com `noindex`, sem canonical e com sitemap vazio, para não inventar um domínio.

O deploy na Vercel ainda precisa ser configurado na conta responsável pelo site. A integração oficial está descrita em [Next.js na Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs).

## Estrutura

```text
src/app/                 Página, layout, estilos, favicon e SEO
src/components/sections/ Seções da landing page
src/components/          Interações e componentes compartilhados
src/config/site.ts       Contatos, mensagens, links e configurações
src/content/copy.json    Copy estruturada, preservada do material recebido
public/brand/            Logos originais
public/fonts/            Fontes locais
public/images/           Fotos fornecidas e simulações ilustrativas geradas por IA
public/videos/           Vídeo otimizado do hero
docs/                    Conteúdo original, mídia e registro de validação
.github/workflows/ci.yml Verificação de tipos e build no GitHub Actions
```

## Vídeo de fundo

O vídeo enviado na conversa já está integrado em `public/videos/dr-rafael-hero.mp4`, com 10 segundos, H.264, 1600 × 900, sem áudio e aproximadamente 860 KB. O poster é um quadro extraído do próprio vídeo.

Em telas de até 767 px, o hero usa a versão vertical `public/videos/dr-rafael-hero-mobile.mp4` (1080 × 1920, H.264, sem recompressão, sem áudio, cerca de 3 MB), alinhada à direita e com sobreposição preta no lugar do degradê. O poster vertical é `public/images/hero-poster-mobile.jpg`. Para trocar essa versão, substitua o MP4 local ou configure `NEXT_PUBLIC_HERO_VIDEO_MOBILE_MP4`.

O hero funciona sem variáveis adicionais. Para substituir o arquivo, troque o MP4 local ou configure `NEXT_PUBLIC_HERO_VIDEO_MP4` com outro caminho público ou URL HTTPS. A variável `NEXT_PUBLIC_HERO_VIDEO_WEBM` é opcional. Faça novo build/deploy após alterar variáveis públicas.

O componente oferece reprodução silenciosa em loop, botão de pausa, poster estático, tratamento de erro, pausa ao ocultar a aba e respeito a `prefers-reduced-motion` e à economia de dados quando informada pelo navegador. Se o autoplay for bloqueado (por exemplo, no Modo Pouca Energia do iPhone), o vídeo começa no primeiro toque na página, e o botão também permite iniciar a reprodução.

## Conteúdo e integrações

- WhatsApp e Instagram já usam os contatos fornecidos. Nenhuma mensagem é enviada automaticamente.
- Os CTAs recebem mensagens contextuais para estética, implantes e reabilitação.
- O mapa aponta ao endereço fornecido. As coordenadas geográficas não foram inventadas.
- Os 6 depoimentos e as 11 perguntas frequentes vêm da copy original.
- `NEXT_PUBLIC_GOOGLE_REVIEWS_URL` é opcional; o link de avaliações só aparece quando preenchido.
- As fontes são servidas localmente, sem requisições ao Google Fonts durante a visita.
- Os campos de GA4 e Meta Pixel começam vazios. Os CTAs emitem `cole:contact` e integram com `gtag`, `dataLayer` ou `fbq` quando essas ferramentas forem inicializadas pelo projeto. Preencher os IDs, sozinho, não instala rastreadores. A implementação deliberadamente não coleta dados de pacientes.

## Pendências de conteúdo

- Domínio definitivo.
- Link direto das avaliações no Google, se desejado.
- IDs e implementação de analytics, se desejados.
- Fotos do consultório para substituir os dois placeholders da seção 09.

Consulte [docs/midia.md](docs/midia.md) para a origem das imagens e [docs/validacao.md](docs/validacao.md) para o resultado dos testes.
