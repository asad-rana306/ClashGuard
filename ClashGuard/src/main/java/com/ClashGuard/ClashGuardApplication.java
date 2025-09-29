package com.ClashGuard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class ClashGuardApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClashGuardApplication.class, args);
	}

}
