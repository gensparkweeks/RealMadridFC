package com.rmback.service;

import com.rmback.dao.PositionDao;
import com.rmback.model.Position;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PositionServiceImpl implements PositionService{

    @Autowired
    PositionDao positionDao;

    @Override
    public List<Position> findAllPosition() {
        return positionDao.findAll();
    }

    @Override
    public Position findPositionById(int id) {

        Position position;
        Optional<Position> opt = positionDao.findById(id);

        if (opt.isPresent()){
            position = opt.get();
        }else{
            throw new RuntimeException("The position id: "+ id + " wasn't found");
        }

        return position;
    }

    @Override
    public Position createPosition(Position position) {
        return positionDao.save(position);
    }

    @Override
    public String deletePosition(int id) {
        positionDao.deleteById(id);
        return "The position id: "+ id + " was deleted";
    }
}
