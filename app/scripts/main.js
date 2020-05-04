class Layout {
  constructor() {
    this._clean = './app/css/clean.css';
    this._dark = './app/css/dark.css';
    this.cssEl = document.querySelector('link');
    this.btnEl = document.querySelector('a');
    this.gradientEl = document.querySelector('div');
    this.btnEl.addEventListener('click',(event)=>{
      event.preventDefault();
      this.setTheme();
    });
  }
  off() {
    this.cssEl.setAttribute('href', this._dark);
    this.btnEl.dataset.theme = 'off';
    this.gradientEl.classList.add('dark-gradient');
    this.gradientEl.classList.remove('clean-gradient');
  }
  on() {
    this.cssEl.setAttribute('href', this._clean);
    this.btnEl.dataset.theme = 'on';
    this.gradientEl.classList.add('clean-gradient');
    this.gradientEl.classList.remove('dark-gradient');
  }
  setTheme() {
    if(this.btnEl.dataset.theme === 'on') {
      this.off();
    }else {
      this.on();
    }
  }
}

const layout = new Layout();
