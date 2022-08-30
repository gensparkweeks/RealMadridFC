package com.rmback.service;

import com.rmback.model.Country;
import com.rmback.model.Position;

import java.util.List;

public interface PositionService {

    public List<Position> findAllPosition();
    public Position findPositionById(int id);
    public Position createPosition(Position position);
    public String deletePosition(int id);
}
