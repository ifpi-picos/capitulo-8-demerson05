import {
    adicionarUsuario,
    removerUsuario,
    atualizarUsuario,
    listarUsuarios
  } from './funcao_questao_5.js';
  
  const usuario1 = adicionarUsuario('João Silva', 'joao@email.com', 'senha123');
  const usuario2 = adicionarUsuario('Maria Oliveira', 'maria@email.com', 'senha456');
  console.log('Usuários após adição:', listarUsuarios());

  const usuarioAtualizado = atualizarUsuario(usuario1.id, { nome: 'João Santos', senha: 'novaSenha123' });
  console.log('Usuário atualizado:', usuarioAtualizado);
  
  const usuarioRemovido = removerUsuario(usuario2.id);
  console.log('Usuário removido:', usuarioRemovido);
  
  console.log('Usuários restantes:', listarUsuarios());
  