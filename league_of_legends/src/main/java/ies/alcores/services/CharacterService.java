package ies.alcores.services;

import ies.alcores.persistence.model.Character;
import ies.alcores.persistence.repositories.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacterService {

    @Autowired
    private CharacterRepository characterRepository;

    public List<Character> findAll() {
        return this.characterRepository.findAll();
    }

    public Optional<Character> findById(final String id) {
        return this.characterRepository.findById(id);
    }

    public Optional<Character> save(final Character character) {
        return Optional.of(this.characterRepository.save(character));
    }

    public Optional<Character> delete(final String id) {
        return this.characterRepository.findById(id)
                .map(character -> {
                    this.characterRepository.delete(character);
                    return character;
                });
    }

    public Optional<Character> update(String id, Character character) {
        character.setId(id);

        return this.characterRepository.findById(id)
                .map(c -> this.characterRepository.save(character));
    }

    public List<Character> findMultipleRole() {
        return this.characterRepository.findCharacterWithTwoRoles();
    }

    public List<Character> findTanks() {
        return this.characterRepository.findTanks();
    }
}