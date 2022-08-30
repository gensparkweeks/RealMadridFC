package com.rmback.dao;

import com.rmback.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerDao extends JpaRepository<Player, Integer> {

    @Query(
        value="SELECT concat(p.first_name, ' ', p.last_name) as fullname, p.dob, c.country_name as country, s.position_name as position FROM realmadrid.player p left join  realmadrid.country c on p.country_id = c.country_id left join realmadrid.position s on p.position_id=s.position_id",
        nativeQuery = true)
    public List<Player> findAllPlayer();

    @Query(
            value="SELECT concat(p.first_name, ' ', p.last_name) as fullname, p.dob, c.country_name as country, s.position_name as position FROM realmadrid.player p left join  realmadrid.country c on p.country_id = c.country_id left join realmadrid.position s on p.position_id=s.position_id where p.player_id=?1",
            nativeQuery = true)
    public Player findPlayerById(int id);

}
