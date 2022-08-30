package com.rmback.controller;

import com.rmback.model.Position;
import com.rmback.service.PositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/positions")
public class PositionController {

    @Autowired
    PositionService positionService;

    @GetMapping("/home")
    public String home(){
        return "<html><h1>Welcome to my API Rest from PositionController</h1></html>";
    }

    @GetMapping
    public List<Position> findAllPosition(){
        return positionService.findAllPosition();
    }

    @GetMapping("/{id}")
    public Position findPositionById(@PathVariable int id){
        return positionService.findPositionById(id);
    }

    @PostMapping
    public Position createPosition(@RequestBody Position position){
        return positionService.createPosition(position);
    }

    @PutMapping
    public Position updatePosition(@RequestBody Position position){
        return positionService.createPosition(position);
    }

    @DeleteMapping("/{id}")
    public String deletePosition(@PathVariable int id){
        return positionService.deletePosition(id);
    }
}
