package com.example.analyser.analyser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;

@RestController
@CrossOrigin
@RequestMapping(path = "api/v1/analyse")
public class AnalyserController {

    private final AnalyserService analyserService;

    @Autowired
    public AnalyserController(AnalyserService analyserService) {
        this.analyserService = analyserService;
    }

    @GetMapping
    public HashMap<String, Integer> analyse(@RequestParam String letterType, @RequestParam String textInput) {
        return analyserService.analyse(letterType, textInput);
    }

}
