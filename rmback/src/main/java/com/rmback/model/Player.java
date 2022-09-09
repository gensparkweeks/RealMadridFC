package com.rmback.model;
import javax.persistence.*;
import java.util.Date;

@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="player_id")
    private int playerId;
    private String firstName;
    private String lastName;
    private Date dob;
    private String picture;
    private String bio;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="country_id", referencedColumnName = "country_id")
    private Country country;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="position_id", referencedColumnName = "position_id")
    private Position position;

    public Player() {}

    public Player(String firstName, String lastName, Date dob, String picture, String bio, Country country, Position position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.picture = picture;
        this.bio = bio;
        this.country = country;
        this.position = position;
    }

    public int getPlayerId() {
        return playerId;
    }

    public void setPlayerId(int playerId) {
        this.playerId = playerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    @Override
    public String toString() {
        return "Player{" +
                "playerId=" + playerId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dob=" + dob +
                ", picture='" + picture + '\'' +
                ", bio='" + bio + '\'' +
                ", country=" + country +
                ", position=" + position +
                '}';
    }
}
