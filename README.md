# Gerenciador de Tarefas - Full Stack

Este é um projeto **Full Stack** de Gerenciador de Tarefas, desenvolvido com **Node.js** no backend, **React** e **Vite** no frontend, e **MongoDB** como banco de dados. O aplicativo implementa um **CRUD** (Criar, Ler, Atualizar, Deletar) completo de tarefas, permitindo que o usuário adicione, edite, exclua e gerencie o status das tarefas. O foco principal do projeto foi na **modularidade**, **responsividade** e **otimização de performance**.

## Tecnologias Usadas

- **Backend:** Node.js, Express, MongoDB
- **Frontend:** React, Vite, Sass, React Router
- **Outras:** React Hooks (`useState`, `useEffect`, `useMemo`, `useCallback`), Axios

## Funcionalidades

- **Adicionar Tarefas:** Permite adicionar novas tarefas à lista.
- **Listar Tarefas:** Exibe todas as tarefas cadastradas com seus respectivos status.
- **Excluir Tarefas:** Usuários podem excluir tarefas da lista.
- **Alterar Status:** Modifique o status de uma tarefa entre 'Concluída' e 'Não Concluída'.
- **Responsividade:** O design do aplicativo é completamente responsivo, adaptando-se a diferentes tamanhos de tela.
- **Rotas:** Navegação entre telas como Home e Login utilizando React Router.

## Funcionalidades e Implementações

### 1. **Introdução ao Módulo**
   O projeto começa com a configuração do ambiente de desenvolvimento com **Node.js** para o backend e **React** com **Vite** para o frontend.

### 2. **Backend: Conectando com MongoDB**
   O servidor **Node.js** realiza requisições HTTP para interagir com a API, conectando-se ao **MongoDB** para armazenar e recuperar dados das tarefas.

### 3. **Estilizações Iniciais com Sass**
   Utilização do **Sass** para organizar e otimizar o CSS, proporcionando uma estrutura mais eficiente e fácil manutenção do estilo.

### 4. **Componentização do Frontend**
   O projeto foi dividido em componentes reutilizáveis, facilitando a manutenção e evolução do código.

   - **TaskList:** Componente responsável por listar todas as tarefas.
   - **TaskItem:** Exibe informações de cada tarefa individualmente.
   - **TaskInput:** Campo para adicionar novas tarefas.
   - **Sidebar:** Barra lateral para navegação.

### 5. **Integração com a API**
   A **API** foi criada no backend utilizando **Node.js**, permitindo realizar operações como adicionar, excluir e atualizar tarefas.

### 6. **Rotas e Navegação com React Router**
   Utilizando **React Router**, o aplicativo possui rotas para a **Tela Inicial** e a **Tela de Login**, com passagem de parâmetros entre elas e otimização de performance com o hook `useCallback`.

### 7. **Adicionando Responsividade**
   O layout foi desenvolvido de forma responsiva para garantir uma boa experiência em dispositivos móveis, utilizando **media queries** e ajustes no design.

### 8. **Refatoração e Performance**
   Durante o desenvolvimento, o código foi refatorado para melhorar a performance, utilizando técnicas como o hook `useCallback` para evitar renderizações desnecessárias.

## Hooks Utilizadas

### `useState`
   - O `useState` é uma hook fundamental no React usada para adicionar e gerenciar o estado dentro de um componente funcional.
   - Exemplo:
     ```javascript
     const [tarefa, setTarefa] = useState('');
     ```
     Neste exemplo, a variável `tarefa` armazena o valor da tarefa que será inserida, e `setTarefa` é uma função que atualiza o estado.

### `useEffect`
   - A hook `useEffect` permite executar efeitos colaterais (side effects) em componentes funcionais. Isso pode incluir chamadas de API, manipulações do DOM, ou atualização de estados após renderizações.
   - Exemplo:
     ```javascript
     useEffect(() => {
       fetchTarefas();
     }, []);  // O array vazio garante que a função seja chamada apenas uma vez após o componente ser montado
     ```
     Nesse exemplo, `fetchTarefas` é chamado quando o componente é montado.

### `useMemo`
   - O `useMemo` memoriza um valor calculado, evitando que ele seja recalculado a cada renderização. Isso ajuda a melhorar a performance, especialmente em casos onde cálculos pesados ou filtragens de listas são realizados.
   - Exemplo:
     ```javascript
     const tarefasFiltradas = useMemo(() => {
       return tarefas.filter(tarefa => tarefa.status === 'pendente');
     }, [tarefas]);  // A função será recalculada apenas quando `tarefas` mudar
     ```
     O `useMemo` evita que a filtragem de tarefas seja feita novamente, a não ser que a lista `tarefas` seja alterada.

### `useNavigate`
   - O `useNavigate` é utilizado para navegação programática entre páginas em uma aplicação React usando React Router.
   - Exemplo:
     ```javascript
     const navigate = useNavigate();

     const handleLogin = () => {
       // Após login bem-sucedido, navega para a página inicial
       navigate('/home');
     };
     ```
     Aqui, `useNavigate` é usado para redirecionar o usuário para a página "Home" após uma ação, como o login.

### `useCallback`
   - O `useCallback` é utilizado para memorizar funções e evitar que sejam recriadas a cada renderização do componente, o que pode melhorar a performance.
   - Exemplo:
     ```javascript
     const adicionarTarefa = useCallback(() => {
       // Código para adicionar tarefa
     }, []);  // A função só será recriada se o array de dependências mudar
     ```
     Com `useCallback`, a função `adicionarTarefa` será preservada entre as renderizações, a menos que suas dependências mudem.

## Feito por:

### Lucas Freitas Vilela

### Linkedin:https://www.linkedin.com/in/lucasfreitasvilela
### Site:https://lucasvilela.vercel.app
