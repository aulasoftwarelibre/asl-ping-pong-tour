import {Match} from './match';

test('Constructor', () => {
  let match = new Match("Salcedo", "Chema");
  expect(match.getNamePlayer1()).toBe("Salcedo");
});

test('PlayerScore1', () => {
  let score = 123;
  let match = new Match("Salcedo", "Chema");
  match.setScorePlayer1(score);
  expect(match.getScorePlayer1()).toBe(123);
});

test('PlayerScore2', () => { 
  let score = 11;
  let match = new Match("Salcedo","Chema");
  match.setScorePlayer2(score);
  expect(match.getScorePlayer2()).toBe(11);
})