package com.rmback.service;

import com.rmback.model.Player;
import com.rmback.model.Position;

import java.util.List;

public interface PlayerService {

    public List<Player> findAllPlayer();
    public Player findPlayerById(int id);
    public Player createPlayer(Player player);
    public String deletePlayer(int id);
}
