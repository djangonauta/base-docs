# Projeto base para criação de documentação Sphinx

Passos para utilização

- Instalar o Python
- Instalar o Git
- Clonar o repositório
- Customizar a configuração do projeto
- Instalar o Poetry
- Instalar as dependências do projeto
- Executar a documentação
- Reiniciar o repositório

## Instalar o Python

[Python][python] deve ser instalado de acordo com o sistema operacional do usuário. [Pyenv][pyenv] pode ser
usado para gerenciar múltiplas versões do interpretador. A versão do [Python][python] utilizada nesta
documentação é a `3.13.5`.

## Instalar o Git

Os passos para instalação estão disponíveis no site oficial do [Git][git].

## Clonar o repositório

Com o [Git][git] instalado, clone o projeto com o comando `git clonegit@github.com:djangonauta/base-docs.git`. 
Para alterar o nome do diretório (`base-docs`), adicione o nome do seu projeto após o comando anterior:

```bash
git clone git@github.com:djangonauta/base-docs.git <nome_do_seu_projeto_diretorio>
```

## Customizar a configuração do projeto

A configuração do projeto usa o nome "docs-base" que provavelmente não será o nome do projeto/documentação
que o usuário pretende utilizar. Pelo menos dois arquivos precisam ser modificados para alterar o nome de
projeto (e quaisquer outras configurações). São eles `conf.py` e `pyproject.toml`:

### conf.py

Abra o arquivo `conf.py` e modifique as seguintes linhas de acordo com a necessidade:

```python
project = 'docs-base'
copyright = '2025, Igor Carvalho'
author = 'Igor Carvalho'
```

### pyproject.toml

Abra o arquivo `pyproject.toml`e modifique as seguintes linhas de acordo com a necessidade:

```toml
name = "base-docs"
version = "0.1.0"
description = ""
authors = [
    {name = "Igor Carvalho", email = "igbrch@gmail.com"}
]
```

## Instalar o Poetry

Os passos para instalação estão disponíveis no site oficial do [Poetry][poetry].

## Instalar as dependências do projeto

Após clonar o projeto com [Git][git] e com [Python][python] e [Poetry][poetry] instalados, acesse para o
diretório em que o projeto foi clonado e instale as dependências com comando `poetry install --with dev`:

```bash
[igor@oak][/home/igor/projects/base-docs][⑆ main]
└─▶ poetry install --with dev
```

Um ambiente virtual será criado automaticamente e as dependências serão instaladas. Se o projeto não foi
customizado conforme passo anterior, o nome do ambiente virtual será `base-docs-py3.13` e título da
documentação será `docs-base`.

## Executar a documentação

O comando `poetry env activate | source` ativa o ambiente virtual do projeto.

```bash
base-docs on  main [!?] is 📦 v0.3.2 via 🐍 v3.13.7
❯ poetry env activate | source

base-docs on  main [!?] is 📦 v0.3.2 via 🐍 v3.13.7 (base-docs-py3.13)
❯
```

Com o ambiente virtual ativado, execute `poe docs` para limpar o diretório `build` construir a documentação
usando `sphinx-autobuild`.

`poe` não aparenta funcionar no Windows. Nesse caso use os comandos a seguir:

```bash
make clean
sphinx-autobuild ./docs ./build --host 0.0.0.0 --port 9000
```

## Reiniciar o repositório

Se o objetivo for criar uma nova documentação sobre um novo projeto (ao invés de adicionar alterações no
projeto base-docs), será necessário criar um novo repositório [Git][git] com as alterações feitas nos passos
anteriores. Os comandos a seguir devem ser executados no mesmo diretório do projeto.

```bash
# Remove todo histórico
rm -rf .git

# Inicia novo repositório
git init
git add .
git commit -m "Initial commit" # ou cz commit

# Conecta com seu novo repositório remoto (primeiro crie o novo repositório no github ou gitlab).
git remote add origin <seu-novo-repositorio>
git push -u origin main
```

[python]: https://python.org
[pyenv]: https://github.com/pyenv/pyenv
[poetry]: https://python-poetry.org/docs/#installing-with-the-official-installer
[git]: https://git-scm.com/downloads
