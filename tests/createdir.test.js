const fs = require('fs')
const rimraf = require('rimraf')

const CreateDir = require('../aux/createdir')

function removerDiretorio (diretorio) {
  rimraf.sync(diretorio)
}

test('Cria corretamente um diretório', () => {
  const dir = './posts/test'
  CreateDir(dir)
  expect(fs.existsSync(dir)).toBe(true)

  afterAll(() => {
    removerDiretorio(dir)
  })
})
