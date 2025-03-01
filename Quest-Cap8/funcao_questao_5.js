const usuarios = [];

export function adicionarUsuario(nome, email, senha) {
  const novoUsuario = { id: Date.now(), nome, email, senha };
  usuarios.push(novoUsuario);
  return novoUsuario;
}

export function removerUsuario(id) {
  const indice = usuarios.findIndex(usuario => usuario.id === id);
  if (indice !== -1) {
    return usuarios.splice(indice, 1)[0]; 
  }
  return null;
}

export function atualizarUsuario(id, novosDados) {
  const usuario = usuarios.find(usuario => usuario.id === id);
  if (usuario) {
    Object.assign(usuario, novosDados); 
    return usuario;
  }
  return null;
}

export function listarUsuarios() {
  return [...usuarios]; 
}
