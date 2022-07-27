
  const caminho = 'E:\\Meus Arquivos\\Google\\*.*';
  const destino = 'E:\\Meus Arquivos\\Programação\\Teste\\';

  const caminhoPorNivelDeDiretorio = caminho.split('\\');
  const destinoPorNivelDeDiretorio = destino.split('\\');

  const diretorio = caminhoPorNivelDeDiretorio.slice(-4).join('\\'); // slice() --> Acessa uma pasta ou arquivo anterior a cada Nº negativo adicionado
  const diretorioDest = destinoPorNivelDeDiretorio.slice(-4).join('\\');

  console.log(caminho);
  console.log(diretorio);
  console.log(destino);
  console.log(diretorioDest);
  
  caminho.copy;
  destino.paste;

  console.log(copy);
  console.log(paste);


  //copy.innerHTML = window.showSaveFilePicker();
  