# Validação

Verificação realizada em 22/09/2026.

## Aprovado

- Build de produção com Next.js 16.3.5 e Webpack.
- TypeScript sem erros.
- Página inicial e metadados renderizados estaticamente.
- 12 seções principais, rodapé, um único H1, 6 depoimentos e 11 perguntas frequentes.
- Comparação do HTML de produção com todos os blocos da copy: nenhum texto ausente, desconsiderando marcações e numeração decorativa.
- Larguras de 360, 390, 768, 1280 e 1440 px sem rolagem horizontal da página ou transbordamento do cabeçalho.
- Menu mobile abre, fecha e responde a Escape.
- Accordion apresenta as respostas e mantém uma pergunta aberta por vez.
- Carrossel navega para a próxima avaliação e habilita o retorno.
- Links internos possuem destinos existentes.
- Links de WhatsApp contêm o telefone recebido e mensagens contextuais, com abertura em nova aba e `noopener noreferrer`. Nenhuma mensagem foi enviada durante a verificação.
- Vídeo: reprodução, pausa e retomada verificadas no navegador. Mudo, em loop, 1600 × 900, 10 segundos, 1.775.650 bytes.
- Servidor responde com HTTP 206 a requisições parciais do MP4, permitindo carregamento progressivo.
- Poster extraído do vídeo, com imagem responsiva pelo Next Image.
- Nenhuma imagem quebrada encontrada na inspeção do navegador.
- Console sem erros de aplicação nas verificações realizadas.
- Ausência de travessão no código em `src/`.

## Observações

A compilação e a prévia foram executadas em uma cópia temporária do mesmo projeto para contornar lentidão de leitura do diretório de documentos no ambiente local. O código entregue foi sincronizado com essa cópia. O compilador Webpack foi selecionado para evitar uma restrição de subprocessos do Turbopack neste ambiente.

As regras de redução de movimento e economia de dados foram conferidas no código; não foi alterada a preferência do sistema do usuário. A reprodução com conexão lenta e em aparelhos físicos ainda pode ser revisada após o deploy.

Não foi obtida uma pontuação Lighthouse. A meta de 90 do briefing não é apresentada como resultado medido. A medição final deve ser feita na URL pública, com domínio, cache e vídeo definitivos.

O projeto está preparado para publicação, mas nenhum repositório remoto ou deploy foi criado nesta entrega.
