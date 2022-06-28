package com.cursojava.user.dao;

import com.cursojava.user.models.Usuario;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class UsuarioDaoImp implements UsuarioDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Usuario> getUsuarios() {
        String query = "FROM Usuario";
        return entityManager.createQuery(query).getResultList();

    }
    @Override
    public void eliminar(long id) {
        Usuario usuario = entityManager.find(Usuario.class, id);
        entityManager.remove(usuario);
    }
    @Override
        public void registrar(Usuario usuario) {
            entityManager.merge(usuario);
    }
    @Override
    public Usuario getUser(long id) {
        return entityManager.find(Usuario.class, id);
    }
    @Override
    public void update(Usuario usuario) {
        entityManager.merge(usuario);
    }



}
