package com.rmback.service;
import com.rmback.dao.PlayerDao;
import com.rmback.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PlayerServiceImpl implements PlayerService{

    @Autowired
    PlayerDao playerDao;

    @Override
    public List<Player> findAllPlayer() {
        return playerDao.findAllPlayer();
    }

    @Override
    public Player findPlayerById(int id) {
        Player player;
        Optional<Player> opt = playerDao.findById(id);

        if (opt.isPresent()){
            player = opt.get();
        }else{
            throw new RuntimeException("The player id: "+ id + " wasn't found");
        }
        return player;
    }

    @Override
    public Player createPlayer(Player player) {
        return playerDao.save(player);
    }

    @Override
    public String deletePlayer(int id) {
        playerDao.deleteById(id);
        return "The player id: "+ id + " was deleted";
    }
}
