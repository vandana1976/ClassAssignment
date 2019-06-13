package com.dealearship.demoproject;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.dealearship.demoproject.domain.Car;
import com.dealearship.demoproject.domain.CarRepository;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CardealershipApplication {

    private static final Logger log = LoggerFactory.getLogger(CardealershipApplication.class);
    public static void main(String[] args) {
        SpringApplication.run(CardealershipApplication.class, args);
    }

    @Bean
    public CommandLineRunner  demo(CarRepository repository) {
        return args -> {
            //save a couple curds
            repository.save(new Car("Toyota", "Camry", "Sedan", "Luxury"));
            repository.save(new Car("Honda", "Accord", "Sedan", "Luxury"));
            repository.save(new Car("Nissan", "Quest", "Van", "Sport"));
            repository.save(new Car("Nissan", "Versa", "Coupe", "Standard"));
            repository.save(new Car("Honda", "Civic", "Sedan", "Standard"));

            //read all custs
            log.info("Cars found with findAll():");
            log.info("-------------------------------");
            for (Car car : repository.findAll()){
                log.info(car.toString());
            }
            log.info("");

            //read an individual by ID
            repository.findById( 1L).ifPresent(car -> {
                log.info("Cars found with findById(1L):");
                log.info("-------------------------------");
                log.info(car.toString());
                log.info("");

            });

            //read custs by car make
            log.info("Cars found with findbyCarMake('Camry'):");
            log.info("------------------------");
            repository.findByCarModel("Camry").forEach(bauer -> {
                log.info(bauer.toString());
            });
        };
    }

}
