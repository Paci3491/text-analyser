package com.example.analyser.analyser;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class AnalyserService {


    public String analyse(String[] args) {
        String inputType = "vowels";
        String input = "Ahoj toto je string test";
        char[] inputCharArr = input.toCharArray();
        ArrayList<string> inputCharList = inputCharArr.asList();
        char[] vowels = {'a', 'e', 'i', 'o', 'u'};
        System.out.println(inputCharArr);


        if (inputType.equals("vowels")) {

            for (int i = 0; i < inputCharArr.length; i++) {
                System.out.println(inputCharArr[i]);
                if (vowels.contains(inputCharArr[i])) {

                }
            }

        } else if (args[0].equals("consonants")) {
            input = args[1];
            HashMap<String, Integer> consonants = new HashMap<>();
            char[] chars = input.toCharArray();
            for (int i = 0; i < chars.length; i++) {
                if (chars[i] != 'a'
                        && chars[i] != 'A'
                        && chars[i] != 'e'
                        && chars[i] != 'E'
                        && chars[i] != 'i'
                        && chars[i] != 'I'
                        && chars[i] != 'o'
                        && chars[i] != 'O'
                        && chars[i] != 'u'
                        && chars[i] != 'U'
                ) {
                    String stringCharacter = String.valueOf(chars[i]).toUpperCase();
                    if (consonants.containsKey(stringCharacter)) {
                        Integer num = consonants.get(stringCharacter);
                        num++;
                        consonants.put(stringCharacter, num);
                    } else{
                        consonants.put(stringCharacter, 1);
                    }
                }
            }
            consonants.entrySet().forEach(entrySet -> {
                System.out.println("Letter '" + entrySet.getKey() + "' appears " + entrySet.getValue() + " times");
            });
        }
        return "Success";
    }
}

