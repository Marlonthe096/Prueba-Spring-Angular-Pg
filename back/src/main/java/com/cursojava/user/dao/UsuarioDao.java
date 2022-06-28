package com.cursojava.user.dao;

import com.cursojava.user.models.Usuario;

import java.util.List;

public interface UsuarioDao  {
    List<Usuario> getUsuarios();

    void eliminar(long id);

    void registrar(Usuario usuario);

    Usuario getUser(long id);

    void update(Usuario usuario);
}
