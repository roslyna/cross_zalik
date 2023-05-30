import {Injectable, Optional} from '@angular/core';
import {LogService} from "./logger/log.service";

@Injectable({
  providedIn: 'root'
})
export class ElephantService {

  colorCounts: { color: string; count: number }[] = [];
  colors: string[] = ['red', 'yellow', 'green', 'orange', 'aqua', 'black', 'white', 'grey', 'brown', 'purple', 'pink', 'violet', 'blue'];

  constructor(@Optional() private logService: LogService) {
  }

  do( numberOfColors: number,  numberOfElephants: number) {
    const elephants = this.generateElephants(numberOfColors, this.colors, numberOfElephants);

    this.colorCounts = this.countElephants(elephants);
  }
  generateElephants(numberOfColors: number, colors: string[], numberOfElephants: number): { color: string }[] {
    const elephants: { color: string }[] = [];
    for (let i = 0; i < numberOfElephants; i++) {
      const randomColorIndex = Math.floor(Math.random() * numberOfColors);
      elephants.push({ color: colors[randomColorIndex] });
    }
    return elephants;
  }

  countElephants(elephants: { color: string }[]): { color: string; count: number }[] {
    const colorCounts = new Map<string, number>();
    for (const elephant of elephants) {
      const { color } = elephant;
      if (colorCounts.has(color)) {
        colorCounts.set(color, colorCounts.get(color)! + 1);
      } else {
        colorCounts.set(color, 1);
      }
      if (this.logService) {
        this.logService.write("color = " + color + ", amount = " + elephant + '\n');
      }
    }
    return Array.from(colorCounts.entries()).map(([color, count]) => ({
      color,
      count,
    }));
  }

  doColor(index: string): string {
    return index;
  }

}
