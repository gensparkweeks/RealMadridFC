package com.rmback.controller;
import com.rmback.model.Player;
import com.rmback.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/players")
public class PlayerController {

    @Autowired
    PlayerService playerService;

    @GetMapping("home")
    public String home(){
        return "<html><h1>Welcome to my API REst from Player/Controller</h1></html>";
    }

    @GetMapping
    public List<Player> findAllPlayer(){
        return playerService.findAllPlayer();
    }

    @GetMapping("/{id}")
    public Player findPlayerById(@PathVariable int id){
        return playerService.findPlayerById(id);
    }

    @PostMapping
    public Player createPlayer(@RequestBody Player player){
        return playerService.createPlayer(player);
    }

    @PutMapping
    public Player updatePlayer(@RequestBody Player player){
        return playerService.createPlayer(player);
    }

    @DeleteMapping("/{id}")
    public String deletePlayer(@PathVariable int id){
        return playerService.deletePlayer(id);
    }
}
