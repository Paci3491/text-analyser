package com.example.analyser.analyser;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

@Service
public class AnalyserService {

    List<Character> VOWELS = Arrays.asList('a', 'e', 'i', 'o', 'u');

    public HashMap<String, Integer> analyse(String letterType, String textInput) {

        char[] inputCharArr = textInput.replaceAll("\\s+","").toCharArray();
        HashMap<String, Integer> result = new HashMap<>();

        for (int i = 0; i < inputCharArr.length; i++) {
            char currentInputChar = Character.toLowerCase(inputCharArr[i]);
            String stringCharacter = String.valueOf(currentInputChar);

            if (letterType.equals("vowels") && this.VOWELS.contains(currentInputChar)) {
                this.CreateOrIncrementCharCount(result, stringCharacter);
            } else if (letterType.equals("consonants") && !this.VOWELS.contains(currentInputChar)) {
                this.CreateOrIncrementCharCount(result, stringCharacter);
            }
        }

        return result;
    }

    private void CreateOrIncrementCharCount(HashMap<String, Integer> result, String stringCharacter) {
        if (result.containsKey(stringCharacter)) {
            Integer num = result.get(stringCharacter);
            num++;
            result.put(stringCharacter, num);
        } else {
            result.put(stringCharacter, 1);
        }
    }
}

