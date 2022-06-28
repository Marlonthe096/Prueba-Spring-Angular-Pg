package com.cursojava.user.controllers;

import com.cursojava.user.dao.UsuarioDao;
import com.cursojava.user.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "https://marlonmira.com", maxAge = 3600)
@RestController

public class UsuarioController  {

    @Autowired
    private UsuarioDao usuarioDao;

    @RequestMapping(value = "/user/getUser/{id}", method = RequestMethod.GET)
    public Usuario getUser(@PathVariable long id){
        return usuarioDao.getUser(id);
    }

    @RequestMapping(value = "/user/updateUser", method = RequestMethod.POST)
    public void update(@RequestBody Usuario usuario){
        usuarioDao.update(usuario);
    }
    @RequestMapping(value = "/user/getUsers", method = RequestMethod.GET)
    public List<Usuario> getUsuarios(){
        return usuarioDao.getUsuarios();
    }
    @RequestMapping(value = "/user/newUser", method = RequestMethod.POST)
    public void registrar(@RequestBody Usuario usuario){
        usuarioDao.registrar(usuario);
    }

    @RequestMapping(value = "/user/deleteUser/{id}", method = RequestMethod.DELETE)
    public void  eliminar(@PathVariable long id){
        usuarioDao.eliminar(id);
    }
}
