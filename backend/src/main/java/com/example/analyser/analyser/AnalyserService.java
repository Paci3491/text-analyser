package com.example.analyser.analyser;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

@Service
public class AnalyserService {


    public HashMap<String, Integer> analyse(String letterType, String textInput) {
        char[] inputCharArr = textInput.replaceAll("\\s+","").toCharArray();
        List<Character> vowels = Arrays.asList('a', 'e', 'i', 'o', 'u');
        HashMap<String, Integer> result = new HashMap<>();

        if (letterType.equals("vowels")) {
            for (int i = 0; i < inputCharArr.length; i++) {
                char currentInputChar = Character.toLowerCase(inputCharArr[i]);
                if (vowels.contains(currentInputChar)) {

                    String stringCharacter = String.valueOf(currentInputChar);
                    if (result.containsKey(stringCharacter)) {
                        Integer num = result.get(stringCharacter);
                        num++;
                        result.put(stringCharacter, num);
                    } else {
                        result.put(stringCharacter, 1);
                    }
                }
            }
        } else if (letterType.equals("consonants")) {
            for (int i = 0; i < inputCharArr.length; i++) {
                char currentInputChar = Character.toLowerCase(inputCharArr[i]);
                if (!vowels.contains(currentInputChar)) {

                    String stringCharacter = String.valueOf(currentInputChar);
                    if (result.containsKey(stringCharacter)) {
                        Integer num = result.get(stringCharacter);
                        num++;
                        result.put(stringCharacter, num);
                    } else {
                        result.put(stringCharacter, 1);
                    }
                }
            }
        }
        return result;
    }
}

