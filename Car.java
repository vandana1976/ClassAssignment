package com.dealearship.demoproject.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String CarMake;
    private String CarModel;
    private String BodyStyle;
    private String TrimLevels;

    private Car(){
        //@Entity needs a no arg constructor

    }


    public Car(String carMake, String carModel, String bodyStyle, String trimLevels) {
        CarMake = carMake;
        CarModel = carModel;
        BodyStyle = bodyStyle;
        TrimLevels = trimLevels;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCarMake() {
        return CarMake;
    }

    public void setCarMake(String carMake) {
        CarMake = carMake;
    }

    public String getCarModel() {
        return CarModel;
    }

    public void setCarModel(String carModel) {
        CarModel = carModel;
    }

    public String getBodyStyle() {
        return BodyStyle;
    }

    public void setBodyStyle(String bodyStyle) {
        BodyStyle = bodyStyle;
    }

    public String getTrimLevels() {
        return TrimLevels;
    }

    public void setTrimLevels(String trimLevels) {
        TrimLevels = trimLevels;
    }


    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", CarMake='" + CarMake + '\'' +
                ", CarModel='" + CarModel + '\'' +
                ", BodyStyle='" + BodyStyle + '\'' +
                ", TrimLevels='" + TrimLevels + '\'' +
                '}';
    }
}
