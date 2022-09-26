export class Photo {
  public image = '';
  public legend = '';
  public state: 'here' | 'late' | 'absent' = 'here';

  constructor(image: string, legend: string, state: 'here' | 'late' | 'absent') {
    this.image = image;
    this.legend = legend;
    this.state = state;
  }
}
