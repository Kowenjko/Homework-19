
//База шрифтов

let familytext = document.querySelector('#family');
let arrFamily = ['Times New Roman', 'Georgia', 'Palatino Linotype', 'Arial', 'Comic Sans MS', 'Lucida Sans Unicode', 'Tahoma', 'Verdana', 'Courier New', 'Lucida Console', 'Fantasy', 'Gabriola', 'Herman', 'Monospace', 'Segoe print'];
for (let i = 0; i < arrFamily.length; i++) {
    let optionFamily = document.createElement('OPTION');
    optionFamily.textContent = arrFamily[i];
    optionFamily.style.fontFamily = arrFamily[i];
    familytext.appendChild(optionFamily);
}
// -----------------------------------------------------
class PrintMaсhine {
    constructor(text, sizes, colors, fonts) {
        this.messange = text
        this.sizeText = sizes
        this.colorText = colors
        this.fontText = fonts
    }
    print() {
        let out = document.querySelector('.output-text');
        let p = document.createElement('P');
        if (this.messange) {
            p.textContent = this.messange;
        }
        else { p.textContent = 'Test messange!' }
        out.prepend(p);
        p.style.color = this.colorText;
        p.style.fontFamily = this.fontText;
        p.style.fontSize = this.sizeText;

    }
}
btn.addEventListener('click', () => {
    let printText = new PrintMaсhine(`${content.value}`, `${size.value}px`, `${color.value}`, `${family.value}`).print();
})
