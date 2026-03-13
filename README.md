# Portfolio

## Instructions

### Setup

```shell
git clone https://github.com/spounka/portfolio
cd portfolio
```

If you use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm), execute:

```shell
nvm install
nvm use
```

Or:

```shell
fnm install
fnm use
```

To install and launch the project, run these commands:

```shell
yarn
yarn start
```

### Deployment

- In the `package.json` file, update:

`"homepage": "https://portfolio.nazih.top"`

to `"homepage": "https://yourusername.github.io"`.

- In the CNAME file, update:

`portfolio.nazih.top` with `your.domain.tld`

- Push the changes to your repository.

- To build and deploy, run the following commands:

```shell
yarn build
yarn deploy
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
