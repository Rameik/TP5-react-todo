export default class Task {
    constructor(Texto) {
        this.id = new Date().getTime().toString();
        this.texto = Texto;
        this.fechaCreado = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
        this.fechaTachado = null;
        this.checked = false;
    }
}