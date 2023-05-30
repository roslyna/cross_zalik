import { TestBed } from '@angular/core/testing';

import { ElephantService } from './elephant.service';

describe('ElephantService', () => {
  let service: ElephantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElephantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate elephants and count their colors', () => {
    const numberOfColors = 3;
    const numberOfElephants = 10;

    service.do(numberOfColors, numberOfElephants);

    // Assert the expected result
    expect(service.colorCounts.length).toBe(numberOfColors);
    expect(service.colorCounts.reduce((sum, entry) => sum + entry.count, 0)).toBe(numberOfElephants);
  });

  it('should generate the specified number of elephants with valid colors', () => {
    const numberOfColors = 3;
    const colors = ['red', 'green', 'blue'];
    const numberOfElephants = 10;

    const elephants = service.generateElephants(numberOfColors, colors, numberOfElephants);

    // Assert the expected result
    expect(elephants.length).toBe(numberOfElephants);
    elephants.forEach(elephant => {
      expect(colors).toContain(elephant.color);
    });
  });

  it('should count the number of elephants for each color', () => {
    const elephants = [
      { color: 'red' },
      { color: 'red' },
      { color: 'green' },
      { color: 'blue' },
      { color: 'blue' },
      { color: 'blue' },
    ];
    const colorCounts = service.countElephants(elephants);
    // Assert the expected result
    expect(colorCounts.length).toBe(3);
    expect(colorCounts.find(entry => entry.color === 'red')?.count).toBe(2);
    expect(colorCounts.find(entry => entry.color === 'green')?.count).toBe(1);
    expect(colorCounts.find(entry => entry.color === 'blue')?.count).toBe(3);
  });

  it('should return the provided index', () => {
    const index = 'red';
    const result = service.doColor(index);
    // Assert the expected result
    expect(result).toBe(index);
  });

});
