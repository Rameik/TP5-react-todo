export default class Task {
    constructor(id, Texto) {
        this.id = id
        this.texto = Texto;
        this.fechaCreado = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
        this.fechaTachado = null;
        this.checked = false;
    }
}